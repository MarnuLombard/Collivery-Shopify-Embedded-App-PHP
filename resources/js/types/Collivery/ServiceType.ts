export enum ServiceTypeName {
  SameDay = 'Same Day',
  NextDay = 'Next Day',
  Freight = 'Road Freight Express',
  Economy = 'Road Freight',
}

export enum ServiceTypeId {
  SameDay = 1,
  NextDay = 2,
  Freight = 3,
  Economy = 5,
}

export enum ServiceTypeCode {
  SameDay = 'SDX',
  NextDay = 'ONX',
  Freight = 'FRT',
  Economy = 'ECO',
}

export default class ServiceType {
  id: ServiceTypeId;
  name: ServiceTypeName;
  code: ServiceTypeCode;

  constructor(id: ServiceTypeId) {
    this.id = id;
    this.name = ServiceType.getName(id);
    this.code = ServiceType.getCode(id);
  }

  static getName(id: ServiceTypeId): ServiceTypeName {
    switch (id) {
      case ServiceTypeId.SameDay : return ServiceTypeName.SameDay;
      case ServiceTypeId.NextDay : return ServiceTypeName.NextDay;
      case ServiceTypeId.Freight : return ServiceTypeName.Freight;
      case ServiceTypeId.Economy : return ServiceTypeName.Economy;
    }
  }

  static getCode(id: ServiceTypeId): ServiceTypeCode {
    switch (id) {
      case ServiceTypeId.SameDay : return ServiceTypeCode.SameDay;
      case ServiceTypeId.NextDay : return ServiceTypeCode.NextDay;
      case ServiceTypeId.Freight : return ServiceTypeCode.Freight;
      case ServiceTypeId.Economy : return ServiceTypeCode.Economy;
    }
  }
}
