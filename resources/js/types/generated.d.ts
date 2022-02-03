declare namespace ShopifyPlugin.ColliveryApi.Models {
  export type Address = {
    id: number;
    custom_id: string | null;
    town_id: number;
    suburb_id: number;
    company_name: string | null;
    building_complex_name: string | null;
    street_number: string | null;
    street_name: string;
    postal_code: string | null;
    country_name: string;
    text: string;
    short_text: string;
    location_type: ShopifyPlugin.ColliveryApi.Models.LocationType;
    geocode_data: ShopifyPlugin.ColliveryApi.Models.GeocodeData;
  };
  export type AuthData = {
    id: number;
    full_name: string;
    email_address: string;
    landline_number: string | null;
    mobile_number: string | null;
    api_token: string;
    client: ShopifyPlugin.ColliveryApi.Models.Client;
  };
  export type Client = {
    id: number;
    name: string;
    landline_number: string | null;
    mobile_number: string | null;
    account_code: string;
    account_type: string;
    primary_address: ShopifyPlugin.ColliveryApi.Models.Address;
  };
  export type CollectionAddress = {
    id: number;
    custom_id: string | null;
    town_id: number;
    suburb_id: number;
    company_name: string | null;
    building_complex_name: string | null;
    street_number: string | null;
    street_name: string;
    postal_code: string | null;
    country_name: string;
    text: string;
    short_text: string;
    location_type: ShopifyPlugin.ColliveryApi.Models.LocationType;
    geocode_data: ShopifyPlugin.ColliveryApi.Models.GeocodeData;
  };
  export type DeliveryAddress = {
    id: number;
    custom_id: string | null;
    town_id: number;
    suburb_id: number;
    company_name: string | null;
    building_complex_name: string | null;
    street_number: string | null;
    street_name: string;
    postal_code: string | null;
    country_name: string;
    text: string;
    short_text: string;
    location_type: ShopifyPlugin.ColliveryApi.Models.LocationType;
    geocode_data: ShopifyPlugin.ColliveryApi.Models.GeocodeData;
  };
  export type GeocodeData = {
    accuracy: number;
    accuracy_type: string;
    last_geocoded_at: string;
    latitude: number;
    longitude: number;
  };
  export type LocationType = {
    id: number;
    name: string;
    surcharge: boolean;
    surcharge_amount: number;
  };
  export type Parcel = {
    id: number;
    waybill_id: number;
    parcel_number: number;
    custom_id: string | null;
    quantity: number;
    length: number;
    width: number;
    height: number;
    weight: number;
    volumetric_weight: number;
    created_at: string;
    add_method: string;
  };
  export type PrimaryAddress = {
    id: number;
    custom_id: string | null;
    town_id: number;
    suburb_id: number;
    company_name: string | null;
    building_complex_name: string | null;
    street_number: string | null;
    street_name: string;
    postal_code: string | null;
    country_name: string;
    text: string;
    short_text: string;
    location_type: ShopifyPlugin.ColliveryApi.Models.LocationType;
    geocode_data: ShopifyPlugin.ColliveryApi.Models.GeocodeData;
  };
  export type Quote = {
    service_type: number;
    total: number;
    delivery_type: string;
  };
  export type ServiceType = {
    id: ShopifyPlugin.ColliveryApi.Models.ServiceTypeId;
    code: ShopifyPlugin.ColliveryApi.Models.ServiceTypeCode;
    text: ShopifyPlugin.ColliveryApi.Models.ServiceTypeName;
    description: string;
    delivery_days: number;
  };

  export enum ServiceTypeCode {
    SAME_DAY = 'SDX',
    NEXT_DAY = 'ONX',
    FREIGHT = 'FRT',
    ECONOMY = 'ECO',
  }

  export enum ServiceTypeId {
    SAME_DAY = 1,
    NEXT_DAY = 2,
    FREIGHT = 3,
    ECONOMY = 5,
  }

  export enum ServiceTypeName {
    SAME_DAY = 'Same Day',
    NEXT_DAY = 'Next Day',
    FREIGHT = 'Road Freight Express',
    ECONOMY = 'Road Freight',
  }

  export type StatusTracking = {
    status_id: number;
    status_name: string;
    waybill_id: number;
    created_at: string;
  };
  export type Waybill = {
    id: number;
    custom_id: string | null;
    service_type_id: ShopifyPlugin.ColliveryApi.Models.ServiceTypeId;
    service_type_name: ShopifyPlugin.ColliveryApi.Models.ServiceTypeName;
    collection_time: number;
    customer_reference: string | null;
    delivery_time: number;
    parcel_count: number;
    special_instructions: string;
    collection_address_id: number;
    collection_contact_id: number;
    delivery_address_id: number;
    delivery_contact_id: number;
    status_id: number;
    status_name: string;
    parcel_description: string;
    weight: number;
    volumetric_weight: number;
    total_price: number;
    risk_cover: boolean;
    delivery_address: ShopifyPlugin.ColliveryApi.Models.Address;
    collection_address: ShopifyPlugin.ColliveryApi.Models.Address;
    parcels: Array<any>;
  };
  export type WaybillDocument = {
    id: string;
    type: string;
    file_name: string;
    pages: string;
    mime: string;
    size: string;
    created_at: string;
    image: string;
  };

  export enum WaybillService {
    SAME_DAY = 1,
    NEXT_DAY = 2,
    FREIGHT = 3,
    ECONOMY = 5,
  }
}
declare namespace ShopifyPlugin.ColliveryApi.ResponseManagement {
  export type ColliveryResponseCollection = {
    data: any | Array<any>;
    links: ShopifyPlugin.ColliveryApi.ResponseManagement.Links;
    meta: ShopifyPlugin.ColliveryApi.ResponseManagement.Meta;
  };
  export type Links = {
    first: string;
    last: string;
    next: string | null;
    prev: string | null;
  };
  export type Meta = {
    current_page: number;
    last_page: number;
    path: string;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
  };
}
declare namespace ShopifyPlugin.ShopifyApi.Models {
  export type Address = {
    latitude: number;
    longitude: number;
    company: string | null;
    last_name: string | null;
    default: boolean | null;
    id: number | null;
    customer_id: number | null;
    country_code: string;
    country_name: string | null;
    province: string;
    province_code: string;
    zip: string;
    address1: string;
    address2: string | null;
    phone: string | null;
    first_name: string | null;
    name: string | null;
    city: string;
    country: string;
  };
  export type AmountSet = {
    shop_money: ShopifyPlugin.ShopifyApi.Models.Money;
    presentment_money: ShopifyPlugin.ShopifyApi.Models.Money;
  };
  export type Attribute = {
    name: string;
    value: string | number;
  };
  export type ClientDetails = {
    accept_language: string;
    browser_height: string;
    browser_ip: string;
    browser_width: string;
    session_hash: string | null;
    user_agent: string;
  };
  export type CurrencyExchangeAdjustment = {
    id: number;
    currency: string;
    adjustment: string;
    final_amount: string;
    original_amount: string;
  };
  export type Customer = {
    id: number;
    email: string;
    accepts_marketing: boolean;
    created_at: string;
    updated_at: string;
    first_name: string;
    last_name: string;
    orders_count: number;
    state: string;
    total_spent: string;
    last_order_id: number | null;
    last_order_name: string | null;
    note: string | null;
    verified_email: boolean;
    multipass_identifier: string | null;
    tax_exempt: boolean;
    phone: string | null;
    tags: string;
    currency: string;
    accepts_marketing_updated_at: string;
    marketing_opt_in_level: any;
    tax_exemptions: Array<any> | null;
    sms_marketing_consent: any;
    admin_graphql_api_id: string;
    default_address: ShopifyPlugin.ShopifyApi.Models.DefaultAddress;
  };
  export type DefaultAddress = {
    company: string | null;
    last_name: string | null;
    default: boolean | null;
    id: number | null;
    customer_id: number | null;
    country_code: string;
    country_name: string | null;
    province: string;
    province_code: string;
    zip: string;
    address1: string;
    address2: string | null;
    phone: string | null;
    first_name: string | null;
    name: string | null;
    city: string;
    country: string;
  };
  export type DiscountAllocation = {
    amount: string;
    amount_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    discount_application_index: number;
  };
  export type DiscountApplications = {
    target_type: string;
    type: string;
    value: string;
    value_type: string;
    allocation_method: string;
    target_selection: string;
    code: string;
  };
  export type DiscountCode = {
    code: string;
    amount: string;
    type: string;
  };
  export type Duty = {
    id: number;
    tax_lines: Array<any>;
  };
  export type ExtendedAuthorizationAttributes = {
    extended_authorization_expires_at: string;
    standard_authorization_expires_at: string;
  };
  export type Fulfillment = {
    id: number;
    admin_graphql_api_id: string;
    created_at: string;
    location_id: number;
    name: string;
    order_id: number;
    origin_address: ShopifyPlugin.ShopifyApi.Models.Address;
    receipt: ShopifyPlugin.ShopifyApi.Models.Receipt;
    service: string;
    shipment_status: any;
    status: string;
    tracking_company: string;
    tracking_number: string;
    tracking_numbers: Array<string>;
    tracking_url: string;
    tracking_urls: Array<string>;
    updated_at: string;
    line_items: Array<any>;
  };
  export type LineItem = {
    id: number | null;
    admin_graphql_api_id: string | null;
    fulfillable_quantity: number | null;
    fulfillment_service: string;
    fulfillment_status: string | null;
    gift_card: boolean | null;
    grams: number;
    name: string;
    price: string | null;
    price_set: ShopifyPlugin.ShopifyApi.Models.AmountSet | null;
    product_exists: boolean | null;
    product_id: number;
    properties: Array<any>;
    quantity: number;
    requires_shipping: boolean;
    sku: string | null;
    taxable: boolean;
    title: string | null;
    total_discount: string | null;
    total_discount_set: ShopifyPlugin.ShopifyApi.Models.AmountSet | null;
    variant_id: number;
    variant_inventory_management: string | null;
    variant_title: string | null;
    vendor: string | null;
    tax_lines: Array<any> | null;
    duties: Array<any> | null;
    discount_allocations: Array<any> | null;
  };
  export type LocationId = {
    id: number;
  };
  export type Money = {
    amount: string;
    currency_code: string;
  };
  export type Order = {
    id: number;
    admin_graphql_api_id: string;
    app_id: number | null;
    browser_ip: string;
    buyer_accepts_marketing: boolean;
    cancel_reason: string | null;
    cancelled_at: string | null;
    cart_token: string;
    checkout_id: number;
    checkout_token: string;
    client_details: ShopifyPlugin.ShopifyApi.Models.ClientDetails;
    closed_at: string | null;
    confirmed: boolean;
    contact_email: string;
    created_at: string;
    currency: string;
    current_subtotal_price: string;
    current_subtotal_price_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    current_total_discounts: string;
    current_total_discounts_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    current_total_duties_set: ShopifyPlugin.ShopifyApi.Models.AmountSet | null;
    current_total_price: string;
    current_total_price_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    current_total_tax: string;
    current_total_tax_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    customer_locale: string | null;
    device_id: string | null;
    discount_codes: Array<any>;
    email: string;
    estimated_taxes: boolean;
    financial_status: string;
    fulfillment_status: string | null;
    gateway: string;
    landing_site: string;
    landing_site_ref: string | null;
    location_id: number | null;
    name: string;
    note: string | null;
    note_attributes: Array<any>;
    number: number;
    order_number: number;
    order_status_url: string;
    original_total_duties_set: ShopifyPlugin.ShopifyApi.Models.AmountSet | null;
    payment_gateway_names: Array<string>;
    phone: string | null;
    presentment_currency: string;
    processed_at: string;
    processing_method: string;
    reference: string | null;
    referring_site: string;
    source_identifier: string | null;
    source_name: string;
    source_url: string | null;
    subtotal_price: string;
    subtotal_price_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    tags: string;
    tax_lines: Array<any>;
    taxes_included: boolean;
    test: boolean;
    token: string;
    total_discounts: string;
    total_discounts_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    total_line_items_price: string;
    total_line_items_price_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    total_outstanding: string;
    total_price: string;
    total_price_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    total_price_usd: string;
    total_shipping_price_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    total_tax: string;
    total_tax_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    total_tip_received: string;
    total_weight: number;
    updated_at: string;
    user_id: number | null;
    billing_address: ShopifyPlugin.ShopifyApi.Models.Address;
    customer: ShopifyPlugin.ShopifyApi.Models.Customer;
    discount_applications: Array<any>;
    fulfillments: Array<any>;
    line_items: Array<any>;
    payment_details: ShopifyPlugin.ShopifyApi.Models.PaymentDetails;
    refunds: Array<any>;
    shipping_address: ShopifyPlugin.ShopifyApi.Models.Address;
    shipping_lines: Array<any>;
  };
  export type PaymentDetails = {
    credit_card_number: string;
    credit_card_company: string;
    credit_card_bin: string | null;
    avs_result_code: string | null;
    cvv_result_code: string | null;
    credit_card_name: string | null;
    credit_card_wallet: string | null;
    credit_card_expiration_month: string | null;
    credit_card_expiration_year: string | null;
  };
  export type Province = {
    code: string;
    name: string;
  };
  export type QuoteAddress = {
    address3: string | null;
    address_type: string | null;
    company_name: string | null;
    email: string | null;
    fax: string | null;
    province: string;
    postal_code: number;
    address1: string;
    address2: string | null;
    phone: string | null;
    first_name: string | null;
    name: string | null;
    city: string;
    country: string;
  };
  export type QuoteRequest = {
    rate: ShopifyPlugin.ShopifyApi.Models.Rate;
  };
  export type Rate = {
    origin: ShopifyPlugin.ShopifyApi.Models.QuoteAddress;
    destination: ShopifyPlugin.ShopifyApi.Models.QuoteAddress;
    items: Array<ShopifyPlugin.ShopifyApi.Models.ShippingLine>;
    currency: string;
    locale: string;
  };
  export type Receipt = {
    testcase: boolean;
    authorization: string;
  };
  export type Refund = {
    id: number;
    admin_graphql_api_id: string;
    created_at: string;
    note: string;
    order_id: number;
    processed_at: string;
    restock: boolean;
    total_additional_fees_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    total_duties_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    user_id: number;
    order_adjustments: any;
    transactions: Array<any>;
    refund_line_items: Array<any>;
    duties: any;
    additional_fees: any;
  };
  export type RefundLineItems = {
    id: number;
    line_item_id: number;
    location_id: number;
    quantity: number;
    restock_type: string;
    subtotal: number;
    subtotal_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    total_tax: number;
    total_tax_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    line_item: ShopifyPlugin.ShopifyApi.Models.LineItem;
  };
  export type ShippingLine = {
    id: number | null;
    carrier_identifier: string | null;
    code: string;
    delivery_category: any;
    discounted_price: string;
    discounted_price_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    phone: string | null;
    price: string;
    price_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    requested_fulfillment_service_id: string | null;
    source: string;
    title: string;
    tax_lines: Array<any>;
    discount_allocations: Array<any>;
  };
  export type TaxLine = {
    channel_liable: boolean | null;
    price: string;
    price_set: ShopifyPlugin.ShopifyApi.Models.AmountSet;
    rate: number;
    title: string;
  };
  export type Transaction = {
    id: number;
    order_id: number;
    kind: string;
    gateway: string;
    status: string;
    message: string | null;
    created_at: string;
    test: boolean;
    authorization: string;
    location_id: ShopifyPlugin.ShopifyApi.Models.LocationId;
    user_id: number | null;
    parent_id: number | null;
    processed_at: string;
    device_id: number | null;
    error_code: string | null;
    source_name: string;
    payment_details: ShopifyPlugin.ShopifyApi.Models.PaymentDetails;
    receipt: ShopifyPlugin.ShopifyApi.Models.Receipt;
    currency_exchange_adjustment: ShopifyPlugin.ShopifyApi.Models.CurrencyExchangeAdjustment | null;
    amount: string;
    currency: string;
    authorization_expires_at: string | null;
    extended_authorization_attributes: ShopifyPlugin.ShopifyApi.Models.ExtendedAuthorizationAttributes;
    admin_graphql_api_id: string;
  };
}
