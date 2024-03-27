import { SignIn } from "@clerk/nextjs";

export default function page() {
  return (
    <>
      <SignIn className="btnsignin" />
      {/* <Link className="a" href="/">Home</Link> */}
    </>
  );
}
