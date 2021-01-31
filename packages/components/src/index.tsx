import React from "react";

export const Button = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => (
  <button style={{ color: "blue" }} {...props}>
    {children}
  </button>
);
