import { getProfile } from "@/utils/utils";

export default async function ViewProfile({ profile }) {
  return (
    <div>
      <p>{profile.first_name}</p>
      <p>{profile.last_name}</p>
      <p>{profile.user_name}</p>
    </div>
  );
}
