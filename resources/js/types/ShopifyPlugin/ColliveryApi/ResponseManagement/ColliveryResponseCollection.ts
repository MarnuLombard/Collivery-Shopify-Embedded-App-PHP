import {Links} from './Links';
import {Meta} from './Meta';

export type ColliveryResponseCollection = {
  data: any | Array<any>;
  links: Links;
  meta: Meta;
};
