// user profile page
import { getProfile } from "@/utils/utils";
// import { notFound } from "next/navigation";
import { UserButton, auth } from "@clerk/nextjs";
import ViewProfile from "@/components/ViewProfile";

export const metadata = {
  title: "User profile page",
  description: "Home page for logged in users",
};

export default async function Page({ params }) {
  const { userId } = auth();
  const clerkProfile = auth();
  const userProfile = await getProfile(userId);

  console.log(userId);
  console.log("clerkProfile" + clerkProfile);
  console.log(userProfile);

  if (!userProfile) {
    // notFound();
  }
  return (
    <div>
      <UserButton />
      <ViewProfile profile={userProfile} />
      <p>users home profile page will be here.</p>
    </div>
  );
}
