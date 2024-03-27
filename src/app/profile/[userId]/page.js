// user profile page
import { getProfile } from "@/utils/utils";
// import { notFound } from "next/navigation";
import { UserButton, auth } from "@clerk/nextjs";
import ViewProfile from "@/components/ViewProfile";
import { redirect } from "next/navigation";

export const metadata = {
  title: "User profile page",
  description: "Home page for logged in users",
};

export default async function Page({ params }) {
  const { userId } = auth();
  const clerkProfile = auth();
  const userProfile = await getProfile(userId);
  if (!userProfile) {
    redirect("/profile");
  }

  console.log(userId);
  console.log("clerkProfile" + clerkProfile);
  console.log(userProfile);

  if (!userProfile) {
    // notFound();
  }
  return (
    <div>
      <ViewProfile profile={userProfile} />
    </div>
  );
}
