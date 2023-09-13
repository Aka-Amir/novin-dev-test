import { PropsWithChildren } from "react";
import { Users } from "./state";

export default function Providers(props: PropsWithChildren) {
  return <Users.UsersProvider>{props.children}</Users.UsersProvider>;
}
