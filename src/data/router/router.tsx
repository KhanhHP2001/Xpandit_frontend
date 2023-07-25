import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../screen/Home/home";
import LoginPage from "../../screen/Login/login";
import RegisterPage from "../../screen/Register/register";
import { routerPath } from "./router-path";

export const router = createBrowserRouter([
  {
    path: routerPath.homePath,
    element: <HomePage />,
  },
  {
    path: routerPath.loginPath,
    element: <LoginPage />,
  },
  {
    path: routerPath.registerPath,
    element: <RegisterPage />,
  },
]);
