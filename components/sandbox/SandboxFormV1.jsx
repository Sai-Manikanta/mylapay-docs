// "use client";

import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
// import { countryList } from '../../data/countryList'

const validationSchema = Yup.object().shape({
    apiURLs: Yup.string().required('Company Name is required'),
    OrganizationID: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    country: Yup.string().required('Country is required'),
    city: Yup.string().required('City is required'),
    pincode: Yup.number().required('Pincode is required'),
    email: Yup.string().email('Invalid email').required('Email ID is required'),
    mobileNumber: Yup.string().required('Mobile Number is required'),
    productOfInterest: Yup.string().required('Product of Interest is required'),
});

const data = {
    authentication: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_secure',
        configuration: {
            OrganizationID: '3576812',
            SecretKey: '91989736'
        },
        Header: {
            host: 'transactions.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '6237486819'
        }
    },
    authorization: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_switch',
        configuration: {
            OrganizationID: '2571448',
            SecretKey: '8626561781'
        },
        Header: {
            host: 'transactions.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '2963752899'
        }
    },
};

const SandboxForm = () => {
    const router = useRouter();
    const { query } = router;
    const [intialFormData, setIntialFormData] = useState(null)

    // console.log(query)

    // const intialFormData = data[query.api];

    // console.log(intialFormData)


    useEffect(() => {
        if (data[query?.api]) {
            setIntialFormData(data[query?.api])
        }
    }, [data[query?.api]])


    return (
        <div className="relative z-10 bg-white rounded border-gray/20 sm:m-0">

            {/* <p>{JSON.stringify(intialFormData)}</p> */}

            {/* <p>{data[query?.api]}</p> */}

            {intialFormData && (
                <Formik
                    key={intialFormData?.apiUrl}
                    initialValues={{
                        // intialFormData?.apiUrl
                        apiURLs: intialFormData?.apiUrl,
                        // Configuration fields
                        // OrganizationID: intialFormData?.configuration?.OrganizationID,
                        OrganizationID: '',
                        SecretKey: intialFormData?.configuration?.SecretKey,
                        // Headers
                        host: intialFormData?.Header?.host,
                        ContentType: intialFormData?.Header?.contentType,
                        vcMerchantId: intialFormData?.Header?.vcMerchantId,
                    }}
                    // validationSchema={validationSchema}
                    onSubmit={(values) => {
                        // Handle form submission here
                        console.log(values);
                    }}
                >
                    {({ errors, touched, handleChange }) => (
                        <Form className="rounded-3xl bg-white px-4 py-8 lg:px-8">
                            <div className="grid gap-10 md:grid-cols-1 mb-6">
                                <div className="relative">
                                    <Field
                                        type="text"
                                        name="apiURLs"
                                        className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                        placeholder=" "
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                        API URLs
                                    </label>
                                    <ErrorMessage name="apiURLs" component="div" className="text-sm mt-2 text-red" />
                                </div>
                            </div>



                            <div>
                                <h2 className='mb-6'>Configuration</h2>
                                <div className="grid gap-10 md:grid-cols-2 mb-6">
                                    <div className="relative">
                                        <Field
                                            type="text"
                                            name="OrganizationID"
                                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                            placeholder=" "
                                            onChange={(event) => {
                                                // const { name, value } = event.target;
                                                // console.log(`Field "${name}" value changed to: ${value}`);

                                                // if()
                                                handleChange(event)
                                            }}
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                            Organization ID
                                        </label>
                                        <ErrorMessage name="OrganizationID" component="div" className="text-sm mt-2 text-red" />
                                    </div>
                                    <div className="relative">
                                        <Field
                                            type="text"
                                            name="SecretKey"
                                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                            placeholder=" "
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                            Secret Key
                                        </label>
                                        <ErrorMessage name="SecretKey" component="div" className="text-sm mt-2 text-red" />
                                    </div>
                                </div>
                            </div>



                            <div>
                                <h2 className='mb-6'>Header</h2>
                                <div className="grid gap-10 md:grid-cols-2 mb-10">
                                    <div className="relative">
                                        <Field
                                            type="textarea"
                                            name="host"
                                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                            placeholder=""

                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                            Host
                                        </label>
                                        <ErrorMessage name="host" component="div" className="text-sm mt-2 text-red" />
                                    </div>
                                    <div className="relative">
                                        <Field
                                            type="text"
                                            name="ContentType"
                                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                            placeholder=""
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                            Content Type
                                        </label>
                                        <ErrorMessage name="ContentType" component="div" className="text-sm mt-2 text-red" />
                                    </div>

                                    <div className="relative">
                                        <Field
                                            type="text"
                                            name="vcMerchantId"
                                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                            placeholder=""
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                            VC Merchant Id
                                        </label>
                                        <ErrorMessage name="vcMerchantId" component="div" className="text-sm mt-2 text-red" />
                                    </div>
                                </div>
                            </div>



                            {/* <div className="grid gap-10 md:grid-cols-2 mb-10">
                            <div className="relative">
                                <Field
                                    type="textarea"
                                    name="firstName"
                                    className="w-full h-20 rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "

                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Request Parameter
                                </label>
                                <ErrorMessage name="firstName" component="div" className="text-sm mt-2 text-red" />
                            </div>
                            <div className="relative">
                                <Field
                                    type="text"
                                    name="lastName"
                                    className="w-full h-20 rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Sandbox Test Codes
                                </label>
                                <ErrorMessage name="lastName" component="div" className="text-sm mt-2 text-red" />
                            </div>
                        </div> */}



                            {/* <div className="grid gap-10 md:grid-cols-2 mb-10">
    
                            <div className="relative">
                                <Field
                                    as="select"
                                    id="country"
                                    name="country"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                >
                                    <option value="">Choose country</option>
                                    {countryList.map(country => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
    
                                    
                                </Field>
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Country
                                </label>
                                <ErrorMessage name="country" component="div" className="text-sm mt-2 text-red" />
                            </div>
    
                            <div className="relative">
                                <Field
                                    type="text"
                                    name="city"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    City
                                </label>
                                <ErrorMessage name="city" component="div" className="text-sm mt-2 text-red" />
                            </div>
                        </div> */}


                            {/* <div className="grid gap-10 md:grid-cols-2 mb-10">
                            <div className="relative">
                                <Field
                                    type="text"
                                    name="pincode"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Pincode
                                </label>
                                <ErrorMessage name="pincode" component="div" className="text-sm mt-2 text-red" />
                            </div>
                            <div className="relative">
                                <Field
                                    type="text"
                                    name="email"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Email
                                </label>
                                <ErrorMessage name="email" component="div" className="text-sm mt-2 text-red" />
                            </div>
                        </div> */}



                            {/* <div className="grid gap-10 md:grid-cols-2 mb-10">
                            <div className="relative">
                                <Field
                                    type="text"
                                    name="mobileNumber"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Mobile Number
                                </label>
                                <ErrorMessage name="mobileNumber" component="div" className="text-sm mt-2 text-red" />
                            </div>
    
    
                            <div className="relative">
                                <Field
                                    as="select"
                                    id="productOfInterest"
                                    name="productOfInterest"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                >
                                    <option value="">Select Product of Interest</option>
                                    <option value="Authentication">Authentication</option>
                                    <option value="Authorization">Authorization</option>
                                    <option value="Intellengine">Intellengine</option>
                                </Field>
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Product of Interest
                                </label>
                                <ErrorMessage name="productOfInterest" component="div" className="text-sm mt-2 text-red" />
                            </div>
                        </div> */}


                            {/* Add similar Field components for other form fields */}
                            <div className="mt-10 ltr:lg:text-right rtl:lg:text-left">
                                <button type="submit" className="btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white mr-6">
                                    Send
                                </button>
                                <button type="submit" className="btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white">
                                    Reset
                                </button>
                            </div>

                            {/* <div className="mt-3 text-center font-normal">
                            <span className="mr-2">By signing up, you agree to our </span>
                            <a className="text-primary mt-5 hover:text-bluedark" href="#">
                                Terms of Use &amp; Privacy Policy.
                            </a>
                        </div> */}
                        </Form>
                    )}
                </Formik>
            )}

        </div>
    );
}



export default SandboxForm;
