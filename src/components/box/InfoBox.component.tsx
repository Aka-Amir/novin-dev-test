import { ComponentProps } from "../../@types";

export default function InfoBox(props: ComponentProps) {
  return (
    <section
      className={`p-5 rounded-s-2xl bg-theme-light shadow-xl shadow-theme-black/20 border-r-theme-primary-lighten border-r-4 ${props.className}`}
    >
      {props.children}
    </section>
  );
}
