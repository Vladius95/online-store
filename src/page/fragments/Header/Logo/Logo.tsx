import "./Logo.scss";

import * as React from "react";
import { Size } from "src/types/size";

const logo = require("./logo.svg");

export interface LogoProps {
  size: Size;
}

export function Logo({ size }: LogoProps) {
  console.log(logo);
  return <img src={logo.default} alt="Logo" className={`logo ${size}`} />;
}
