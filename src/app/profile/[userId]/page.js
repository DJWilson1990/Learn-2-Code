// user profile page
import { getProfile, getPosts } from "@/utils/utils";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs";
import ViewProfile from "@/app/components/ViewProfile";

export default async function Page({ params }) {
  const { userId } = auth();
  const userProfile = await getProfile(params.userId);

  if (!userProfile) {
    notFound();
  }
  return (
    <div>
      <ViewProfile />
      <p>users home profile page will be here.</p>
    </div>
  );
}
