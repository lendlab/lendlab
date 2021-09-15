import * as React from "react";

export function SMS(props) {
  return (
    <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z"
        opacity={0.4}
      />
      <path d="M12 12.87a3.717 3.717 0 01-2.34-.79l-3.13-2.5a.747.747 0 11.93-1.17l3.13 2.5a2.386 2.386 0 002.81 0l3.13-2.5a.738.738 0 011.05.12.738.738 0 01-.12 1.05l-3.13 2.5a3.67 3.67 0 01-2.33.79z" />
    </svg>
  );
}
