import React from "react";

export function Input({ id, type = "text", ...props }) {
  return (
    <input
      id={id}
      type={type}
      {...props}
      className="border border-gray-300 p-2 rounded-md w-full"
    />
  );
}
