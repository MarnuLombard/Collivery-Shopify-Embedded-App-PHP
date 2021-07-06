import {Config, default as ziggyRoute, InputParams} from 'ziggy-js'
import {Ziggy} from '../../routes'

const route = (name: string, params?: InputParams, absolute?: boolean) => ziggyRoute(name, params, absolute, Ziggy as unknown as Config);

window.route = route;

export default route;

