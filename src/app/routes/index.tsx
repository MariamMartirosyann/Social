import { useRoutes } from "react-router-dom";
import mainRoutes from "./constants/mainRoutes";
import secondaryRoutes from "./constants/secondaryLayout";


const Routes = () => {
  const routes = [...mainRoutes, ...secondaryRoutes];

  return useRoutes(routes);
};

export default Routes;
