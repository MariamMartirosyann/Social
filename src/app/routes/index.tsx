import { useRoutes } from "react-router-dom";
import loginRoutes from "./constants/loginRoutes";
import mainRoutes from "./constants/mainRoutes";
import secondaryRoutes from "./constants/secondaryLayout";

interface IRoutesProps {
  isLoggedIn: boolean;
}

const Routes = ({ isLoggedIn }: IRoutesProps) => {

  const routes = isLoggedIn
  ? [...mainRoutes, ...secondaryRoutes]
  : [...loginRoutes, ...secondaryRoutes];

  return useRoutes(routes);
};

export default Routes;

/*interface IRoutesProps {
  isLoggedIn: boolean;
}

const Routes = ({ isLoggedIn }: IRoutesProps) => {
  const routes = isLoggedIn
    ? [...MainRoutes, ...PublicRoutes]
    : [...LoginRoutes, ...PublicRoutes];
  return useRoutes(routes);
};

export default Routes;*/
