import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link'

const validationSchema = Yup.object().shape({
    // organizationID: Yup.string().required('Organization ID is required'),
    // Username: Yup.string().required('Username is required'),
    Username: Yup.string().email('Invalid email format').required('Username is required'),
    Password: Yup.string().required('Password is required'),
    ['2FACode']: Yup.string().required('2FA Code is required'),
    // SecretKey: Yup.string().required('Secret Key is required'),
});

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (values, { setSubmitting, setErrors }) => {
        setLoading(true)
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`, {
                // secretKey: values?.SecretKey?.trim(),
                userName: values?.Username?.trim(),
                // organizationId: values?.organizationID?.trim(),
                password: values?.Password?.trim(),
                ['2FACode']: values?.['2FACode']?.trim(), 
            });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            router.push('/sandbox?api=Product-Management');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setErrors({ serverError: error.response.data.error });
            } else {
                setErrors({ serverError: 'An error occurred. Please try again.' });
            }
            window.alert("Login failed: Incorrect credentials. Please try again.")
        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    }

    return (
        <div className="relative z-10 bg-white rounded-xl border border-gray/20 m-4 sm:m-0">
            <Formik
                initialValues={{
                    // organizationID: '',
                    Username: '',
                    Password: '',
                    ['2FACode']: '', 
                    // SecretKey: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {({ isSubmitting }) => (
                    <Form className="rounded-3xl bg-white px-4 py-8 lg:px-8">
                        {/* <div className="grid gap-10 md:grid-cols-1 mb-10">
                            <div className="relative">
                                <Field
                                    type="text"
                                    name="organizationID"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Organization ID
                                </label>
                                <ErrorMessage name="organizationID" component="div" className="text-sm mt-2 text-red" />
                            </div>
                        </div> */}

                        <div className="grid gap-10 md:grid-cols-1 mb-10">
                            <div className="relative">
                                <Field
                                    type="text"
                                    name="Username"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Username
                                </label>
                                <ErrorMessage name="Username" component="div" className="text-sm mt-2 text-red" />
                            </div>
                        </div>

                        <div className="grid gap-10 md:grid-cols-1 mb-4">
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

                                <div className='mt-2 flex justify-end'>
                                    <Link href="/forgot-password" className='underline text-sm text-bluedark'>Forgot Password?</Link>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-10 md:grid-cols-1 mb-10">
                            <div className="relative">
                                <Field
                                    type="text"
                                    name="2FACode"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    2FA Code
                                </label>
                                <ErrorMessage name="2FACode" component="div" className="text-sm mt-2 text-red" />
                            </div>
                        </div>


                        {/* <div className="grid gap-10 md:grid-cols-1 mb-10">
                            <div className="relative">
                                <Field
                                    type="text"
                                    name="SecretKey"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Secret Key
                                </label>
                                <ErrorMessage name="SecretKey" component="div" className="text-sm mt-2 text-red" />
                            </div>
                        </div> */}

                        <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                            <button type="submit" className="w-full btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white disabled:opacity-50" disabled={isSubmitting || loading}>
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>


                    </Form>
                )}
            </Formik>

        </div>
    );
}

export default LoginForm;
