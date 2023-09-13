import { useState } from "react";
import { ProvidersProps } from "../../@types";
import { usersContext as UsersContext } from "./users.context";
import { useSignal } from "../../hooks/useSignal";
import { deleteUser$, setUser$ } from "./users.signals";

export default function UsersStateProvider(props: ProvidersProps) {
  const [token, setToken] = useState("");

  useSignal(setUser$, {
    next: (v) => {
      setToken(v.token);
    },
  });

  useSignal(deleteUser$, {
    next: (v) => {
      setToken("");
    },
  });

  return (
    <UsersContext.Provider
      value={{
        token,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
}
