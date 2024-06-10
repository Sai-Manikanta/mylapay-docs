import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import { useRouter } from 'next/router';
import mylapaylogo from '../public/mylapaylogo.png';

const validationSchema = Yup.object().shape({
    code: Yup.string()
        .matches(/^\d{6}$/, 'Code must be exactly 6 digits')
        .required('Code is required'),
});

const MFAVerification = () => {
    const router = useRouter();

    const handleVerifyOtp = (values) => {
        console.log(values);
        router.push('/login');
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <div className="text-center mb-6">
                    <Image
                        src={mylapaylogo}
                        alt="Logo"
                        className="mx-auto w-28 sm:w-36 mb-4"
                    />
                    <h2 className="text-xl font-semibold">Enter Code</h2>
                    <p className="text-gray-600">
                        Scan the QR code using a Multi-Factor Authentication (MFA) app, such
                        as Microsoft Authenticator or Google Authenticator.
                    </p>
                </div>

                <div className="flex justify-center mb-4">
                    <img src="/path-to-your-qr-code.png" alt="QR Code" className="h-30" />
                </div>

                <p className="text-red-500 text-center mb-4">
                    This action will overwrite existing security information for your
                    account
                </p>

                <Formik
                    initialValues={{ code: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleVerifyOtp}
                >
                    {({ errors, touched, handleChange, handleBlur }) => (
                        <Form>
                            <div className="flex justify-center space-x-2 mb-4">
                                <Field
                                    type="text"
                                    name="code"
                                    maxLength="6"
                                    className="w-full text-center border border-gray-300 rounded py-2 tracking-widest"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ fontSize: '2rem', letterSpacing: '0.5rem' }}
                                />
                            </div>
                            <ErrorMessage
                                name="code"
                                component="div"
                                className="text-red-500 text-center mb-4"
                            />

                            <div className="flex justify-center mb-6">
                                <button
                                    type="submit"
                                    className="bg-primary text-white px-4 py-2 rounded"
                                >
                                    Verify
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>

                <div>
                    <h6>Try Another Way</h6>
                    <div className="flex space-x-4 text-blue-500 mt-2">
                        <button className="underline">Send Email</button>
                        <button className="underline">Generate New QR</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MFAVerification;
