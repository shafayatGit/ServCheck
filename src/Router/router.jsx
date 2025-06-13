import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Pages/Home/Home";
import RootLayouts from "../Layouts/RootLayouts";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
