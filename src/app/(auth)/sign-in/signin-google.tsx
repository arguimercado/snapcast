"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/better-auth/auth-client";
import Image from "next/image";

const SignInGoogle = () => {

  const handleSignIn = async () => {
    return await authClient.signIn.social({provider: "google"});
  }

  return (
    <Button variant="outline" className="google-sign-in-button" onClick={handleSignIn}>
      <Image
        src="/assets/icons/google.svg"
        alt="Google Logo"
        width={22}
        height={22}
      />
      Sign in with Google
    </Button>
  );
};
export default SignInGoogle;
