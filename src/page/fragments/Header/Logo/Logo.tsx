import "./Logo.scss";
import * as React from "react";

const logo = require("./logo.svg");

export interface LogoProps {
  size: "x16" | "x32" | "x48" | "x64";
}

export function Logo({ size }: LogoProps) {
  return <img src={logo} alt="Logo" className={`logo ${size}`} />;
}
