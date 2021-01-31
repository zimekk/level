import React from "react";

export const Button = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => (
  <button style={{ color: "red" }} {...props}>
    {children}
  </button>
);
