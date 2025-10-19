"use client";

import { FormFile, FormField, FormSelect } from "@/components/shared";
import { uploadSchema, UploadSchemaType } from "@/schema/upload-schema";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

const UploadComponent = () => {

  const form = useForm<UploadSchemaType>({
    resolver: zodResolver(uploadSchema),
    defaultValues: {
      title: "",
      description: "",
      visibility: "public",
    }
  });

  const handleSubmit = async (data: UploadSchemaType) => {
    console.log("Form Data: ", data);
  }

  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a Video</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)} 
          className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5">
          <FieldGroup>
            <FormField
              control={form.control}
              name="title" 
              label="Title"
              placeholder="Enter video title"
              type="text"
            />
            <FormField
              control={form.control}
              name="description" 
              label="Description"
              placeholder="Enter video description"
              type="textarea"
            />
            <FormSelect
              control={form.control}
              name="visibility"
              label="Visibility"
              options={[
                { value: "public", label: "Public" },
                { value: "private", label: "Private" },
              ]}
            />
          </FieldGroup>
          <FormFile 
            control={form.control}
            name="videoFile"
            label="Upload Video"
            options={
              {
                accept: {"video/*": []},
                maxFiles: 1,
                multiple: false,
                fileType: "video",
              }
            }
          />
             <FormFile 
            control={form.control}
            name="thumbnail"
            label="Upload Thumbnail"
            options={
              {
                accept: {"image/*": []},
                maxFiles: 1,
                multiple: false,
                fileType: "image",
              }
            }
          />
          <Button type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
export default UploadComponent