import { getProfile } from "@/utils/utils";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { redirect } from "next/navigation";

export default async function ViewProfile({ profile }) {
  async function resume() {
    "use server";
    redirect(`/course/${profile.course}/${profile.step}`);
  }

  async function playground() {
    "use server";
    redirect("/code-editor");
  }

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

      <p className="m-2">{profile.user_name}</p>
      <p className="m-2">
        {profile.first_name} {profile.last_name}
      </p>
      <p className="m-2">{profile.email}</p>
      <div className="flex">
        <Button action={resume} caption="Resume Learning" />
        <Button action={playground} caption="Go to code playground" />
      </div>
    </div>
  );
}
