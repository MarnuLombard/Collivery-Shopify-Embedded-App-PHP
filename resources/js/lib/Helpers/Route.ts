import {Config, default as ziggyRoute, RouteParamsWithQueryOverload, Router} from 'ziggy-js';
import {Ziggy} from '../../routes';

function route(): Router;
function route(name: string, params?: RouteParamsWithQueryOverload, absolute?: boolean): string;

function route(name?: string, params?: RouteParamsWithQueryOverload, absolute?: boolean): string | Router {
  if (typeof name === 'undefined') {
    return ziggyRoute();
  }

  return ziggyRoute(name, params, absolute, Ziggy as unknown as Config);
}

window.route = route;

export default route;
