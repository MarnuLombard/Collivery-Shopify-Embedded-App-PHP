import {Config, default as ziggyRoute, RouteParamsWithQueryOverload} from 'ziggy-js'
import {Ziggy} from '../../routes'

const route = (name: string, params?: RouteParamsWithQueryOverload, absolute?: boolean) => ziggyRoute(name, params, absolute, Ziggy as unknown as Config);

window.route = route;

export default route;

