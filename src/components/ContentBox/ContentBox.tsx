import React from "react";
import "./ContentBox.scss";

interface ContentBoxProps {
  title?: string;
  description: string | null;
}
export default function ContentBox({ title, description }: ContentBoxProps) {
  return (
    <div className="cloudContainer">
      <div className="cloudContent">
        {title && <div className="cloudTitle">{title}</div>}
        <div className="cloudDesc">{description}</div>
      </div>
    </div>
  );
}
