"use server";

import { sql } from "@vercel/postgres";

export async function saveProfile(formData) {
  const newProfile = formData.get("new_profile");
  const id = formData.get("user_id");
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const email = formData.get("email");
  const language = formData.get("language");
  if (newProfile === "true") {
    queryString = `INSERT INTO user_details (id, first_name, last_name, email, language) VALUES ('${id}', '${firstName}', '${lastName}', '${email}', '${language}')`;
  } else {
    queryString = `UPDATE user_details SET first_name = '${firstName}', last_name = '${lastName}', email = '${email}', language = '${language}' WHERE id = '${id}'`;
  }
  try {
    const result = await sql.query(queryString);
  } catch (error) {
    return { result: false, message: error };
  }
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
