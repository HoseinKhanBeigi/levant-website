import React from "react";
import "./Button.scss";

interface ButtonInterface {
  onClick?: () => void;
  children: any;
  type: "primary" | "secondary" | "link" | "outlined";
  className?: any;
}

export default function Button({
  onClick,
  children,
  type,
  className,
}: ButtonInterface) {
  return (
    <button
      onClick={onClick}
      //   style={{ textAlign: "center" }}
      className={`${type} ${className}`}
    >
      {children}
    </button>
  );
}
