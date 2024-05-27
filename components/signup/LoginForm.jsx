import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { countryList } from '../../data/countryList';
import RegisterSuccessModel from './RegisterSuccessModel';
import axios from 'axios';

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

const LoginForm = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                    onSubmit={(values) => {
                        return console.log(values);

                        axios.post("http://localhost:9000/api/v1/auth/signup", values)
                            .then(res => {
                                setIsOpen(true);
                            })
                            .catch(err => {
                                alert(err.message);
                            });
                    }}
                >
                    {({ errors, touched, values, setFieldValue }) => (
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
                                <div className="relative">
                                    <div className="mt-4">
                                        <label className="block font-normal text-sm text-para">Product of Interest</label>
                                        <div className='grid grid-cols-2 gap-y-1 mt-4' role="group" aria-labelledby="checkbox-group">
                                            <label className="block">
                                                <Field
                                                    type="checkbox"
                                                    name="productOfInterest"
                                                    value="Authentication"
                                                    checked={values.productOfInterest.includes('Authentication')}
                                                    onChange={() => {
                                                        if (values.productOfInterest.includes('Authentication')) {
                                                            setFieldValue('productOfInterest', values.productOfInterest.filter(value => value !== 'Authentication'));
                                                        } else {
                                                            setFieldValue('productOfInterest', [...values.productOfInterest, 'Authentication']);
                                                        }
                                                    }}
                                                />
                                                Authentication
                                            </label>
                                            <label className="block">
                                                <Field
                                                    type="checkbox"
                                                    name="productOfInterest"
                                                    value="Authorization"
                                                    checked={values.productOfInterest.includes('Authorization')}
                                                    onChange={() => {
                                                        if (values.productOfInterest.includes('Authorization')) {
                                                            setFieldValue('productOfInterest', values.productOfInterest.filter(value => value !== 'Authorization'));
                                                        } else {
                                                            setFieldValue('productOfInterest', [...values.productOfInterest, 'Authorization']);
                                                        }
                                                    }}
                                                />
                                                Authorization
                                            </label>
                                            <label className="block">
                                                <Field
                                                    type="checkbox"
                                                    name="productOfInterest"
                                                    value="Intellengine"
                                                    checked={values.productOfInterest.includes('Intellengine')}
                                                    onChange={() => {
                                                        if (values.productOfInterest.includes('Intellengine')) {
                                                            setFieldValue('productOfInterest', values.productOfInterest.filter(value => value !== 'Intellengine'));
                                                        } else {
                                                            setFieldValue('productOfInterest', [...values.productOfInterest, 'Intellengine']);
                                                        }
                                                    }}
                                                />
                                                Intellengine
                                            </label>
                                        </div>
                                        <ErrorMessage name="productOfInterest" component="div" className="text-sm mt-2 text-red" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                                <button type="submit" className="btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white">
                                    Create Account
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

export default LoginForm;
