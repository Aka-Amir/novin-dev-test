import { PropsWithChildren } from "react";

export type ComponentProps = Partial<{
  className: string;
}> &
  PropsWithChildren;
