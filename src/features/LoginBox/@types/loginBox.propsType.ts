import { TokenData } from "../../../@types";

export type LoginBoxProps = {
  onAuthenticated: (data: TokenData) => void;
};
