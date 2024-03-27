"use server";

import { sql } from "@vercel/postgres";

export async function saveProfile(formData) {
  const newProfile = formData.get("new_profile");
  const id = formData.get("user_id");
  const userName = formData.get("user_name");
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const email = formData.get("email");
  const language = formData.get("language");
  const course = formData.get("course");
  const step = formData.get("step");
  let queryString = "";
  if (newProfile === "true") {
    queryString = `INSERT INTO user_details (id, user_name, first_name, last_name, email, language, course, step) VALUES ('${id}', '${userName}', '${firstName}', '${lastName}', '${email}', '${language}', ${course}, ${step})`;
  } else {
    queryString = `UPDATE user_details SET user_name = '${userName}', first_name = '${firstName}', last_name = '${lastName}', email = '${email}', language = '${language}' WHERE id = '${id}'`;
  }
  try {
    const result = await sql.query(queryString);
  } catch (error) {
    return { result: false, message: error };
  }
}

export async function updateProfileImage(userId, imageUrl) {
  const queryString = `UPDATE user_details SET image_link = '${imageUrl}' WHERE id = '${userId}'`;
  await sql.query(queryString);
}

export async function getProfile(id) {
  try {
    const profile = (await sql`SELECT * FROM user_details WHERE id = ${id}`)
      .rows[0];
    return profile;
  } catch (error) {
    return undefined;
  }
}

export async function setProgress(course, step, userId) {
  const queryString = `UPDATE user_details SET course = ${course}, step = ${step} WHERE id = '${userId}'`;
  await sql.query(queryString);
}

export async function getLanguages() {
  try {
    const language = (
      await sql`SELECT language_name, language_code FROM language`
    ).rows;
    return language;
  } catch (error) {
    return undefined;
  }
}
