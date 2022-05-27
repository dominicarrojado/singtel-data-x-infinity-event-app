import { Route } from './types';
import { MAIN_URL } from './constants';

export function getRouteCanonical(route: Exclude<Route, Route.HOME>) {
  return `${MAIN_URL}${route.substring(1)}/`;
}
