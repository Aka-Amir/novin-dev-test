import { ComponentProps } from "../../@types";

export default function Box(props: ComponentProps) {
  return (
    <section
      className={`p-5 rounded-2xl bg-theme-light shadow-xl shadow-theme-black/20 border-theme-primary-lighten border-2 ${props.className}`}
    >
      {props.children}
    </section>
  );
}
