import { Navbar } from "@/components/layouts";
import ROUTE from "@/constants/routes";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect(ROUTE.SIGNIN);
  }
  return (
	<div>
		<Navbar />
		<main>{children}</main>
	</div>);
};
export default MainLayout;
