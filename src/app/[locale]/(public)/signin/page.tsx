import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <form className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold">Sign In</h1>
      <Button asChild>
        <Link href={"/api/auth/signin"}>Sign in</Link>
      </Button>
    </form>
  );
};

export default SignInPage;
