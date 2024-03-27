"use client";

export default function Button({ caption, action }) {
  async function handleClick(event) {
    action();
  }

  return (
    <>
      <button
        className="border rounded-md w-36 p-2 bg-yellow-500"
        onClick={handleClick}
      >
        {caption}
      </button>
    </>
  );
}
