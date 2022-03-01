import {ServiceTypeId} from './ServiceTypeId';
import {ServiceTypeCode} from './ServiceTypeCode';
import {ServiceTypeName} from './ServiceTypeName';

export type ServiceType = {
  id: ServiceTypeId;
  code: ServiceTypeCode;
  text: ServiceTypeName;
  description: string;
  delivery_days: number;
};
