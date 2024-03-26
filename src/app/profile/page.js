//create and edit profile form page.
import { currentUser, auth } from "@clerk/nextjs";
import ProfileForm from "@/components/ProfileForm";
import { getProfile, saveProfile } from "@/utils/utils";

export const metadata = {
  title: "Complete registration",
  description: "Continue to set up user account",
};

export default async function Page() {
  let newProfile = true;
  let emailAddress;

  const { userId } = auth();
  console.log(userId);
  if (userId) {
    const user = await currentUser();
    emailAddress = user.emailAddresses[0].emailAddress;
    const profile = await getProfile(userId);
    if (profile) {
      newProfile = false;
    }
  }

  async function updateProfile(formData) {
    "use server";

    saveProfile({ formData, newProfile });
    // redirect("/profile");
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="m-10 font-bold text-lg text-white">
        Complete profile registration
      </h1>
      <ProfileForm
        action={updateProfile}
        user_id={userId}
        email={emailAddress}
        new_profile={newProfile}
      />
    </div>
  );
}
