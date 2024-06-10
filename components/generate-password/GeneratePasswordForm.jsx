import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/router';
import GeneratePasswordSuccessModel from './GeneratePasswordSuccessModel'

const validationSchema = Yup.object().shape({
    Password: Yup.string().required('Password is required'),
    ConfirmPassword: Yup.string()
        .oneOf([Yup.ref('Password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

const GeneratePasswordForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const { token } = router.query;

    return (
        <>
            <GeneratePasswordSuccessModel isOpen={isOpen} setIsOpen={setIsOpen}  />
        <div className="relative z-10 bg-white rounded-xl border border-gray/20 m-4 sm:m-0">
            <Formik
                initialValues={{
                    Password: '',
                    ConfirmPassword: ''
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, setErrors }) => {
                    try {
                        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/user/generate-password/${token}`, {
                            password: values?.Password?.trim(),
                        }); 
                        setIsOpen(true);
                    } catch (error) {
                        if (error.response && error.response.data && error.response.data.error) {
                            setErrors({ serverError: error.response.data.error });
                        } else {
                            setErrors({ serverError: 'An error occurred. Please try again.' });
                        }
                    }
                    setSubmitting(false);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="rounded-3xl bg-white px-4 py-8 lg:px-8">
                        <div className="grid gap-10 md:grid-cols-1 mb-10">
                            <div className="relative">
                                <Field
                                    type="password"
                                    name="Password"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Password
                                </label>
                                <ErrorMessage name="Password" component="div" className="text-sm mt-2 text-red" />
                            </div>
                        </div>
    
                        <div className="grid gap-10 md:grid-cols-1 mb-10">
                            <div className="relative">
                                <Field
                                    type="password"
                                    name="ConfirmPassword"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Confirm Password
                                </label>
                                <ErrorMessage name="ConfirmPassword" component="div" className="text-sm mt-2 text-red" />
                            </div>
                        </div>
    
                        {errors.serverError && (
                            <div className="text-sm text-red mt-2">{errors.serverError}</div>
                        )}
    
                        <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                            <button type="submit" className="w-full btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white">
                                Set Password
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
        </>
    );
} 

export default GeneratePasswordForm;
