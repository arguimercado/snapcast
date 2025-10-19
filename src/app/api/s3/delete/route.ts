import { auth } from "@/lib/better-auth/auth";
import { S3 } from "@/lib/s3/s3-client";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { headers } from "next/headers";
import { NextResponse } from "next/server";


export async function DELETE(request: Request) {
	try {
		const session = await auth.api.getSession({
			headers: await headers(),
		})

		if (!session) {
			return new NextResponse(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
		}

		const body = await request.json();
		const { key } = body;
		if (!key) {
			return NextResponse.json({ error: "Key is required" }, { status: 400 });
		}

		const command = new DeleteObjectCommand({
			Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES,
			Key: key,
		});

		await S3.send(command);

		return NextResponse.json({ message: "Object deleted successfully" }, { status: 200 });

	} catch (error) {
		console.log("error", error);
		return NextResponse.json({ error: "Failed to delete object" }, { status: 500 });
	}
}