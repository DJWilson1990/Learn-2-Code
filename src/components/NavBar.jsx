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
      {/* <Link className="c" href="/sign-in">sign-in</Link> |
        <Link className="d" href="/sign-up">sign-up</Link> */}
      {userId ? <UserButton afterSignOutUrl="/" /> : <SignInButton />}
      {/* <SignInButton /> */}
      <UserButton />
    </div>
  );
}
