import { range, random, memoize } from "lodash";

export function randomHex() {
  const chars = memoize(() => [...range(0, 10).map(i => i.toString()), "A", "B", "C", "D", "E", "F"])();
  const symbols = range(6).map(i => chars[random(0, chars.length - 1)]);
  return `#${symbols.join("")}`;
}
