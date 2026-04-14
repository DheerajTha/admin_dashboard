import Link from "next/link";
import SignupWithPassword from "./SignupWithPassword";

export default function SignUp() {
  return (
    <>
     

      <div>
        <SignupWithPassword />
      </div>

      <div className="mt-6 text-center">
        <p>
          Already have an account ? 
          <Link href="/auth/sign_in" className="text-primary ml-1">
             Sign In
          </Link>
        </p>
      </div>
    </>
  );
}
