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
import ServiceDetails from "../Components/ServiceDetails";
import ErrorCard from "../Components/ErrorCard";
import ContactSection from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <ErrorCard></ErrorCard>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/contact",
        Component: ContactSection,
      },
      {
        path: "services",
        Component: Services,
        loader: () => fetch("https://servcheck-server.vercel.app/services"),
        hydrateFallbackElement: (
          <div className="w-full h-dvh mx-auto flex justify-center items-center">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
      },
      {
        path: "services/:id",

        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("https://servcheck-server.vercel.app/services"),
        hydrateFallbackElement: (
          <div className="w-full h-dvh mx-auto flex justify-center items-center">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
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
        path: "addService",
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
