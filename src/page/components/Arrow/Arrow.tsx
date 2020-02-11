import React from "react";

import "./Arrow.scss";

const arrow = require("./images/down-arrow-green.svg");

export enum ArrowFill {
  brown = "brown",
  green = "green"
}

interface ArrowProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  direction?: "up" | "right" | "down" | "left";
  fill?: ArrowFill;
  size?: "x16" | "x24" | "x32";
  extraClass?: string;
}

export const Arrow: React.SFC<ArrowProps> = ({ direction = "down", size = "x16", extraClass = "", ...imgProps }) => (
  <img {...imgProps} src={arrow} alt="Arrow" className={`arrow arrow-${direction} ${size} ${extraClass}`} />
);
