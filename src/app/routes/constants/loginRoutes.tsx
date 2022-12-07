import { Navigate } from "react-router-dom";
import { ERoutes } from ".";
import MinimalLayout from "../../layout/MinimalLayout";
import LoginPage from "../../pages/loginPage";
import Registration from "../../pages/registrationPage";



const LoginRoutes = [
    {
      path: "/",
      element: <MinimalLayout/>,
      children: [
        { path: "/", element: <Navigate to={`/${ERoutes.LOGIN}`} /> },
        {
          path: ERoutes.LOGIN,
          element: <LoginPage/>,
        },
        {
          path: ERoutes.REGISTER,
          element: <Registration/>,
        },
        {
          path: "*",
          element: <Navigate to={`/${ERoutes.LOGIN}`} />,
        },
      ],
    },
  ];
  
  export default LoginRoutes;
  