import React from 'react';
import lazyLoad from '../utils/lazyLoad';

import type { RouteObject } from 'react-router-dom';

const route: RouteObject[] = [
  { path: '', element: lazyLoad(React.lazy(() => import('/@/pages/home'))) },
  { path: 'acount', element: lazyLoad(React.lazy(() => import('/@/pages/acount'))) },
];

export default route;
