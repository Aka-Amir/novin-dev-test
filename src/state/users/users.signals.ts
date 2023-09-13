import { createSignal } from "@react-rxjs/utils";
import { TokenData } from "../../@types";

export const [setUser$, setUser] = createSignal<TokenData>();
export const [deleteUser$, deleteUser] = createSignal<unknown>();
