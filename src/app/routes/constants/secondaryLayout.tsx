import { ERoutes } from ".";
import MinimalLayout from "../../layout/MinimalLayout";
import NotFound from "../../pages/NotFound";

const secondaryRoutes = [
  {
    path: "/",
    element: <MinimalLayout />,
    children: [{ path: ERoutes.NOT_FOUND, element: <NotFound /> }],
    
  },
];

export default secondaryRoutes;
