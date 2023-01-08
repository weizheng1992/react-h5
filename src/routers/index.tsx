import { Navigate, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

// * 导入所有router
const metaRouters: any = import.meta.glob('./modules/*.tsx', { eager: true });

// * 处理路由
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach((item) => {
  const mod = metaRouters[item].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routerArray.push(...modList);
  // Object.keys(metaRouters[item]).forEach((key: any) => {
  //   routerArray.push(...metaRouters[item][key]);
  //   // routerArray.push(metaRouters[item][key]);s
  // });
});

export const rootRouter: RouteObject[] = [
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
];
const Router = () => {
  const routes = useRoutes(routerArray);
  return routes;
};

export default Router;
