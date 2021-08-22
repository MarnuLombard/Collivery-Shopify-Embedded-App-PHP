export enum StatusName {
  WaitingClientAcceptance = 'Waiting Client Acceptance',
  WaitingPayment = 'Waiting Payment',
  QuoteAccepted = 'Quote Accepted',
  Cancelled = 'Collivery Cancelled',
  Invoiced = 'Invoiced',
  Collected = 'Collected',
  Delivered = 'Delivered',
  InTransit = 'In Transit',
  CollectionDriverDispatched = 'Collection Driver Dispatched',
  CollectionFailed = 'Collection Failed',
  DeliveryFailed = 'Delivery Failed',
  ReceivedByBranch = 'Received By Branch',
  DeliveryDriverDispatched = 'Delivery Driver Dispatched',
  CollectionCourierAllocated = 'Collection Courier Allocated',
  DeliveryCourierAllocated = 'Delivery Courier Allocated',
  CollectionDriverAllocated = 'Collection Driver Allocated',
  DeliveryDriverAllocated = 'Delivery Driver Allocated',
  ReceivedByCourier = 'Received By Courier',
  OnHold = 'On Hold',
  PendingInvestigation = 'Pending Investigation',
  CollectionCourierDispatched = 'Collection Courier Dispatched',
  DeliveryCourierDispatched = 'Delivery Courier Dispatched',
  Completed = 'Completed',
};

export enum StatusId {
  WaitingClientAcceptance = 1,
  WaitingPayment = 2,
  QUOTE_ACCEPTED = 3,
  QuoteAccepted = 5,
  Cancelled = 6,
  Invoiced = 7,
  Collected = 8,
  Delivered = 9,
  InTransit = 10,
  CollectionDriverDispatched = 11,
  CollectionFailed = 12,
  DeliveryFailed = 14,
  ReceivedByBranch = 15,
  DeliveryDriverDispatched = 16,
  CollectionCourierAllocated = 17,
  DeliveryCourierAllocated = 18,
  CollectionDriverAllocated = 19,
  DeliveryDriverAllocated = 21,
  ReceivedByCourier = 27,
  OnHold = 29,
  PendingInvestigation = 30,
  CollectionCourierDispatched = 31,
  DeliveryCourierDispatched = 32,
}

export default class Status {
  id: StatusId;
  name: StatusName;

  constructor(id: StatusId, name: StatusName|null = null) {
    this.id = id;
    this.name = name || this.getName(id);
  }

  static active(): StatusId[] {
    return [
      StatusId.WaitingClientAcceptance,
      StatusId.WaitingPayment,
      StatusId.QuoteAccepted,
      StatusId.Collected,
      StatusId.InTransit,
      StatusId.CollectionDriverDispatched,
      StatusId.CollectionFailed,
      StatusId.DeliveryFailed,
      StatusId.ReceivedByBranch,
      StatusId.DeliveryDriverDispatched,
      StatusId.CollectionCourierAllocated,
      StatusId.DeliveryCourierAllocated,
      StatusId.CollectionDriverAllocated,
      StatusId.DeliveryDriverAllocated,
      StatusId.ReceivedByCourier,
      StatusId.OnHold,
      StatusId.PendingInvestigation,
      StatusId.CollectionCourierDispatched,
      StatusId.DeliveryCourierDispatched,
    ];
  }

  getName(id: StatusId): StatusName {
    const key = Object.entries(StatusId)
      .filter(([key, value]) => value == id)[0][0];
    const statusNames = new Map(Object.entries(StatusName));

    return statusNames.get(key) as StatusName;
  }
}
