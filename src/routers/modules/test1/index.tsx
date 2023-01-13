import React from 'react';
import lazyLoad from '/@/routers/utils/lazyLoad';

import type { RouteObject } from 'react-router-dom';

const route: RouteObject[] = [
  { path: '', element: lazyLoad(React.lazy(() => import('/@/pages/test1'))) },
];

export default route;
