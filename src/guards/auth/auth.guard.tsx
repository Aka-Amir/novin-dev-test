import { useEffect } from "react";
import { GuardsProps } from "../@types/guards.propsType";
import { useNavigate } from "react-router-dom";
import safeExecute from "../../helpers/safeExecute.helper";

export default function AuthGuard(props: GuardsProps) {
  const navigate = useNavigate();
  useEffect(() => {
    const path = safeExecute<string>(props.onFailed);
    if (path) {
      navigate(path);
    }
  }, []);
  return <>{props.children}</>;
}
