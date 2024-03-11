import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Company Name is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    country: Yup.string().required('Country is required'),
    city: Yup.string().required('City is required'),
    pincode: Yup.number().required('Pincode is required'),
    email: Yup.string().email('Invalid email').required('Email ID is required'),
    mobileNumber: Yup.string().required('Mobile Number is required'),
    productOfInterest: Yup.string().required('Product of Interest is required'),
});

const LoginForm = () => (
    <div className="relative z-10 bg-white rounded-xl border border-gray/20">
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
                productOfInterest: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                // Handle form submission here
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form className="rounded-3xl bg-white px-4 py-8 dark:bg-[#101626] lg:px-8">
                    <div className="grid gap-10 md:grid-cols-1 mb-10">
                        <div className="relative">
                            <Field
                                type="text"
                                name="companyName"
                                className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                placeholder=" "
                            />
                            <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                Company Name
                            </label>
                            <ErrorMessage name="companyName" component="div" className="text-sm mt-2 text-red" />
                        </div>
                    </div>
                    <div className="grid gap-10 md:grid-cols-2 mb-10">
                        <div className="relative">
                            <Field
                                type="text"
                                name="firstName"
                                className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                placeholder=" "
                            />
                            <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
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
                    </div>



                    <div className="grid gap-10 md:grid-cols-2 mb-10">
                        <div className="relative">
                            <Field
                                type="text"
                                name="country"
                                className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                placeholder=" "
                            />
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
                    </div>


                    <div className="grid gap-10 md:grid-cols-2 mb-10">
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
                    </div>



                    <div className="grid gap-10 md:grid-cols-2 mb-10">
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

                    </div>












                    {/* Add similar Field components for other form fields */}
                    <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                        <button type="submit" className="w-full btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white">
                            Create Account
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);

export default LoginForm;
