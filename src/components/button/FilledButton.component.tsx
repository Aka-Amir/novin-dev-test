import { InteractableComponentProps } from "../../@types";

export default function FilledButton(
  props: InteractableComponentProps & { type?: "button" | "submit" | "reset" }
) {
  return (
    <button
      className={`bg-theme-primary py-2 px-5 
      hover:bg-theme-primary-lighten
      disabled:bg-theme-light
      transition-all
       text-theme-black rounded-xl outline-none ${props.className || ""}`}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled || false}
    >
      {props.children}
    </button>
  );
}
