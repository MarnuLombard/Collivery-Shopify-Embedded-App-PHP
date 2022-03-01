import {WaybillService} from '../ShopifyPlugin/ColliveryApi/Models/WaybillService';

export enum ServiceTypeName {
  SameDay = 'Same Day',
  NextDay = 'Next Day',
  Freight = 'Road Freight Express',
  Economy = 'Road Freight',
}

export enum ServiceTypeCode {
  SameDay = 'SDX',
  NextDay = 'ONX',
  Freight = 'FRT',
  Economy = 'ECO',
}

export default class ServiceType {
  id: WaybillService;
  name: ServiceTypeName;
  code: ServiceTypeCode;

  constructor(id: WaybillService) {
    this.id = id;
    this.name = ServiceType.getName(id);
    this.code = ServiceType.getCode(id);
  }

  static getName(id: WaybillService): ServiceTypeName {
    switch (id) {
      case WaybillService.SAME_DAY:
        return ServiceTypeName.SameDay;
      case WaybillService.NEXT_DAY:
        return ServiceTypeName.NextDay;
      case WaybillService.FREIGHT:
        return ServiceTypeName.Freight;
      case WaybillService.ECONOMY:
        return ServiceTypeName.Economy;
    }
  }

  static getCode(id: WaybillService): ServiceTypeCode {
    switch (id) {
      case WaybillService.SAME_DAY:
        return ServiceTypeCode.SameDay;
      case WaybillService.NEXT_DAY:
        return ServiceTypeCode.NextDay;
      case WaybillService.FREIGHT:
        return ServiceTypeCode.Freight;
      case WaybillService.ECONOMY:
        return ServiceTypeCode.Economy;
    }
  }
}
