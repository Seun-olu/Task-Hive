import React from "react";

export const MenuOpen = ({onClick, className}) => {
  return (
    <svg
    className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
    >
      <g
        fill="white"
        stroke="white"
        stroke-linecap="white"
        stroke-linejoin="white"
        stroke-width="2"
      >
        <path stroke-dasharray="16" stroke-dashoffset="16" d="M5 5h14">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="16;0"
          />
        </path>
        <path stroke-dasharray="10" stroke-dashoffset="10" d="M5 12h9">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="10;0"
          />
        </path>
        <path stroke-dasharray="16" stroke-dashoffset="16" d="M5 19h14">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.4s"
            dur="0.2s"
            values="16;0"
          />
        </path>
        <path stroke-dasharray="10" stroke-dashoffset="10" d="M17 9l3 3l-3 3">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="10;0"
          />
        </path>
      </g>
    </svg>
  );
};
