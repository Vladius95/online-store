import "./SlideIndicator.scss";

import * as React from "react";
import cn from "classnames";
import { range } from "lodash";
import { Size } from "src/types/size";

export interface SlideIndicatorProps {
  count: number;
  active: number;
  size?: Size;
  extraClass?: string;
}

export function SlideIndicator({ active, count, size = "x16", extraClass = "" }: SlideIndicatorProps) {
  return (
    <div className={`slide-indicator ${extraClass}`}>
      {range(0, count).map(i => (
        <div
          key={i}
          className={cn(`slide-indicator__point ${size}`, { "slide-indicator__point--active": i === active })}
        ></div>
      ))}
    </div>
  );
}
