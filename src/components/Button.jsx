"use client";

export default function Button({ caption, action }) {
  async function handleClick(event) {
    action();
  }

  return (
    <div>
      <button
        className="border rounded-md w-36 m-4 p-2 bg-yellow-500 bor"
        onClick={handleClick}
      >
        {caption}
      </button>
    </div>
  );
}
