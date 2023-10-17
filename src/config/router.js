import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";

import Albums from "../Components/Albums";
import Header from "../Components/Header";
import Users from "../Components/Users";
import Dashboard from "../Components/Dashboard";
import Signin from "../Components/SignIn";
import Signup from "../Components/SignUp";
import PostAd from "../Components/PostAd";
import Users2 from "../Components/Users2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      ,
      {
        path: "/",
        element: <Signin />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/:id",
        element: <Users2 />,
      },
      {
        path: "/postAd",
        element: <PostAd />,
      },
      {
        path: "/Albums",
        element: <Albums />,
      },
      {
        path: "/Albums/:id",
        element: <Users />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Router;
