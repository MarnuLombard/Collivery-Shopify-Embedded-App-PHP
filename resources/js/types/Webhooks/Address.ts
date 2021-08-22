export default class Address {
  /** @type {String} */
  first_name
  /** @type {String} */
  last_name
  /** @type {String} */
  address1
  /** @type {String|undefined} */
  address2
  /** @type {String} */
  phone
  /** @type {String} */
  city
  /** @type {String|Number} */
  zip
  /** @type {String} */
  province
  /** @type {String} */
  country
  /** @type {String|undefined} */
  company
  /** @type {String|undefined} */
  latitude
  /** @type {String|undefined} */
  longitude
  /** @type {String} */
  name
  /** @type {String} */
  country_code
  /** @type {String} */
  province_code

  constructor(props) {
    for (const key of Object.keys(props)) {
      this[key] = props[key];
    }
  }
}
