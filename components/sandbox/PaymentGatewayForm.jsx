import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  ID: Yup.string().required('Required'),
  entityName: Yup.string().required('Required'),
  amount: Yup.number().required('Required').positive('Must be positive'),
  currency: Yup.string().required('Required'),
  orderID: Yup.string().required('Required'),
  invoiceID: Yup.string().required('Required'),
  terminalID: Yup.string().required('Required'),
  cardInternationallyAccepted: Yup.boolean().required('Required'),
  methodOfTransaction: Yup.string().required('Required'),
  amountRefunded: Yup.number().required('Required').positive('Must be positive'),
  refundStatus: Yup.string().required('Required'),
  captured: Yup.boolean().required('Required'),
  description: Yup.string().required('Required'),
  cardID: Yup.string().required('Required'),
  entity: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  last4DigitsOfCardNumber: Yup.number().required('Required').min(1000, 'Must be exactly 4 digits').max(9999, 'Must be exactly 4 digits'),
  cardNetwork: Yup.string().oneOf(['Visa', 'Mastercard', 'Rupay']).required('Required'),
  cardType: Yup.string().required('Required'),
  emi: Yup.string().required('Required'),
  subType: Yup.string().required('Required'),
  bank: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  contactNumber: Yup.number().required('Required'),
  fee: Yup.number().required('Required').positive('Must be positive'),
  errorReason: Yup.string().required('Required'),
  acquirerData: Yup.string().required('Required'),
  authCode: Yup.number().required('Required'),
  authenticationReferenceNumber: Yup.number().required('Required')
});

const StyledField = ({ name, type = "text", placeholder, label }) => (
  <div className="relative mb-4">
    <Field
      type={type}
      name={name}
      className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
      placeholder=" "
    />
    <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">{label}</label>
    <ErrorMessage name={name} component="div" className="text-sm mt-2 text-[#ef4444]" />
  </div>
);

const PaymentGatewayForm = () => {
  return (
    <div className="container mx-auto p-12 bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-12 text-bluedark">
        Payment Gateway
      </h2>
      <Formik
        initialValues={{
          ID: '',
          entityName: '',
          amount: '',
          currency: '',
          orderID: '',
          invoiceID: '',
          terminalID: '',
          cardInternationallyAccepted: false,
          methodOfTransaction: 'Card',
          amountRefunded: '',
          refundStatus: '',
          captured: false,
          description: '',
          cardID: '',
          entity: '',
          name: '',
          last4DigitsOfCardNumber: '',
          cardNetwork: 'Visa',
          cardType: '',
          emi: '',
          subType: '',
          bank: '',
          email: '',
          contactNumber: '',
          fee: '',
          errorReason: '',
          acquirerData: '',
          authCode: '',
          authenticationReferenceNumber: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <StyledField name="ID" label="ID" />
            <StyledField name="entityName" label="Entity Name" />
            <StyledField name="amount" type="number" label="Amount" />
            <StyledField name="currency" label="Currency" />
            <StyledField name="orderID" label="Order ID" />
            <StyledField name="invoiceID" label="Invoice ID" />
            <StyledField name="terminalID" label="Terminal ID" />

            <div className="relative mb-4">
              <label className="block text-gray-700">Card Internationally Accepted</label>
              <Field type="radio" name="cardInternationallyAccepted" value="true" className="mr-2" />
              Yes
              <Field type="radio" name="cardInternationallyAccepted" value="false" className="ml-4 mr-2" />
              No
              {errors.cardInternationallyAccepted && touched.cardInternationallyAccepted ? (
                <div className="text-[#ef4444]">{errors.cardInternationallyAccepted}</div>
              ) : null}
            </div>

            <StyledField name="methodOfTransaction" label="Method of Transaction" readOnly />
            <StyledField name="amountRefunded" type="number" label="Amount Refunded" />
            <StyledField name="refundStatus" label="Refund Status" />

            <div className="relative mb-4">
              <label className="block text-gray-700">Captured</label>
              <Field type="radio" name="captured" value="true" className="mr-2" />
              Yes
              <Field type="radio" name="captured" value="false" className="ml-4 mr-2" />
              No
              {errors.captured && touched.captured ? <div className="text-[#ef4444]">{errors.captured}</div> : null}
            </div>

            <StyledField name="description" label="Description" />
            <StyledField name="cardID" label="Card ID" />
            <StyledField name="entity" label="Entity" />
            <StyledField name="name" label="Name" />
            <StyledField name="last4DigitsOfCardNumber" type="number" label="Last 4 digits of Card Number" />

            <div className="relative mb-4">
              <label className="block text-gray-700">Card Network</label>
              <Field type="radio" name="cardNetwork" value="Visa" className="mr-2" />
              Visa
              <Field type="radio" name="cardNetwork" value="Mastercard" className="ml-4 mr-2" />
              Mastercard
              <Field type="radio" name="cardNetwork" value="Rupay" className="ml-4 mr-2" />
              Rupay
              {errors.cardNetwork && touched.cardNetwork ? <div className="text-[#ef4444]">{errors.cardNetwork}</div> : null}
            </div>

            <StyledField name="cardType" label="Card Type" />
            <StyledField name="emi" label="EMI" />
            <StyledField name="subType" label="Sub Type" />
            <StyledField name="bank" label="Bank" />
            <StyledField name="email" type="email" label="Email" />
            <StyledField name="contactNumber" type="number" label="Contact Number" />
            <StyledField name="fee" type="number" label="Fee" />
            <StyledField name="errorReason" label="Error Reason" />
            <StyledField name="acquirerData" label="Acquirer Data" />
            <StyledField name="authCode" type="number" label="Auth Code" />
            <StyledField name="authenticationReferenceNumber" type="number" label="Authentication Reference Number" />

            <div className="mt-2 col-span-3">
              <button type="submit" className="bg-bluedark text-white py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentGatewayForm;
