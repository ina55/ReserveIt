import React from "react";
import "./utilities.css";

const AddBtn = () => {
  return (
    <svg
      className="btn"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 16 16"
    >
      <path
        className="add-btn"
        fill="currentColor"
        d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Zm6-3a.5.5 0 0 0-.5.5v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2v-2A.5.5 0 0 0 8 5Z"
      />
    </svg>
  );
};

export default AddBtn;
