import React from "react";
interface TypographyInterface {
    mt?: number;
    mb?: number;
    children: React.ReactNode;
    lh?: number;
    fontSize?: number;
    color?:string,
    fontWeight?:number
  }
  const customStyles = (
    mt?: number,
    mb?: number,
    lh?: number,
    fontSize?: number,
    color?:string,
    fontWeight?:number
  ) => ({
    content: {
      marginTop: `${mt}px`,
      marginBottom: `${mb}px`,
      lineHeight: `${lh}`,
      fontSize: `${fontSize}rem`,
      color:`${color}`,
      fontWeight:`${fontWeight}`
    },
  });
  export default function Typography  ({
    mb,
    mt,
    lh,
    fontSize,
    color,
    fontWeight,
    children,
  }: TypographyInterface) {
    return (
      <div style={customStyles(mt, mb, lh, fontSize,color,fontWeight).content}>{children}</div>
    );
  };
  