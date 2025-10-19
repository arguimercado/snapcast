"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ROUTE from "@/constants/routes";
import { useRouter } from "next/navigation";

const user = {};

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="navbar">
      <nav>
        <Link href={ROUTE.HOME}>
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={32}
            height={32}
          />
          <h1>SnapCast</h1>
        </Link>
				{user && (
					<figure className="flex items-center gap-2">
						<Button variant={"ghost"} size={"icon"} onClick={() => router.push(ROUTE.PROFILE)}>
							<Image src="/assets/images/dummy.jpg" alt="User Avatar" width={26} height={26} className="rounded-full aspect-square"/>
						</Button>
						<Button variant={"ghost"} className="cursor-pointer" size={"icon"} onClick={() => router.push(ROUTE.HOME)}>
							<Image src="/assets/icons/logout.svg" alt="Log out" width={24} height={24} className="rotate-180" />
						</Button>
					</figure>
				)}
      </nav>
    </header>
  );
};
export default Navbar;
