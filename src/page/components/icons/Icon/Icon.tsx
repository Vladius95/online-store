import "./Icon.scss";

import * as React from "react";
import { Size } from "src/types/size";

export interface IconProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "className"> {
  rotate?: "up" | "right" | "down" | "left";
  size?: Size;
  extraClass?: string;
}

export function Icon({
  size = "x24",
  rotate = "up",
  extraClass = "",
  ...imageProps
}: React.PropsWithChildren<IconProps>) {
  const _size = Number(size.slice(1));

  const { width = _size, height = _size } = imageProps;

  return <img {...imageProps} width={width} height={height} className={`icon icon__rotate-${rotate} ${extraClass}`} />;
}
