import { useEffect } from "react";
import { GuardsProps } from "../@types/guards.propsType";
import { useNavigate } from "react-router-dom";
import safeExecute from "../../helpers/safeExecute.helper";
import { useUsersState } from "../../state/users";

export default function AuthGuard(props: GuardsProps) {
  const navigate = useNavigate();
  const user = useUsersState();

  useEffect(() => {
    if (!user.token) {
      const path = safeExecute<string>(props.onFailed);
      if (path) {
        navigate(path);
      }

      return;
    }

    const path = safeExecute<string>(props.onSuccess);
    if (path) {
      navigate(path);
    }
  }, [user]);
  return <>{props.children}</>;
}
