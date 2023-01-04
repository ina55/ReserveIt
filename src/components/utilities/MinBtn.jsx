import React from "react";
import "./utilities.css";

const MinBtn = () => {
  return (
    <svg
      className="btn_"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 12 12"
    >
      <path
        className="min-btn"
        fill="currentColor"
        d="M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6Zm3-.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z"
      />
    </svg>
  );
};

export default MinBtn;
