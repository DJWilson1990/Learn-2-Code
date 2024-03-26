import { getProfile } from "@/utils/utils";
import Image from "next/image";
import React from "react";

export default async function ViewProfile({ profile }) {
  return (
    <div className="flex items-center flex-col mt-10">
      <Image
        // src="https://placehold.co/100x100/png"
        src={profile.image_link ?? "https://placehold.co/100x100/png"}
        alt="profile picture"
        width={100}
        height={100}
        className="rounded-full m-2"
      />
      <p className="m-2">{profile.first_name}</p>
      <p className="m-2">{profile.last_name}</p>
      <p className="m-2">{profile.user_name}</p>
    </div>
  );
}
