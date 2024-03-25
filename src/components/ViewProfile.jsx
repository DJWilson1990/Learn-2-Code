import { getProfile } from "@/utils/utils";

export default async function ViewProfile({ profile }) {
  return (
    <div>
      <p>{profile.firstName}</p>
      <p>{profile.lastName}</p>
    </div>
  );
}
