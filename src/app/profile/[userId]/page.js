// user profile page
import { getProfile } from "@/utils/utils";
// import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs";
import ViewProfile from "@/components/ViewProfile";

export default async function Page({ params }) {
  const { userId } = auth();
  const userProfile = await getProfile(params.userId);
  console.log(userId);

  if (!userProfile) {
    // notFound();
  }
  return (
    <div>
      <ViewProfile profile={userProfile} />
      <p>users home profile page will be here.</p>
    </div>
  );
}
