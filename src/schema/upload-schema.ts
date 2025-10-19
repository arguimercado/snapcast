import * as z from "zod";

export const uploadSchema = z.object({
  title: z.string().min(2).max(100),
  description: z.string().max(500).optional(),
  thumbnail: z.string().optional(),
  videoFile: z.string().optional(),
  visibility: z.string().min(1),
});

export const fileUploadSchema = z.object({
   fileName: z.string().min(1, "File name is required"),
   contentType: z.string().min(1, "Content type is required"),
   size: z.number().min(1, "File size must be greater than 0"),
   isImage: z.boolean(),
   
});

export type UploadSchemaType = z.infer<typeof uploadSchema>;
export type FileUploadSchemaType = z.infer<typeof fileUploadSchema>;