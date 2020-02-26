import "./CommonButton.scss";

import React from "react";

export interface CommonButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  extraClass?: string;
}

export function CommonButton({ extraClass = "", ...buttonProps }: CommonButtonProps) {
  return <button {...buttonProps} className={`common-button ${extraClass}`} />;
}

// https://material.io/components/buttons/
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  extraClass?: string;
}

export function MaterialButton({ extraClass = "", ...buttonProps }: ButtonProps) {
  return <button {...buttonProps} className={`button ${extraClass}`} />;
}
