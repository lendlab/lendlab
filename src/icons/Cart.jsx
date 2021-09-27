import * as React from "react";

export const Cart = React.memo((props) => {
  return (
    <svg {...props} height={24} width={24} xmlns="http://www.w3.org/2000/svg">
      <g data-name="vuesax/bulk/shopping-cart" fill="#b7bdc3">
        <path
          d="M18 20.75A1.75 1.75 0 1116.25 19 1.75 1.75 0 0118 20.75zM10 20.75A1.75 1.75 0 118.25 19 1.75 1.75 0 0110 20.75z"
          data-name="Vector"
        />
        <path
          d="M4.84 3.94l-.2 2.45a.793.793 0 00.8.86h15.31a.8.8 0 00.8-.74 2.957 2.957 0 00-2.99-3.21H6.29a2.727 2.727 0 00-.61-1.21 2.62 2.62 0 00-1.91-.84H2a.755.755 0 00-.75.75.755.755 0 00.75.75h1.74a1.1 1.1 0 011.1 1.19z"
          data-name="Vector"
          opacity={0.4}
        />
        <path
          d="M20.51 8.75H5.17a.8.8 0 00-.8.73l-.36 4.35A2.928 2.928 0 006.92 17h11.12a3 3 0 002.93-2.73l.33-4.67a.782.782 0 00-.79-.85z"
          data-name="Vector"
        />
      </g>
    </svg>
  );
});
