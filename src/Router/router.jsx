import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Pages/Home/Home";
import RootLayouts from "../Layouts/RootLayouts";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../assets/AuthContext/PrivateRoute";
import AddServices from "../Pages/Add_Services/AddServices";
import MyServices from "../Pages/My_Services/MyServices";
import MyReviews from "../Pages/My_Reviews/MyReviews";

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
      {
        path: "addServices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "myServices",
        element: (
          <PrivateRoute>
            <MyServices></MyServices>
          </PrivateRoute>
        ),
      },
      {
        path: "myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
