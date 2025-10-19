"use client";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, Control, Path, Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { cn, getImageUrl } from "@/lib/utils";
import {
  RenderEmptyState,
  RenderImageState,
  RenderUploadingState,
  RenderVideoState,
} from "./render-state";
import { Card, CardContent } from "@/components/ui/card";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

const useFileUpload = (
  fileOptions?: FileOptionProps,
  value?: string,
  onChange?: (key: string) => void
) => {
  const [fileState, setFileState] = useState<UploadState>({
    isError: false,
    file: null,
    id: null,
    uploading: false,
    progress: 0,
    isDeleting: false,
    fileType: fileOptions?.fileType || "image",
    key: value || undefined,
  });

  const uploadFile = useCallback(async (file: File) => {
    setFileState((prev) => ({
      ...prev,
      uploading: true,
      progress: 0,
      isError: false,
    }));
    try {
      //1. Get Presigned Url
      const presigneResponse = await fetch("/api/s3/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: file.name,
          contentType: file.type,
          size: file.size,
          isImage: fileState.fileType === "image" ? true : false,
        }),
      });

      if (!presigneResponse.ok) {
        toast.error("Failed to get upload URL. Please try again.");
        setFileState((prev) => ({
          ...prev,
          progress: 0,
          uploading: false,
          isError: true,
        }));

        return;
      }

      const { presignedUrl, key } = await presigneResponse.json();

      await new Promise<void>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const percent = (event.loaded / event.total) * 100;
            setFileState((prev) => ({
              ...prev,
              progress: Math.round(percent),
            }));
          }
        };

        xhr.onload = () => {
          if (xhr.status === 200 || xhr.status === 204) {
            setFileState((prev) => ({
              ...prev,
              uploading: false,
              progress: 100,
              key: key,
            }));
            onChange?.(key);
            toast.success("File uploaded successfully");
            resolve(xhr.response);
          } else {
            reject(new Error("Failed to upload file"));
          }
        };

        xhr.onerror = () => {
          reject(new Error("Failed to upload file"));
        };

        xhr.open("PUT", presignedUrl);
        xhr.setRequestHeader("Content-Type", file.type);
        xhr.send(file);
      });
    } catch (error) {
      toast.error("File upload failed. Please try again.");
      setFileState((prev) => ({
        ...prev,
        progress: 0,
        uploading: false,
        isError: true,
      }));
    }
  }, []);

  const handleDrop = useCallback(
    (acceptedFile: File[]) => {
      if (acceptedFile.length === 0) return;

      const file = acceptedFile[0];

      if (fileState.objectUrl && !fileState.objectUrl.startsWith("http:")) {
        URL.revokeObjectURL(fileState.objectUrl);
      }

      setFileState({
        file: file,
        uploading: false,
        progress: 0,
        objectUrl: URL.createObjectURL(file),
        isError: false,
        id: uuidv4(),
        isDeleting: false,
        fileType: fileOptions?.fileType || "image",
      });

      uploadFile(file);
    },
    [fileState]
  );

  const handleDeleteClick = async () => {
    if (fileState.isDeleting || !fileState.objectUrl) {
      return;
    }

    try {
      setFileState((prev) => ({
        ...prev,
        isDeleting: true,
      }));

      const response = await fetch(`/api/s3/delete`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: fileState.key }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete file");
      }

      if (fileState.objectUrl && !fileState.objectUrl.startsWith("http:")) {
        URL.revokeObjectURL(fileState.objectUrl);
      }

      setFileState({
        id: null,
        file: null,
        uploading: false,
        progress: 0,
        objectUrl: undefined,
        isError: false,
        isDeleting: false,
        fileType: "image",
      });
      onChange?.("");
      toast.success("File deleted successfully");
    } catch (error: any) {
      toast.error("Failed to delete file");
      setFileState((prev) => ({
        ...prev,
        isError: true,
        isDeleting: false,
      }));
    }
  };

  return { fileState, setFileState, handleDrop, handleDeleteClick };
};

const FileUploader = ({
  value,
  onChange,
  isPreview = false,
  fileOptions,
}: {
  name: string;
  value?: string | null;
  onChange?: (value: string) => void;
  isPreview?: boolean;
  fileOptions?: FileOptionProps;
}) => {
  const { fileState, setFileState, handleDrop, handleDeleteClick } = useFileUpload(fileOptions, value, onChange);

  const renderContent = (dragState: { isDragActive: boolean }) => {
    if (fileState.uploading) {
      return (
        <RenderUploadingState
          progress={fileState.progress}
          file={fileState.file}
        />
      );
    }

    if (fileState.fileType === "video" && fileState.objectUrl) {
      return <RenderVideoState videoUrl={fileState.objectUrl} />;
    } else if (fileState.fileType === "image" && fileState.objectUrl) {
      return <RenderImageState imageUrl={fileState.objectUrl} />;
    }

    return (
      <RenderEmptyState
        isDragActive={dragState.isDragActive}
        fileType={fileState.fileType}
      />
    );
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: fileOptions?.accept || { "image/*": [], "video/*": [] },
    maxFiles: fileOptions?.maxFiles || 1,
    multiple: fileOptions?.multiple || false,
    maxSize: 500 * 1024 * 1024, // 500MB up to 500mb
    disabled:
      fileState.uploading || !!fileState.objectUrl || fileState.isDeleting,
    onDrop: handleDrop,
    onError: (err) => {
      toast.error(err.message);
    },
  });

  useEffect(() => {
    return () => {
      if (fileState.objectUrl && !fileState.objectUrl.startsWith("http:")) {
        URL.revokeObjectURL(fileState.objectUrl);
      }
    };
  }, [fileState.objectUrl]);

  useEffect(() => {
    if (isPreview) {
      setFileState((prev) => ({
        ...prev,
        key: value || undefined,
        objectUrl: getImageUrl(value ?? ""),
        fileType: fileOptions?.fileType || "image",
      }));
    }
  }, [isPreview]);

  return (
    <Card
      {...getRootProps()}
      className={cn(
        "relative border-dashed border-2 p-6 transition-colors duration-200 ease-in-out",
        isDragActive
          ? "border-primary bg-primary/10 border-solid"
          : "border-border hover:border-primary"
      )}
    >
      <CardContent className="flex items-center justify-center w-full p-4">
        <input
          {...getInputProps()}
          className="flex items-center justify-center h-full w-full p-4"
        />
        {renderContent({ isDragActive })}
        {fileState.objectUrl && !fileState.uploading && (
          <Button
            disabled={fileState.isDeleting}
            type="button"
            variant={"destructive"}
            size="icon"
            className={cn("absolute top-4 right-4")}
            onClick={handleDeleteClick}
          >
            <XIcon className="size-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

interface IProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  previewUrl?: string;
  options?: FileOptionProps;
}

const FormFile = <T extends FieldValues>({
  control,
  name,
  label,
  options,
}: IProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <section>
          <label htmlFor={name}>{label}</label>
          <FileUploader
            name={field.name}
            value={field.value as string | undefined}
            onChange={field.onChange}
            fileOptions={options}
          />
        </section>
      )}
    />
  );
};

export default FormFile;
