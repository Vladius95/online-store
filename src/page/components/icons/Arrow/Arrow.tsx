import React from "react";
import { IconProps, Icon } from "../Icon/Icon";

const arrow = require("./arrow.svg").default;

export interface ArrowProps extends IconProps {}

export function Arrow(props: ArrowProps) {
  return <Icon {...props} src={arrow} alt="Arrow" extraClass={`arrow ${props.extraClass || ""}`} />;
}
