import { auth } from "@/lib/better-auth/auth";
import { fileUploadSchema, uploadSchema } from "@/schema/upload-schema";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3 } from "@/lib/s3/s3-client";

export async function POST(request: Request) {

   try {
      const session = await auth.api.getSession({
         headers: await headers(),
      })

      if (!session) {
         return new NextResponse(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
      }

      const body = await request.json();
      const validation = fileUploadSchema.safeParse(body);

      if (!validation.success) {
         return NextResponse.json({ error: "Invalid Request Body" }, { status: 400 });
      }
      const { fileName, contentType, size, isImage } = validation.data;
      const uniqueKey = `${uuidv4()}-${fileName}`;
      
      const command = new PutObjectCommand({
         Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES!,
         Key: uniqueKey,
         ContentType: contentType,
      })

      const presignedUrl = await getSignedUrl(S3, command, {
         expiresIn: 3600, // 1 hour
      });

      const response = {
         presignedUrl,
         key: uniqueKey,
      }

      return NextResponse.json(response, { status: 200 });

   } catch (error) {
      return NextResponse.json({ error: "Failed to generate presigned URL" }, { status: 500 });
   }


}