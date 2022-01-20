import React, {Component} from 'react';
import {Banner, Button, Checkbox, Form, FormLayout, Layout, Page, RadioButton, Stack, TextField,} from '@shopify/polaris';
import {Toast} from '@shopify/app-bridge/actions';
import {ColliveryContext} from '../components/ColliveryProvider';
import {SaveMinor} from '@shopify/polaris-icons'
import route from "../lib/Helpers/Route";

type State = {
  userName: string,
  password: string,
  riskCover: boolean,
  excludeWeekends: boolean,
  rica: boolean,
  consigneeOnly: boolean,
  smsTracking: boolean,
  discount: number,
  freeShipping: boolean,
  freeShippingMinimum: number,
  loading: boolean,
  successActive: boolean,
  errorActive: boolean,
};

class Settings extends Component<any, State> {
  static contextType = ColliveryContext;
  context!: React.ContextType<typeof ColliveryContext>

  state = {
    userName: '',
    password: '',
    riskCover: false,
    excludeWeekends: false,
    rica: false,
    consigneeOnly: false,
    smsTracking: false,
    discount: 0,
    freeShipping: false,
    freeShippingMinimum: 0,
    loading: false,
    successActive: false,
    errorActive: false,
  };

  constructor(props: Readonly<any>) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value: string, id: string): void {
    // @ts-ignore
    this.setState({[id]: value});
  };


  validateDiscount(discount: string | number | undefined): string | undefined {
    return Number(discount) === NaN
    || Number(discount) < 0
    || Number(discount) > 100
        ? 'Must be a positive number between 0 and 100'
        : undefined;
  }

  validateFreeShippingMinimum(freeShippingMinimum: string | number | undefined): string| undefined {
    if (!this.state.freeShipping) {
      return undefined;
    }

    return Number(freeShippingMinimum) === NaN
    || Number(freeShippingMinimum) <= 0
        ? 'Must be a positive number greater than 0'
        : undefined;
  }

  isValid(): boolean {
    return typeof this.validateDiscount(this.state.discount) === 'undefined'
      && typeof this.validateFreeShippingMinimum(this.state.freeShippingMinimum) === 'undefined'
  }

  render() {
    const {
      userName,
      password,
      riskCover,
      excludeWeekends,
      rica,
      consigneeOnly,
      smsTracking,
      discount,
      freeShipping,
      freeShippingMinimum,
      loading,
    } = this.state

    const handleSubmit = () => {
      if (!this.isValid()) {
        window.scrollTo({top: 0});

        return false;
      }

      const {triggerError, browserFetch} = this.context;
      const url = route('settings.store');
      this.setState({loading: true});
      browserFetch(url, {
        method: 'POST',
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(this.state),
      })
      // @ts-ignore
      .then(response => this.setState(response.data))
      .then(() => {
        Toast
            .create(window.app, {message: 'Settings saved', duration: 5000})
            .dispatch(Toast.Action.SHOW);
    })
      .catch(e => triggerError(e.message || 'Error saving settings.'))
      .finally(() => {
        this.setState({loading: false});
      })
    };

    const handleToggle = (field: keyof State) => {
      // @ts-ignore
      return () => this.setState({[field] : !this.state[field]});
    };

    return (
      <Page title="MDS Collivery.net - Settings">
        <Layout>
          {(this.isValid() || <Layout.Section>
            <Banner
              title="Errors with your input"
              status="critical"
            >
              <p>
                {(
                  this.validateFreeShippingMinimum(this.state.freeShippingMinimum)
                    ? `Free shipping minimum: ${this.validateFreeShippingMinimum(this.state.freeShippingMinimum)}`
                      : null
                )}
                <br/>
                {(
                  this.validateDiscount(this.state.discount)
                    ? `Discount percentage: ${this.validateDiscount(this.state.discount)}`
                      : null
                )}

              </p>
            </Banner>
          </Layout.Section>)}
          <Form noValidate={false} onSubmit={handleSubmit}>
            <Layout.Section>
            <TextField
              value={userName || ''}
              type="email"
              label="MDS Collivery user name"
              autoComplete="email"
              onChange={this.handleChange}
              id="userName"
              helpText="The email address you use to log into Collivery.net"
            ></TextField>
            <TextField
              value={password}
              onChange={this.handleChange}
              id="password"
              label="MDS Collivery password"
              type="password"
              helpText="The password you use to log into Collivery.net"
              autoComplete="off"
            ></TextField>
            </Layout.Section>

            <Layout.Section>
            <Stack vertical>
              <Checkbox
                label={"Risk-cover enabled"}
                checked={riskCover}
                helpText={(
                  riskCover ?
                    <span>All waybills will include a risk cover for R10,000. Subject to our <a target="_blank" href="https://collivery.net/terms">terms and conditions</a>. Surcharges will be applied.</span> :
                    <span>Only the default risk cover of up to R1,000 only. Subject to our <a target="_blank" href="https://collivery.net/terms">terms and conditions</a>.</span>
                )}
                onChange={handleToggle('riskCover')}
                />
            </Stack>
            </Layout.Section>

            <Layout.Section>
            <Stack vertical>
              <RadioButton
                label="All shipping must be paid for"
                helpText="The cost of waybills will be included into your clients' cart."
                id="free_shipping_off"
                name="free_shipping"
                checked={!freeShipping}
                onChange={handleToggle('freeShipping')}
                value="0"
              />
              <RadioButton
                label="All shipping is free after a minimum cart value"
                helpText="You choose to cover the cost of the waybill if the cart total is over a certain amount."
                checked={freeShipping}
                id="free_shipping_on"
                name="free_shipping"
                onChange={handleToggle('freeShipping')}
                value="1"
              />
              {(freeShipping && <TextField
                disabled={!freeShipping}
                value={String(freeShippingMinimum)}
                onChange={this.handleChange}
                id="freeShippingMinimum"
                helpText="The minimum value of the cart before free shipping is applied"
                label="Free shipping minimum cart value"
                type="currency"
                autoComplete="off"
                error={this.validateFreeShippingMinimum(freeShippingMinimum)}
              ></TextField>)}
            </Stack>
            </Layout.Section>

            <Layout.Section>
              <Stack>
                <TextField
                  value={discount.toString()}
                  onChange={this.handleChange}
                  id="discount"
                  helpText="The discount percentage to be applied to the cost of each waybill."
                  label="Discount percentage"
                  type="number"
                  suffix="%"
                  autoComplete="off"
                  error={this.validateDiscount(discount)}
                ></TextField>
              </Stack>
            </Layout.Section>

            <FormLayout.Group condensed>
              <Checkbox
                label="Exclude weekends"
                helpText="Do not book waybills to be collected or delivered over weekends. This avoids extra surcharges."
                checked={excludeWeekends}
                onChange={handleToggle('excludeWeekends')}
                value="1"
                id="exclude_weekends"
                name="exclude_weekends"
              />
              <Checkbox
                label="Rica"
                helpText="All deliveries require RICA information and documentation to be supplied. Surcharges will be applied."
                checked={rica}
                onChange={handleToggle('rica')}
                value="1"
                id="rica"
                name="rica"
              />
              <Checkbox
                label="Consignee only"
                helpText="All deliveries can only be received by the person they are addressed to, with identity document required. Surcharges will be applied."
                checked={consigneeOnly}
                onChange={handleToggle('consigneeOnly')}
                value="1"
                id="consignee_only"
                name="consignee_only"
              />
              <Checkbox
                label="Sms tracking"
                helpText="All waybills will have SMS updates sent to you, the collection and delivery contacts. Surcharges will be applied."
                checked={smsTracking}
                onChange={handleToggle('smsTracking')}
                value="1"
                id="sms_tracking"
                name="sms_tracking"
              />
            </FormLayout.Group>

            <Layout.Section>
              <Button
                onClick={handleSubmit}
                ariaControls="basic-collapsible"
                loading={loading}
                children="Save "
                icon={SaveMinor} />
            </Layout.Section>
          </Form>
        </Layout>
      </Page>
    );
  }
  componentDidMount() {
    const {browserFetch, triggerError} = this.context;
    const url = route('settings.index');
    browserFetch(url, {
      headers: {accept: 'application/json'},
      credentials: 'include',
    })
    .then(response => {

      if (typeof response === 'string' || typeof response === 'undefined') {
        triggerError('Could not fetch settings');

        return
      }

      // @ts-ignore
      const updatedState: null|State = response?.data;
      if (updatedState) {
        for (const [key, value] of Object.entries(updatedState)) {
          this.setState({[key] : value} as State);
        }
        console.log('Updated Server settings:');
        console.table(updatedState);
      } else {
        console.warn('Empty Server Settings!')
      }

    });
  }
}
export default Settings;
