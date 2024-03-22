"use server";

import { saveProfile } from "./utils";
// import { redirect } from "next/navigation";

export async function updateProfile(formData) {
  console.log(formData);
  await saveProfile(formData);
  //   redirect("/profile");
}
