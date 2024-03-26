"use client";

export default function NextButton({ caption, action }) {
  async function handleClick(event) {
    action();
  }

  return (
    <div>
      <button className="border" onClick={handleClick}>
        {caption}
      </button>
    </div>
  );
}
