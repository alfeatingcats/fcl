import type { FC, JSX, ReactNode } from "react";

export type CFC<P = object> = FC<P & { children?: ReactNode }>;

export type AFC = ({
  children,
}: {
  children: ReactNode;
}) => Promise<JSX.Element>;
