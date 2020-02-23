import "./GoodsControls.scss";

import * as React from "react";
import { Arrow } from "src/page/components/Arrow/Arrow";
import { CommonButton } from "src/page/components/buttons/CommonButton";

export type GoodsControl = {
  onClick: VoidFunction;
  disabled: boolean;
};

export interface GoodsControlsProps {
  prevControl: GoodsControl;
  nextControl: GoodsControl;
}

export function GoodsControls({ prevControl, nextControl }: GoodsControlsProps) {
  return (
    <section className="goods-controls">
      <CommonButton
        disabled={prevControl.disabled}
        onClick={prevControl.onClick}
        extraClass="goods-controls__button goods-controls__button--prev"
      >
        <Arrow direction="left" extraClass="goods-controls__arrow goods-controls__arrow--prev" size="x8" />
        <p className="goods-controls__text">Prev</p>
      </CommonButton>
      <CommonButton
        disabled={nextControl.disabled}
        onClick={nextControl.onClick}
        extraClass="goods-controls__button goods-controls__button--next"
      >
        <p className="goods-controls__text">Next</p>
        <Arrow direction="right" extraClass="goods-controls__arrow goods-controls__arrow--next" size="x8" />
      </CommonButton>
    </section>
  );
}
