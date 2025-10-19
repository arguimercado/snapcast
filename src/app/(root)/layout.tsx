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

  const user = session.user;

  return (
	<div>
		<Navbar user={user} />
		<main>{children}</main>
	</div>);
};
export default MainLayout;
