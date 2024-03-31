import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <App/>,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
          path: "/login",
          element:<Login/>
        }
    ]
  },
]);