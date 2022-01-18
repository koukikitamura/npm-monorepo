import React, { FC } from "react";
import { add } from "@koukikitamura/npm-monorepo-core";

type AddProps = {
  a: number;
  b: number;
};
export const Add: FC<AddProps> = ({ a, b }) => {
  const result = add(a, b);
  return <div>{result}</div>;
};
