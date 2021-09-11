import * as React from "react";

export function Export(props) {
  return (
    <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="#787c7f">
        <path
          d="M22 10.76a.86.86 0 00-.86-.86H2.86a.854.854 0 00-.86.86 9.565 9.565 0 0010 10 9.571 9.571 0 0010-10z"
          opacity={0.4}
        />
        <path d="M12.53 3.46l2.85 2.84a.75.75 0 01-1.06 1.06L12.75 5.8v9.57a.75.75 0 11-1.5 0V5.8L9.69 7.37a.76.76 0 01-1.29-.526.742.742 0 01.22-.53l2.85-2.844a.745.745 0 011.06-.01z" />
      </g>
    </svg>
  );
}
