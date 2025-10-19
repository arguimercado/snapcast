import ROUTE from "@/constants/routes"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const SignInPage = () => {
  return (
    <section>
      <Link href={ROUTE.HOME} >
            <Image src="/assets/icons/logo.svg" alt="Logo" width={40} height={40} />
            <h1>SnapCast</h1>
         </Link>
         <p>Create and share your very First <span>SnapCast video</span> in no time</p>
         <Button variant="outline" className="google-sign-in-button">
            <Image src="/assets/icons/google.svg" alt="Google Logo" width={22} height={22} />
            Sign in with Google
         </Button>
    </section>
  )
}
export default SignInPage