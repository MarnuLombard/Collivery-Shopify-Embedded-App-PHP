import ServiceType from './ServiceType';
import {ResponseCollection} from './Responses';
import {WaybillService} from '../ShopifyPlugin/ColliveryApi/Models/WaybillService';

export type QuoteResponseCollection = ResponseCollection<
  {
    total: number;
    service_type: WaybillService;
    delivery_type: DeliveryType;
  },
  {
    times: Record<WaybillService, {collection_time: string; delivery_time: string}>;
    warnings: Record<WaybillService, string>;
    surcharges: Record<WaybillService, Record<string, number>>;
  }
>;

export class QuoteCollection {
  quotes!: Quote[];
  times?: Record<WaybillService, {collection_time: string; delivery_time: string}>;
  warnings?: Record<WaybillService, string>;
  surcharges?: Record<WaybillService, Record<string, number>>;

  static fromResponseCollection(response: QuoteResponseCollection): QuoteCollection {
    const quoteCollection = new QuoteCollection();

    quoteCollection.quotes = response.data.map(datum => new Quote(datum.service_type, datum.total, datum.delivery_type));
    quoteCollection.times = response.meta.times;
    quoteCollection.warnings = response.meta.warnings;
    quoteCollection.surcharges = response.meta.surcharges;

    return quoteCollection;
  }
}

enum DeliveryType {
  'local',
  'major',
  'main',
  'intermain',
}

export class Quote {
  serviceType: ServiceType;

  constructor(private serviceTypeId: WaybillService, public total: number, public deliveryType: DeliveryType) {
    this.serviceType = new ServiceType(serviceTypeId);
  }
}
