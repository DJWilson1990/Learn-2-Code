import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
// import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) {
    // redirect("/profile");
  }
  return (
    <div>
      <Image
        src="/learn-coding-online.jpg"
        height={100}
        width={100}
        alt="learn to code"
      />

      <UserButton />

      <h1>LEARN 2 CODE</h1>
      <p>Hello World!</p>
    </div>
  );
}
