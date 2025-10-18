import { Navbar } from "@/components/layouts";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
	<div>
		<Navbar />
		<main>{children}</main>
	</div>);
};
export default MainLayout;
