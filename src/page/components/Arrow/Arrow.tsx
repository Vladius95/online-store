import React from "react";

import "./Arrow.scss";

interface ArrowProps {
  direction?: "up" | "right" | "down" | "left";
  size?: "x16" | "x24" | "x32" | "x48" | "x64";
  extraClass?: string;
}

export const Arrow: React.SFC<ArrowProps> = ({ direction = "down", size = "x16", extraClass = "", ...imgProps }) => {
  const sizeNum = size.slice(1);
  return (
    <svg
      width={sizeNum}
      height={sizeNum}
      x="0px"
      y="0px"
      viewBox="0 0 314.5 314.5"
      className={`arrow arrow-${direction} ${extraClass}`}
    >
      <path
        d="M314.5,90.5c0,6-2,13-7,18l-133,133c-5,5-10,7-17,7s-12-2-17-7l-133-133c-10-10-10-25,0-35
			s24-10,34,0l116,116l116-116c10-10,24-10,34,0C312.5,78.5,314.5,84.5,314.5,90.5z"
      />
    </svg>
  );
};
