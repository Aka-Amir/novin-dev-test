import { ComponentProps } from "./components.propsType";

export type AnimatedComponentProps = ComponentProps &
  Partial<{
    delay: number;
    duration: number;
    inView: boolean;
    infinity: boolean;
  }>;
