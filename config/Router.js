import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";

import Dashboard from "../views/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "Dashboard/",
        element: <Dashboard />,
      },
      {
        path: "Dashboard/:id",
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

function Main() {
  const navigate = useNavigate();

  return <div>
    <h1>Header</h1>
      <button onClick={() => navigate("Dashboard")}>Dashboard</button>

      <Outlet />
  </div>;
}

export default Router;
