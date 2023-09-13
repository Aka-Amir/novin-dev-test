import { createBrowserRouter } from "react-router-dom";
import { AuthGuard } from "./guards";
import { AuthenticationPage } from "./pages";

export default createBrowserRouter([
  {
    index: true,
    element: <AuthGuard onSuccess={() => "/users"} onFailed={() => "/auth"} />,
  },
  {
    path: "auth",
    Component: AuthenticationPage,
  },
]);
