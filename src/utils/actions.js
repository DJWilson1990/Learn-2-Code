"use server";

import { saveProfile } from "./utils";
import { redirect } from "next/navigation";

export async function updateProfile(formData) {
  console.log(formData);
  const userId = formData.get("user_id");
  await saveProfile(formData);
  redirect(`/profile/${userId}`);
}
