import "./NumberField.scss";

import * as React from "react";
import { TextField, TextFieldProps } from "../TextField/TextField";
import { CommonButton } from "../buttons/CommonButton";
import { Arrow } from "../icons/Arrow/Arrow";

export interface NumberFieldProps {
  onIncrease?: VoidFunction;
  onDeacrease?: VoidFunction;
  value: number;
  extraClass?: string;
}

export function NumberField({ value, onDeacrease, onIncrease, extraClass = "" }: NumberFieldProps) {
  return (
    <div className={`number-field ${extraClass}`}>
      <TextField type="number" value={value} extraClass="number-field__input" />
      <div className="number-field__controls">
        <CommonButton onClick={onIncrease} extraClass="number-field__increase">
          <Arrow rotate="up" size="x12" />
        </CommonButton>
        <CommonButton onClick={onDeacrease} extraClass="number-field__deacrease">
          <Arrow rotate="down" size="x12" />
        </CommonButton>
      </div>
    </div>
  );
}
