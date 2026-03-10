import type { FC, PropsWithChildren, ReactNode } from "react";

export type CFC<P = object> = FC<PropsWithChildren<P>>;

export type LabeledComponentProps = { withLabel?: boolean };

export type LabeledIconProps = { icon: ReactNode; text: string };
