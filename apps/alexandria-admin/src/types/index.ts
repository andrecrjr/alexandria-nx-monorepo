import { ElementType } from 'react';
import { RouteObject } from 'react-router-dom';

export type RouteObjectMenu = {
  path: string;
  children?: RouteMenuArray[]; // optional children that are also of type RouteMenuArray
  menuName?: string;
  componentIcon?: ElementType;
};

export type RouteMenuArray = RouteObject & RouteObjectMenu;
