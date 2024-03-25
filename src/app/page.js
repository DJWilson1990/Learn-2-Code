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
    <div className="homecontainer">
      <div>
        <div className="header">
          <img src="./learncodelogo.png"></img>
        </div>
        <div className="flex-container">
          <div className="flex-items">
            <h2>
              'Welcome to Learn2Code! Our website is designed with simplicity in
              mind to make learning to code easy and enjoyable for beginners..
            </h2>
          </div>
          <div className="flex-items">
            <h2>Log In or Sign Up buttons</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
