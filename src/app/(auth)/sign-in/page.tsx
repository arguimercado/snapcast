import ROUTE from "@/constants/routes"
import Link from "next/link"
import Image from "next/image"
import SignInGoogle from "./signin-google"

const SignInPage = () => {

  return (
    <section>
      <Link href={ROUTE.HOME} >
            <Image src="/assets/icons/logo.svg" alt="Logo" width={40} height={40} />
            <h1>SnapCast</h1>
         </Link>
         <p>Create and share your very First <span>SnapCast video</span> in no time</p>
        <SignInGoogle />
    </section>
  )
}
export default SignInPage