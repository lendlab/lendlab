import * as React from "react";

export function Table(props) {
  return (
    <svg {...props} height={24} width={24} xmlns="http://www.w3.org/2000/svg">
      <g data-name="vuesax/bulk/grid-1" fill="#787c7f">
        <path d="M8.51 2v6.5H2v-.69C2 4.17 4.17 2 7.81 2z" />
        <path
          d="M22 7.81v.69h-6.49V2h.68C19.83 2 22 4.17 22 7.81zM22 15.5v.69c0 3.64-2.17 5.81-5.81 5.81h-.68v-6.5zM8.51 15.5V22h-.7C4.17 22 2 19.83 2 16.19v-.69z"
          data-name="Vector"
        />
        <path d="M2 8.5h6.51v7H2zM15.51 8.5H22v7h-6.49z" data-name="Vector" opacity={0.4} />
        <path d="M8.51 8.5h7v7h-7z" data-name="Vector" />
        <path d="M8.51 2h7v6.5h-7zM8.51 15.5h7V22h-7z" data-name="Vector" opacity={0.4} />
      </g>
    </svg>
  );
}
