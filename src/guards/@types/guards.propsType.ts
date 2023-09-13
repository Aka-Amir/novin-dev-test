import { ProvidersProps } from "../../@types";

export type GuardsProps = ProvidersProps &
  Partial<{
    onSuccess: () => string | void;
    onFailed: () => string | void;
  }>;
