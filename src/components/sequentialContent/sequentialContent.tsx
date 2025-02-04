import React from "react";
import "./sequentialContent.scss";
import { StaticImage } from "gatsby-plugin-image";
interface SequentialContentProps {
  items: Array<Record<string, any>>;
  title?: string;
  witImage?: boolean;
  withBackground?: boolean;
  description?: string;
}
export default function SequentialContent({
  title,
  items,
  witImage,
  withBackground,
  description,
}: SequentialContentProps) {
  return (
    <div className="sequentialContainer">
      <div className="sequentialContent">
        {title && <div className="sequentialTitle">{title}</div>}
        {description && <div className="sequentialDesc">{description}</div>}
        <div className="sequentialDesc">
          {items.map((item) => {
            return item.description ? (
              <div className="sequentialItemContainer">
                <span className="bullet" />
                <div>
                  <div className="sequentialItemContentTitle">
                    {item.content}
                  </div>
                  {item.description}
                </div>
              </div>
            ) : (
              <div className="sequentialItemContainer">
                <span className="bullet" />
                <div className="sequentialItemContent">{item.content}</div>
              </div>
            );
          })}
        </div>
      </div>
      {witImage && (
        <StaticImage
          src="../../../assets/images/cloud.png"
          alt="cloud"
          className="cloudImage"
        />
      )}
    </div>
  );
}
