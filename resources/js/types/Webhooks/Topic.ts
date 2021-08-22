// Override for {Topic} from "@shopify/koa-shopify-webhooks"
// Enums really are a lot better than union types
// We have IDE completion and solid objects to deal with, not just strings

export enum Topic {
  appUninstalled = 'APP_UNINSTALLED',
  appSubscriptionsUpdate = 'APP_SUBSCRIPTIONS_UPDATE',
  appPurchasesOneTimeUpdate = 'APP_PURCHASES_ONE_TIME_UPDATE',
  cartsCreate = 'CARTS_CREATE',
  cartsUpdate = 'CARTS_UPDATE',
  checkoutsCreate = 'CHECKOUTS_CREATE',
  checkoutsDelete = 'CHECKOUTS_DELETE',
  checkoutsUpdate = 'CHECKOUTS_UPDATE',
  collectionListingsAdd = 'COLLECTION_LISTINGS_ADD',
  collectionListingsRemove = 'COLLECTION_LISTINGS_REMOVE',
  collectionListingsUpdate = 'COLLECTION_LISTINGS_UPDATE',
  collectionsCreate = 'COLLECTIONS_CREATE',
  collectionsDelete = 'COLLECTIONS_DELETE',
  collectionsUpdate = 'COLLECTIONS_UPDATE',
  customerGroupsCreate = 'CUSTOMER_GROUPS_CREATE',
  customerGroupsDelete = 'CUSTOMER_GROUPS_DELETE',
  customerGroupsUpdate = 'CUSTOMER_GROUPS_UPDATE',
  customersCreate = 'CUSTOMERS_CREATE',
  customersDelete = 'CUSTOMERS_DELETE',
  customersDisable = 'CUSTOMERS_DISABLE',
  customersEnable = 'CUSTOMERS_ENABLE',
  customersUpdate = 'CUSTOMERS_UPDATE',
  draftOrdersCreate = 'DRAFT_ORDERS_CREATE',
  draftOrdersDelete = 'DRAFT_ORDERS_DELETE',
  draftOrdersUpdate = 'DRAFT_ORDERS_UPDATE',
  fulfillmentEventsCreate = 'FULFILLMENT_EVENTS_CREATE',
  fulfillmentEventsDelete = 'FULFILLMENT_EVENTS_DELETE',
  fulfillmentsCreate = 'FULFILLMENTS_CREATE',
  fulfillmentsUpdate = 'FULFILLMENTS_UPDATE',
  orderTransactionsCreate = 'ORDER_TRANSACTIONS_CREATE',
  ordersCancelled = 'ORDERS_CANCELLED',
  ordersCreate = 'ORDERS_CREATE',
  ordersDelete = 'ORDERS_DELETE',
  ordersFulfilled = 'ORDERS_FULFILLED',
  ordersPaid = 'ORDERS_PAID',
  ordersPartiallyFulfilled = 'ORDERS_PARTIALLY_FULFILLED',
  ordersUpdated = 'ORDERS_UPDATED',
  productListingsAdd = 'PRODUCT_LISTINGS_ADD',
  productListingsRemove = 'PRODUCT_LISTINGS_REMOVE',
  productListingsUpdate = 'PRODUCT_LISTINGS_UPDATE',
  productsCreate = 'PRODUCTS_CREATE',
  productsDelete = 'PRODUCTS_DELETE',
  productsUpdate = 'PRODUCTS_UPDATE',
  refundsCreate = 'REFUNDS_CREATE',
  shopUpdate = 'SHOP_UPDATE',
  themesCreate = 'THEMES_CREATE',
  themesDelete = 'THEMES_DELETE',
  themesPublish = 'THEMES_PUBLISH',
  themesUpdate = 'THEMES_UPDATE',
  inventoryLevelsConnect = 'INVENTORY_LEVELS_CONNECT',
  inventoryLevelsUpdate = 'INVENTORY_LEVELS_UPDATE',
  inventoryLevelsDisconnect = 'INVENTORY_LEVELS_DISCONNECT',
  inventoryItemsCreate = 'INVENTORY_ITEMS_CREATE',
  inventoryItemsUpdate = 'INVENTORY_ITEMS_UPDATE',
  inventoryItemsDelete = 'INVENTORY_ITEMS_DELETE',
  locationsCreate = 'LOCATIONS_CREATE',
  locationsUpdate = 'LOCATIONS_UPDATE',
  locationsDelete = 'LOCATIONS_DELETE'
}