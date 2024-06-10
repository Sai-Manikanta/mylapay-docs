import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Listbox } from '@headlessui/react';
import axios from 'axios';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { countryList } from '../../data/countryList';
import RegisterSuccessModel from './RegisterSuccessModel';
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

const products = ['3DSS - Merchant Plug-ins', 'Authorization', 'Network Tokens', 'Risk', 'Dispute', 'Value Added Services', 'Webhook'];

const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Company Name is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    country: Yup.string().required('Country is required'),
    city: Yup.string().required('City is required'),
    pincode: Yup.number().required('Pincode is required'),
    email: Yup.string().email('Invalid email').required('Email ID is required'),
    mobileNumber: Yup.string().required('Mobile Number is required'),
    productOfInterest: Yup.array().of(Yup.string()).required('Product of Interest is required').min(1, 'Select at least one product'),
});

const SignupForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSignup = async (values, { setSubmitting, setErrors }) => {
        setLoading(true)
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/signup`, values);
            setIsOpen(true);
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                alert(err.response.data.error || err.response.data.message || 'An error occurred. Please try again.');
            } else if (err.request) {
                alert('No response received from the server. Please check your network connection.');
            } else {
                alert('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    }
    

    return (
        <div>
            <RegisterSuccessModel isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="relative z-10 bg-[#fff] rounded-xl border-gray/20 m-4 sm:m-0">
                <div className="px-4">
                    <p className="text-center mb-4 text-lg text-para max-w-4xl mx-auto">
                        After completing registration, you will be able to test transactions.
                    </p>
                    <p className="text-center mb-4 text-lg text-para max-w-4xl mx-auto">
                        Your information will not be disclosed to third parties.
                    </p>
                </div>
                <Formik
                    initialValues={{
                        companyName: '',
                        firstName: '',
                        lastName: '',
                        country: '',
                        city: '',
                        pincode: '',
                        email: '',
                        mobileNumber: '',
                        productOfInterest: [],
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSignup}
                >
                    {({ errors, touched, values, setFieldValue, isSubmitting }) => (
                        <Form className="rounded-3xl bg-[#fff] px-4 py-8 lg:px-8">
                            <div className="grid gap-10 md:grid-cols-3 mb-10">
                                <div className="relative">
                                    <Field
                                        type="text"
                                        name="companyName"
                                        className="w-full bg-white rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                        placeholder=" "
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                        Company Name
                                    </label>
                                    <ErrorMessage name="companyName" component="div" className="text-sm mt-2 text-red" />
                                </div>
                                <div className="relative">
                                    <Field
                                        type="text"
                                        name="firstName"
                                        className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                        placeholder=" "
                                    />
                                    <label className="bg-white absolute -top-3 px-2 font-normal left-3 text-sm text-para">
                                        First Name
                                    </label>
                                    <ErrorMessage name="firstName" component="div" className="text-sm mt-2 text-red" />
                                </div>
                                <div className="relative">
                                    <Field
                                        type="text"
                                        name="lastName"
                                        className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                        placeholder=" "
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                        Last Name
                                    </label>
                                    <ErrorMessage name="lastName" component="div" className="text-sm mt-2 text-red" />
                                </div>
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

                                <div className="relative md:-mt-7">
                                    <label className="block font-normal text-sm text-para">Product of Interest</label>
                                    <Listbox
                                        as="div"
                                        value={values.productOfInterest}
                                        onChange={selectedOptions => setFieldValue('productOfInterest', selectedOptions)}
                                        multiple
                                    >
                                        {({ open }) => (
                                            <>
                                                <div className="mt-2 relative">
                                                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-gray-100 sm:text-sm">
                                                        <span className="block truncate">
                                                            {values.productOfInterest.length > 0 ? values.productOfInterest.join(', ') : 'Select products'}
                                                        </span>
                                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                            <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                                        </span>
                                                    </Listbox.Button>
                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        {products.map((product, index) => (
                                                            <Listbox.Option
                                                                key={index}
                                                                className={({ active }) =>
                                                                    `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? '' : ''}`
                                                                }
                                                                value={product}
                                                            >
                                                                {({ selected }) => (
                                                                    <>
                                                                        <span className={`block truncate text-bluedark ${selected ? 'font-medium' : 'font-normal'}`}>
                                                                            {product}
                                                                        </span>
                                                                        {selected ? (
                                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                <FaRegCheckSquare className="w-5 h-5 text-bluedark" aria-hidden="true" />
                                                                            </span>
                                                                        ) : (
                                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                <FaRegSquare className="w-5 h-5 text-bluedark" aria-hidden="true" />
                                                                            </span>
                                                                        )}
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </div>
                                            </>
                                        )}
                                    </Listbox>
                                    <ErrorMessage name="productOfInterest" component="div" className="text-sm mt-2 text-red" />
                                </div>

                            </div>
                            <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                                <button disabled={isSubmitting || loading} type="submit" className="btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white disabled:opacity-50">
                                    {loading ? ' Creating Account...' : 'Create Account'}
                                </button>
                            </div>
                            <div className="mt-3 text-center font-normal">
                                <span className="mr-2">By signing up, you agree to our </span>
                                <a className="text-primary mt-5 hover:text-bluedark" href="#">
                                    Terms of Use &amp; Privacy Policy.
                                </a>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SignupForm;
