import { Outlet, createBrowserRouter } from "react-router-dom";
import { AuthGuard } from "./guards";
import { AuthenticationPage } from "./pages";
import UsersListPage from "./pages/users/users-list.page";
import UsersDetailsPage from "./pages/users/user-details.page";
import { UsersLayout } from "./pages/users/users.layout";

export default createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <AuthGuard onSuccess={() => "/users"} onFailed={() => "/auth"} />,
  },
  {
    path: "auth",
    Component: AuthenticationPage,
  },
  {
    path: "users",
    element: (
      <UsersLayout>
        <Outlet />
      </UsersLayout>
    ),
    children: [
      {
        index: true,
        Component: UsersListPage,
      },
      {
        path: ":id",
        Component: UsersDetailsPage,
      },
    ],
  },
]);
