"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";
import "./RadixForm.css";
import { updateProfile } from "@/utils/actions";

export default function ProfileForm({ action, user_id, email, new_profile }) {
  // async function submitForm(event) {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   action(formData);
  // }

  console.log(user_id, email, new_profile);
  return (
    <Form.Root className="FormRoot mx-auto" action={updateProfile}>
      <input type="hidden" name="user_id" value={user_id} />
      <input type="hidden" name="email" value={email} />
      <input type="hidden" name="new_profile" value={true} />

      <Form.Field className="FormField" name="username">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Username</Form.Label>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="first_name">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">First name</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your first name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" required />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="last_name">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Last name</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your last name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" required />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="language">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Language</Form.Label>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button className="Button" style={{ marginTop: 10 }}>
          Save
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
