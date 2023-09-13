import { InteractableComponentProps } from "../../@types";

export default function OutlinedButton(props: InteractableComponentProps) {
  return (
    <button
      className={`bg-opacity-0 bg-theme-primary border-2 border-theme-primary py-2 px-5 
      hover:border-theme-primary-lighten
      hover:text-theme-primary-lighten
      transition-all
       text-theme-primary rounded-xl outline-none ${props.className || ""}`}
      onClick={props.onClick}
      disabled={props.disabled || false}
    >
      {props.children}
    </button>
  );
}
