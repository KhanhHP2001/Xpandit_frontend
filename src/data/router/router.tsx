import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../screen/home";
import LoginPage from "../../screen/Login/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
