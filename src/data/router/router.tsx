import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../screen/Home/home";
import LoginPage from "../../screen/Login/login";
import RegisterPage from "../../screen/Register/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
