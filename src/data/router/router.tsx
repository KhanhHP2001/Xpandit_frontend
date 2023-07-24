import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../screen/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
