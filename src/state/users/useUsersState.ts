import { useContext } from "react";
import { usersContext } from "./users.context";

export default function useUsersState() {
  return useContext(usersContext);
}
