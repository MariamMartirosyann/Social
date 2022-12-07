import { Navigate } from "react-router-dom";
import { ERoutes } from ".";
import MainLayout from "../../layout/MainLayout";
import Home from "../../pages/homePage";
import UserItem from "../../pages/UserItem";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={`/${ERoutes.HOME}`} />,
      },
      { path: ERoutes.HOME, element: <Home /> },
      { path: ERoutes.USER_ITEM, element: <UserItem /> },
    ],
  },
];

export default mainRoutes;
