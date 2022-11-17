import MinimalLayout from "../../layout/MinimalLayout";
import NotFound from "../../pages/NotFound";

const secondaryRoutes = [
  {
    path: "/",
    element: <MinimalLayout />,
    children: [{ path:"404", element: <NotFound /> }],
  },
];

export default secondaryRoutes;
