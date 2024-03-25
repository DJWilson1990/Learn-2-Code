"use client";

import { useCallback, useEffect, useState } from "react";
import "../app/globals.css"
export default function Input({ element, resetInput }) {
  const [userInput, setUserInput] = useState("");
  const [validInput, setValidInput] = useState(false);

  if (resetInput === true) {
    setUserInput("");
  }

  const validateInput = useCallback(() => {
    const outputDiv = document.getElementById("output");
    console.log("validating");
    const openingTagLength = element.opening_tag.length;
    const closingTagLength = element.closing_tag.length;
    const minLength = openingTagLength + closingTagLength;
    // trim - trims of space or whitespace from each end of string
    const input = userInput.trim();
    // input length needs to be atleast the length of opening and closing tags combined
    if (input.length < minLength) {
      outputDiv.innerHTML = "";
      return false;
    }
    // opening and closing tag check
    const opening = input.substring(0, openingTagLength);
    const closing = input.substring(input.length - closingTagLength);
    if (
      opening.toLowerCase() === element.opening_tag &&
      closing.toLowerCase() === element.closing_tag
    ) {
      outputDiv.innerHTML = userInput;
      return true;
    }
    outputDiv.innerHTML = "";
    return false;
  }, [userInput, element.opening_tag, element.closing_tag]);

  useEffect(() => {
    const result = validateInput();
    console.log(result);
    setValidInput(validateInput());
  }, [validateInput]);

  function handleChange(e) {
    e.preventDefault();
    setUserInput(e.target.value);
  }

  return (
    <div>
      <textarea
        onChange={handleChange}
        value={userInput}
        className={`${
          validInput === true ? "text-green-600" : "text-red-600"
        } border`}
        e
      ></textarea>
    </div>
  );
}
