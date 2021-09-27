import * as React from "react";

export function LogoutIcon({ fill = "#fff" }, ...props) {
  return (
    <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill={fill}>
        <path
          d="M13.24 2a.86.86 0 01.86.86v18.29a.86.86 0 01-.86.86 9.565 9.565 0 01-10-10A9.579 9.579 0 0113.24 2z"
          opacity={0.4}
        />
        <path d="M20.54 11.541l-2.84-2.85a.75.75 0 00-1.06 1.06l1.56 1.56H8.63a.75.75 0 000 1.5h9.57l-1.56 1.562a.754.754 0 000 1.06.748.748 0 001.06 0l2.84-2.85a.73.73 0 000-1.042z" />
      </g>
    </svg>
  );
}
