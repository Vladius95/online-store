import "./NumberField.scss";

import * as React from "react";
import { TextField, TextFieldProps } from "../TextField/TextField";
import { CommonButton } from "../buttons/CommonButton";
import { Arrow } from "../Arrow/Arrow";

export interface NumberFieldProps {
  value: number;
  extraClass?: string;
}

export function NumberField({ value, extraClass = "" }: NumberFieldProps) {
  const [_value, setValue] = React.useState<number>(value || 0);
  const onIncreaseValue = React.useCallback(() => {
    setValue(v => v + 1);
  }, []);
  const onDecreaseValue = React.useCallback(() => {
    setValue(v => v - 1);
  }, []);

  return (
    <div className={`number-field ${extraClass}`}>
      <TextField type="number" value={_value} extraClass="number-field__input" />
      <div className="number-field__controls">
        <CommonButton onClick={onIncreaseValue} extraClass="number-field__increase">
          <Arrow direction="up" size="x12" />
        </CommonButton>
        <CommonButton onClick={onDecreaseValue} extraClass="number-field__deacrease">
          <Arrow direction="down" size="x12" />
        </CommonButton>
      </div>
    </div>
  );
}
