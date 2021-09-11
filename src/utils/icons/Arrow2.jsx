import * as React from "react";

export function Arrow2({ fill, ...props }) {
  return (
    <svg height={15.129} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 7.648h16.19l-2.44-2.44a.75.75 0 011.06-1.059l3.71 3.71a.782.782 0 01.17.26.037.037 0 00.01.03.733.733 0 01-.17.79l-3.72 3.72a.748.748 0 01-1.06 0 .755.755 0 010-1.06l2.45-2.45H3a.75.75 0 010-1.5z"
        fill={fill}
      />
    </svg>
  );
}
