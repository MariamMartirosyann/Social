import MainLayout from "../../layout/MainLayout";
import Home from "../../pages/homePage";
import UserItem from "../../pages/UserItem";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
  { path: "/", element: <Home /> },
  { path: "/user/:id", element: <UserItem /> },
]}];

export default mainRoutes;
