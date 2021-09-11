import * as React from "react";

export function Arrow({ fill, ...props }) {
  return (
    <svg height={15.129} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21 7.648H4.81l2.44-2.44a.75.75 0 00-1.06-1.059L2.48 7.858a.782.782 0 00-.17.26.037.037 0 01-.01.03.733.733 0 00.17.79l3.72 3.72a.748.748 0 001.06 0 .755.755 0 000-1.06L4.8 9.149H21a.75.75 0 000-1.5z"
        fill={fill}
      />
    </svg>
  );
}
