import React from 'react';
// import {Button, Checkbox, Form, FormLayout, Layout, Page, RadioButton, Stack, TextField,} from '@shopify/polaris';
// import urlCat from 'urlcat';
// import {ColliveryContext} from '../components/ColliveryProvider';
// import {ConfigurableApiConfigProps} from "../lib/Collivery/Config/ColliveryApiConfigProps";
// import {RiSave3Line} from 'react-icons/ri'

class Settings extends React.Component {
  // static contextType = ColliveryContext;
  // state = {
  //   ...new ConfigurableApiConfigProps(),
  //   loading: false,
  //   successActive: false,
  //   errorActive: false,
  // };

  render() {
    // const {
    //   userName,
    //   password,
    //   riskCover,
    //   excludeWeekends,
    //   rica,
    //   consigneeOnly,
    //   smsTracking,
    //   discount,
    //   freeShipping,
    //   freeShippingMinimum,
    //   loading,
    // } = this.state
    //
    // const {shopify} = this.context;
    //
    // if (typeof window !== 'undefined') {
    //   shopify.getState().then((state) => {
    //     console.info('App State: %o', state);
    //   });
    // }
    //
    // const handleSubmit = () => {
    //   console.log('submission', this.state);
    //   const {host, routes, triggerSuccess, browserFetch, polarisApp} = this.context;
    //   const shop = polarisApp.localOrigin;
    //   const url = urlCat(host, `${routes.SettingsStore}?shop=:shop`, {shop});
    //   this.setState({loading: true});
    //   browserFetch(url, {
    //     method: 'POST',
    //     headers: {accept: 'application/json', 'content-type': 'application/json'},
    //     credentials: 'include',
    //     body: JSON.stringify(this.state),
    //   })
    //   .then(response => response ? triggerSuccess(response.message) : null)
    //   .finally(() => {
    //     this.setState({loading: false});
    //   })
    // };
    //
    // const handleChange = field => {
    //   return value => this.setState({[field] : value});
    // };
    //
    // const handleToggle = field => {
    //   return () => this.setState({[field] : !this.state[field]});
    // };
    //
    return (<div></div>
    //   <Page title="MDS Collivery.net - Settings">
    //     <Layout>
    //       <Form onSubmit={handleSubmit}>
    //         <Layout.Section>
    //         <TextField
    //           value={userName}
    //           onChange={handleChange('userName')}
    //           label="MDS Collivery user name"
    //           helpText="The email address you use to log into Collivery.net"
    //           type="email"
    //         ></TextField>
    //         <TextField
    //           value={password}
    //           onChange={handleChange('password')}
    //           label="MDS Collivery password"
    //           type="password"
    //           helpText="The password you use to log into Collivery.net"
    //           autoComplete={false}
    //         ></TextField>
    //         </Layout.Section>
    //
    //         <Layout.Section>
    //         <Stack vertical>
    //           <RadioButton
    //             label="Risk cover enabled"
    //             helpText={(<span>All waybills will include a risk cover for R10,000. Subject to our <a target="_blank" href="https://collivery.net/terms">terms and conditions</a>. Surcharges will be applied.</span>)}
    //             checked={riskCover}
    //             id="risk_cover_on"
    //             name="risk_cover"
    //             onChange={handleToggle('riskCover')}
    //             value={true}
    //           />
    //           <RadioButton
    //             label="Risk cover disabled"
    //             helpText={(<span>Only the default risk cover of up to R1,000 only. Subject to our <a target="_blank" href="https://collivery.net/terms">terms and conditions</a>.</span>)}
    //             id="risk_cover_off"
    //             name="risk_cover"
    //             checked={!riskCover}
    //             onChange={handleToggle('riskCover')}
    //             value={false}
    //           />
    //         </Stack>
    //         </Layout.Section>
    //
    //         <Layout.Section>
    //         <Stack vertical>
    //           <RadioButton
    //             label="All shipping must be paid for"
    //             helpText="The cost of waybills will be included into your clients' cart."
    //             id="free_shipping_off"
    //             name="free_shipping"
    //             checked={!freeShipping}
    //             onChange={handleToggle('freeShipping')}
    //             value={false}
    //           />
    //           <RadioButton
    //             label="All shipping is free after a minimum cart value"
    //             helpText="You choose to cover the cost of the waybill if the cart total is over a certain amount."
    //             checked={freeShipping}
    //             id="free_shipping_on"
    //             name="free_shipping"
    //             onChange={handleToggle('freeShipping')}
    //             value={true}
    //           />
    //           {(freeShipping && <TextField
    //             disabled={!freeShipping}
    //             value={freeShippingMinimum}
    //             onChange={handleChange('freeShippingMinimum')}
    //             helpText="The minimum value of the cart before free shipping is applied"
    //             label="Free shipping minimum cart value"
    //             type="currency"
    //           ></TextField>)}
    //         </Stack>
    //         </Layout.Section>
    //
    //         <Layout.Section>
    //           <Stack>
    //             <TextField
    //               value={discount}
    //               onChange={handleChange('discount')}
    //               helpText="The discount percentage to be applied to the cost of each waybill."
    //               label="Discount percentage"
    //               type="number"
    //               suffix="%"
    //             ></TextField>
    //           </Stack>
    //         </Layout.Section>
    //
    //         <FormLayout.Group condensed>
    //           <Checkbox
    //             label="Exclude weekends"
    //             helpText="Do not book waybills to be collected or delivered over weekends. This avoids extra surcharges."
    //             checked={excludeWeekends}
    //             onChange={handleToggle('excludeWeekends')}
    //             value={true}
    //             id="exclude_weekends"
    //             name="exclude_weekends"
    //           />
    //           <Checkbox
    //             label="Rica"
    //             helpText="All deliveries require RICA information and documentation to be supplied. Surcharges will be applied."
    //             checked={rica}
    //             onChange={handleToggle('rica')}
    //             value={true}
    //             id="rica"
    //             name="rica"
    //           />
    //           <Checkbox
    //             label="Consignee only"
    //             helpText="All deliveries can only be received by the person they are addressed to, with identity document required. Surcharges will be applied."
    //             checked={consigneeOnly}
    //             onChange={handleToggle('consigneeOnly')}
    //             value={true}
    //             id="consignee_only"
    //             name="consignee_only"
    //           />
    //           <Checkbox
    //             label="Sms tracking"
    //             helpText="All waybills will have SMS updates sent to you, the collection and delivery contacts. Surcharges will be applied."
    //             checked={smsTracking}
    //             onChange={handleToggle('smsTracking')}
    //             value={true}
    //             id="sms_tracking"
    //             name="sms_tracking"
    //           />
    //         </FormLayout.Group>
    //
    //         <Layout.Section>
    //           <Button
    //             onClick={handleSubmit}
    //             ariaControls="basic-collapsible"
    //             loading={loading}
    //             children="Save "
    //             icon={<span style={{paddingTop: '5px'}}><RiSave3Line></RiSave3Line></span>}
    //           />
    //         </Layout.Section>
    //       </Form>
    //     </Layout>
    //   </Page>
    );
  }
  componentDidMount() {
    // const {host, routes, polarisApp, browserFetch} = this.context;
    // const shop = polarisApp.localOrigin;
    // const url = urlCat(host, `${routes.SettingsIndex}?shop=:shop`, {shop});
    // browserFetch(url, {
    //   headers: {accept: 'application/json'},
    //   credentials: 'include',
    // })
    // .then(response => {
    //   this.setState({...response})
    // });
  }
}
export default Settings;
