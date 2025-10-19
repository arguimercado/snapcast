import { cn } from "@/lib/utils";
import { CloudUploadIcon } from "lucide-react";
import Image from "next/image";

export const RenderEmptyState = ({
  isDragActive,
  fileType,
}: {
  isDragActive: boolean;
  fileType: "image" | "video";
}) => {
  return (
    <div className="text-gray-200 w-full flex flex-row items-center gap-2  ">
      <div className="flex items-center mx-auto justify-center size-12 rounded-full bg-muted">
        <CloudUploadIcon
          className={cn(
            "size-6 mx-auto h-6 w-6 text-muted-foreground",
            isDragActive && "text-primary"
          )}
        />
      </div>
      <p className="w-full text-base font-semibold text-foreground">
        Drop your {fileType} here or{" "}
        <span className="text-primary font-bold cursor-pointer">
          click to upload
        </span>
      </p>
    </div>
  );
};

export const RenderVideoState = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div className="flex w-full items-center">
      <video src={videoUrl} controls className="w-full h-auto" />
			
    </div>
  );
};

export const RenderImageState = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="flex w-full items-center">
      <Image
        src={imageUrl}
        alt="Uploaded Image"
        fill
        className="object-contain w-full h-auto"
      />
    </div>
  );
};

export const RenderUploadingState = ({
  progress,
  file,
}: {
  progress: number;
  file?: File | null;
}) => {
  console.log("Rendering uploading state with progress:", progress);
  return (
    <div>
      <p className="text-base font-semibold text-foreground">
        Uploading {file?.name}
      </p>
      <div className="relative w-full h-2 bg-muted rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-primary rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};


