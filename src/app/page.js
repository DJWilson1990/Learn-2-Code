import Image from "next/image";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) {
    redirect(`/profile/${userId}`);
  }
  return (
    <div className="homecontainer">
      <SignInButton />
      <UserButton />
      <div>
        <div className="header">
          <img
            src="./learncodelogo.png"
            width={"300"}
            height={"200"}
            alt="learn2code logo with keyboard"
          ></img>
        </div>
        <div className="flex-container-home">
          <div className="flex-items">
            <h2>
              Welcome to Learn2Code! Our website is designed with simplicity in
              mind to make learning to code easy and enjoyable for beginners.
              Whether you're completely new to coding or looking to brush up on
              your skills, Learn2Code offers a user-friendly platform packed
              with interactive tutorials, step-by-step guides, and hands-on
              exercises.
              <br></br>
              <br></br>
              Our carefully curated coding exercises cover programming languages
              such as HTML, and CSS, making it accessible for anyone eager to
              dive into the world of coding. With clear explanations and
              practical examples, you'll quickly grasp the fundamentals and
              build a solid foundation for your coding journey. Get started
              today and unlock the doors to endless possibilities in the world
              of technology!
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
