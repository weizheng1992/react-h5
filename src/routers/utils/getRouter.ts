import type { RouteObject } from 'react-router-dom';

function getModules() {
  let components;
  switch (__PRO_NAME__) {
    case 'test1':
      components = import.meta.glob(`../modules/test1/*.tsx`);
      break;
    default:
      components = import.meta.glob(`../modules/*.tsx`);
      break;
  }
  return components;
}
function getComponents() {
  let components;
  switch (__PRO_NAME__) {
    case 'test1':
      components = import.meta.globEager(`../modules/test1/*.tsx`);
      break;
    default:
      components = import.meta.globEager(`../modules/*.tsx`);
      break;
  }
  return components;
}

export const reactRouters = function (): Array<RouteObject> {
  const routerList: Array<RouteObject> = [];
  const modules = getModules();
  const components = getComponents();
  Object.keys(modules).forEach((key) => {
    const viewSrc: any = components[key];
    const file = viewSrc.default;
    if (file.length === 0) return;
    //  // 首字母转小写 letterToLowerCase 首字母转大写 letterToUpperCase
    //  routerList.push({
    //    path: `/${letterToLowerCase(file.name)}`,
    //    name: `${letterToUpperCase(file.name)}`,
    //    component: modules[key]
    //  });
    routerList.push(...file);
  });
  return routerList;
};
