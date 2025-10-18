import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui/button";

const UploadVideoAction = () => {
  return (
	<Button variant="ghost" size="sm" asChild>
		<Link href="/upload">
			<Image
				src="/assets/icons/upload.svg"
				alt="Upload Icon"
				width={16}
				height={16}
			/>
			<span>Upload Video</span>
		</Link>
	</Button>
  );
};
export default UploadVideoAction;
