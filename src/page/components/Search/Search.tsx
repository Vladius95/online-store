import React from "react";
import classNames from "classnames";

import { CommonButton } from "src/page/components/buttons/CommonButton";
import { CommonInput } from "src/page/components/TextField/TextField";

const ClearIcon = require("./images/clear.svg");
const LoupeIcon = require("./images/loupe.svg");

import "./Search.scss";

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear: VoidFunction;
  extraClass?: string;
}

function areEqualSearchProps(prevProps: SearchProps, nextProps: SearchProps) {
  return prevProps.value === nextProps.value;
}

export const Search: React.FC<SearchProps> = React.memo(({ onClear, extraClass, ...inputProps }) => {
  return (
    <form
      onSubmit={e => e.preventDefault()}
      className={classNames(`search ${extraClass}`, { "search__not-empty": !!inputProps.value })}
    >
      <img src={LoupeIcon} alt="Search loupe" className="search__loupe" />
      <CommonInput {...inputProps} type="search" inputMode="search" extraClass="search__input" />
      <CommonButton onClick={onClear} extraClass="search__clear-btn">
        <img src={ClearIcon} alt="Search clear" className="search__clear" />
      </CommonButton>
    </form>
  );
}, areEqualSearchProps);

Search.displayName = "Search";
