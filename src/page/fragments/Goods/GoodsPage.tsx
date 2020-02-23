import * as React from "react";
import { RouteComponentProps } from "react-router";

export function GoodsPage(props: RouteComponentProps) {
  console.log(props.match.params);
  return <section className="goods-page">Goods Page</section>;
}
