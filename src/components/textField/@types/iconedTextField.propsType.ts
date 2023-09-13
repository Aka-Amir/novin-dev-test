import { TextFieldPropsType } from "./textField.propsType";

export type IconedTextFieldProps = TextFieldPropsType & {
  icon: JSX.Element;
  onIconClicked?: () => void;
  disabledIcon?: boolean;
};
