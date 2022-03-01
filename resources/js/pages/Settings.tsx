import React, {useContext, useEffect, useState} from 'react';
import './types/window';
import {Banner, Button, Checkbox, Form, FormLayout, Layout, Page, RadioButton, Stack, TextField} from '@shopify/polaris';
import {Toast} from '@shopify/app-bridge/actions';
import {ColliveryContext, MyContext} from '../components/ColliveryProvider';
import {SaveMinor} from '@shopify/polaris-icons';
import route from '../lib/Helpers/Route';

export type BooleanSettings = {
  riskCover: boolean;
  excludeWeekends: boolean;
  rica: boolean;
  consigneeOnly: boolean;
  smsTracking: boolean;
  freeShipping: boolean;
};
export type OtherSettings = {
  userName: string;
  password: string;
  discount: number;
  freeShippingMinimum: number;
};

export type SettingsType = BooleanSettings & OtherSettings;

const Settings = (): JSX.Element => {
  const {browserFetch, triggerError} = useContext<MyContext>(ColliveryContext);

  const [state, setState] = useState<SettingsType>({
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
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (value: string, id: keyof OtherSettings): void => {
    setState({...state, [id]: value} as unknown as SettingsType);
  };

  const handleToggle = (field: keyof BooleanSettings) => {
    return () => setState({...state, [field]: !state[field]} as unknown as SettingsType);
  };

  const validateDiscount = (discount: string | number | undefined): string | undefined => {
    return isNaN(Number(discount)) || Number(discount) < 0 || Number(discount) > 100 ? 'Must be a positive number between 0 and 100' : undefined;
  };

  const validateFreeShippingMinimum = (freeShippingMinimum: string | number | undefined): string | undefined => {
    if (!state.freeShipping) {
      return undefined;
    }

    return isNaN(Number(freeShippingMinimum)) || Number(freeShippingMinimum) <= 0 ? 'Must be a positive number greater than 0' : undefined;
  };

  const isValid = (): boolean => {
    return typeof validateDiscount(state.discount) === 'undefined' && typeof validateFreeShippingMinimum(state.freeShippingMinimum) === 'undefined';
  };

  const handleSubmit = () => {
    useEffect(() => {
      if (!isValid()) {
        window.scrollTo({top: 0});

        return;
      }

      setLoading(true);
      browserFetch(route('api.settings.store'), {
        method: 'POST',
        body: JSON.stringify(state),
      })
        .then((response: {data: SettingsType}) => setState({...state, ...response.data}))
        .then(() => {
          Toast.create(window.app, {message: 'Settings saved', duration: 5000}).dispatch(Toast.Action.SHOW);
        })
        .catch((e: Error | string) => {
          let message: string;
          if (typeof e === 'string') {
            message = e;
          } else if (e instanceof Error) {
            message = e.message;
          } else {
            message = 'Error saving settings.';
          }

          triggerError(message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  };

  const shippingMinimum = validateFreeShippingMinimum(state.freeShippingMinimum);
  const discountValidated = validateDiscount(state.discount);
  return (
    <Page title="MDS Collivery.net - Settings">
      <Layout>
        {isValid() || (
          <Layout.Section>
            <Banner title="Errors with your input" status="critical">
              <p>
                {typeof shippingMinimum === 'string' ? `Free shipping minimum: ${shippingMinimum}` : null}
                <br />
                {discountValidated ? `Discount percentage: ${discountValidated}` : null}
              </p>
            </Banner>
          </Layout.Section>
        )}
        <Form noValidate={false} onSubmit={handleSubmit}>
          <Layout.Section>
            <TextField value={state.userName || ''} type="email" label="MDS Collivery user name" autoComplete="email" onChange={handleChange} id="userName" helpText="The email address you use to log into Collivery.net"></TextField>
            <TextField value={state.password} onChange={handleChange} id="password" label="MDS Collivery password" type="password" helpText="The password you use to log into Collivery.net" autoComplete="off"></TextField>
          </Layout.Section>

          <Layout.Section>
            <Stack vertical>
              <Checkbox
                label={'Risk-cover enabled'}
                checked={state.riskCover}
                helpText={
                  state.riskCover ? (
                    <span>
                      All waybills will include a risk cover for R10,000. Subject to our{' '}
                      <a target="_blank" href="https://collivery.net/terms" rel="noreferrer">
                        terms and conditions
                      </a>
                      . Surcharges will be applied.
                    </span>
                  ) : (
                    <span>
                      Only the default risk cover of up to R1,000 only. Subject to our{' '}
                      <a target="_blank" href="https://collivery.net/terms" rel="noreferrer">
                        terms and conditions
                      </a>
                      .
                    </span>
                  )
                }
                onChange={handleToggle('riskCover')}
              />
            </Stack>
          </Layout.Section>

          <Layout.Section>
            <Stack vertical>
              <RadioButton label="All shipping must be paid for" helpText="The cost of waybills will be included into your clients' cart." id="free_shipping_off" name="free_shipping" checked={!state.freeShipping} onChange={handleToggle('freeShipping')} value="0" />
              <RadioButton label="All shipping is free after a minimum cart value" helpText="You choose to cover the cost of the waybill if the cart total is over a certain amount." checked={state.freeShipping} id="free_shipping_on" name="free_shipping" onChange={handleToggle('freeShipping')} value="1" />
              {state.freeShipping && <TextField disabled={!state.freeShipping} value={String(state.freeShippingMinimum)} onChange={handleChange} id="freeShippingMinimum" helpText="The minimum value of the cart before free shipping is applied" label="Free shipping minimum cart value" type="currency" autoComplete="off" error={validateFreeShippingMinimum(state.freeShippingMinimum)}></TextField>}
            </Stack>
          </Layout.Section>

          <Layout.Section>
            <Stack>
              <TextField value={state.discount.toString()} onChange={handleChange} id="discount" helpText="The discount percentage to be applied to the cost of each waybill." label="Discount percentage" type="number" suffix="%" autoComplete="off" error={validateDiscount(state.discount)}></TextField>
            </Stack>
          </Layout.Section>

          <FormLayout.Group condensed>
            <Checkbox label="Exclude weekends" helpText="Do not book waybills to be collected or delivered over weekends. This avoids extra surcharges." checked={state.excludeWeekends} onChange={handleToggle('excludeWeekends')} value="1" id="exclude_weekends" name="exclude_weekends" />
            <Checkbox label="Rica" helpText="All deliveries require RICA information and documentation to be supplied. Surcharges will be applied." checked={state.rica} onChange={handleToggle('rica')} value="1" id="rica" name="rica" />
            <Checkbox label="Consignee only" helpText="All deliveries can only be received by the person they are addressed to, with identity document required. Surcharges will be applied." checked={state.consigneeOnly} onChange={handleToggle('consigneeOnly')} value="1" id="consignee_only" name="consignee_only" />
            <Checkbox label="Sms tracking" helpText="All waybills will have SMS updates sent to you, the collection and delivery contacts. Surcharges will be applied." checked={state.smsTracking} onChange={handleToggle('smsTracking')} value="1" id="sms_tracking" name="sms_tracking" />
          </FormLayout.Group>

          <Layout.Section>
            <Button onClick={handleSubmit} ariaControls="basic-collapsible" loading={loading} icon={SaveMinor}>
              Save
            </Button>
          </Layout.Section>
        </Form>
      </Layout>
    </Page>
  );
};

export default Settings;
