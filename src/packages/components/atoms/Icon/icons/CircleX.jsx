import React from "react";

const CircleX = (props) => (
  <svg
    {...props}
    fill="currentColor"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M10.354 5.647a.5.5 0 0 1 0 .707l-4 4a.5.5 0 0 1-.708-.707l4-4a.5.5 0 0 1 .708 0Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M5.646 5.647a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.707l-4-4a.5.5 0 0 1 0-.707Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default Circle - X;
