import React, { FC } from "react";
import { sub } from "@koukikitamura/npm-monorepo-core";

type AddProps = {
  a: number;
  b: number;
};
export const Sub: FC<AddProps> = ({ a, b }) => {
  const result = sub(a, b);
  return <div>{result}</div>;
};
