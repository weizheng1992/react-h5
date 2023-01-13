import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
// import arry from './modules/test1/test';
import { reactRouters } from './utils/getRouter';

export const rootRouter: RouteObject[] = [
  ...reactRouters(),
  // ...rootRouter
  // {
  //   path: '*',
  //   element: <Navigate to="/404" />,
  // },
];
const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
