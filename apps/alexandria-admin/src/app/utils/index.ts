import { RouteObjectMenu } from '../../types';

export function extractItemsWithMenuName(data: RouteObjectMenu[]) {
  const result: RouteObjectMenu[] = [];

  function findItemsWithMenuName(items: RouteObjectMenu[], parentPath = '') {
    items.forEach((item) => {
      const currentPath = `${parentPath}/${item.path}`.replace(/\/+/g, '/');

      if (item.children) {
        const hasMenuName = item.children.some((child) => child.menuName);
        if (hasMenuName) {
          item.children
            .filter((child) => child.menuName)
            .forEach((child) => {
              result.push({
                ...child,
                path: `${currentPath}/${child.path}`.replace(/\/+/g, '/')
              });
            });
        }
        findItemsWithMenuName(item.children, currentPath);
      }
    });
  }

  findItemsWithMenuName(data);
  return result;
}
