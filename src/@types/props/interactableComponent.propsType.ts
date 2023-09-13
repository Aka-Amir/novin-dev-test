import { ComponentProps } from "./components.propsType";

export type InteractableComponentProps = ComponentProps &
  Partial<{
    onClick: () => void;
    disabled: boolean;
  }>;
