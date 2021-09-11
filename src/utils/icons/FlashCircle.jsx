import * as React from "react";

export function FlashCircle(props) {
  return (
    <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="#b7bdc3">
        <path d="M22 12A10 10 0 1112 2a10 10 0 0110 10z" opacity={0.4} />
        <path d="M8.68 11.91l1.65.41-.95 3.84c-.22.9.22 1.2.98.67l5.18-3.59c.63-.44.54-.95-.21-1.14l-1.65-.41.95-3.84c.22-.9-.22-1.2-.98-.67l-5.18 3.59c-.63.44-.54.948.21 1.14z" />
      </g>
    </svg>
  );
}
