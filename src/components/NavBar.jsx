import { SignInButton, UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const { userId } = auth();
  return (
    <div className="navbar">
      <Link className="a" href="/">
        Home
      </Link>
      <Link className="b" href="/about-us">
        About-Us
      </Link>
      {userId ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <SignInButton className="ml-10" />
      )}
    </div>
  );
}
