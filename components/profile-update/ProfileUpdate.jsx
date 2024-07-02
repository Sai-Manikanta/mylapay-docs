import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Listbox } from '@headlessui/react';
import axios from 'axios';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { countryList } from '../../data/countryList';
import RegisterSuccessModel from './RegisterSuccessModel';
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import DatePicker from 'react-datepicker';
import { ToastContainer, toast } from 'react-toastify';
import { useLoginStatus } from '../../hooks/useLoginStatus'
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

const products = ['3DSS - Merchant Plug-ins', 'Authorization', 'Network Tokens', 'Risk', 'Dispute', 'Value Added Services', 'Webhook'];
const typeOfEntityOptionsArray = ['Cooperatives', 'Limited Liability Partnership', 'Partnership', 'Private Ltd Company', 'DPublic Ltd Company', 'Sec 8 Company', 'Society', 'Trust'];

const validationSchema = Yup.object().shape({
    entityName: Yup.string().required('Entity Name is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    country: Yup.string().required('Country is required'),
    // city: Yup.string().required('City is required'),
    pincode: Yup.number().required('Pincode is required'),
    email: Yup.string().email('Invalid email').required('Email ID is required'),
    mobileNumber: Yup.string().required('Mobile Number is required'),
    // productOfInterest: Yup.array().of(Yup.string()).required('Product of Interest is required').min(1, 'Select at least one product'),
    dateOfIncorporation: Yup.date().required('Date of Incorporation is required').nullable(),
    typeOfEntity: Yup.string().required('Type of Entity is required'),
});

const ProfileUpdateForm = () => {
    const [loading, setLoading] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const [initialValues, setInitialValues] = useState({
        entityName: '',
        firstName: '',
        lastName: '',
        country: '',
        city: '',
        pincode: '',
        email: '',
        mobileNumber: '',
        productOfInterest: [],
        dateOfIncorporation: null,
        typeOfEntity: ''
    });
    const [isOpen, setIsOpen] = useState(false);

    const { token } = useLoginStatus();

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/user/get-my-data`, {}, {
                    headers: {
                        Authorization: token
                    }
                });

                const userData = response.data.user;

                setProfileData(userData);

                setInitialValues({
                    entityName: userData.entityName,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    country: userData.country,
                    pincode: userData.pincode,
                    email: userData.email,
                    mobileNumber: userData.mobileNumber,
                    dateOfIncorporation: userData.dateOfIncorporation,
                    typeOfEntity: userData.typeOfEntity
                });
            } catch (error) {
                // toast.error('Error while fetching profile data')
            }
        };

        fetchProfileData();
    }, [token]);

    const handleSignup = async (values, { setSubmitting, setErrors }) => {

        let data = {};

        if(profileData.firstName !== values.firstName){
            data.firstName = values.firstName
        }

        if(profileData.lastName !== values.lastName){
            data.lastName = values.lastName
        }

        if(profileData.mobileNumber !== values.mobileNumber){
            data.mobileNumber = values.mobileNumber
        }

        const keys = Object.keys(data);
        const keysLength = keys.length;

        if(!keysLength){
            return toast.info('No changes!')
        }
        
        console.log(data);

        setLoading(true);

        try {
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/update-profile`, { changes: data }, {
                headers: {
                    Authorization: token
                }
            });
            // setIsOpen(true);
            setIsOpen(true);
            // toast.success('Profile data updated successfully.')
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                // alert(err.response.data.error || err.response.data.message || 'An error occurred. Please try again.');
                toast.error(err.response.data.error || err.response.data.message || 'An error occurred. Please try again.')
            } else if (err.request) {
                toast.error('No response received from the server. Please check your network connection.');
            } else {
                toast.error('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    }


    return (
        <div className='pt-12 pb-8'>
            <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-3xl text-center mb-8 px-2">
                Your Profile Data
            </h2>
            <div className="relative z-10 bg-[#fff] rounded-xl border-gray/20 m-4 sm:m-0">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSignup}
                    enableReinitialize
                >
                    {({ errors, touched, values, setFieldValue, isSubmitting }) => (
                        <Form className="rounded-3xl bg-[#fff] px-4 py-8 lg:px-8">
                            <div className="grid gap-10 md:grid-cols-1 mb-10 max-w-md mx-auto">

                                <div className="relative">
                                    <Field
                                        type="text"
                                        name="entityName"
                                        className="w-full bg-white rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12 disabled:bg-bggray"
                                        placeholder=" "
                                        disabled
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                        Entity Name
                                    </label>
                                    <ErrorMessage name="entityName" component="div" className="text-sm mt-2 text-red" />
                                </div>

                                <div className="relative md:-mt-7">
                                    <label className="block font-normal text-sm text-para">Type of Entity</label>
                                    <Listbox
                                        as="div"
                                        value={values.typeOfEntity}
                                        onChange={selectedOption => setFieldValue('typeOfEntity', selectedOption)}
                                        disabled={true}
                                    >
                                        {({ open }) => (
                                            <>
                                                <div className="mt-2 relative">
                                                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-bggray rounded-lg border border-gray/30 cursor-default focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-gray-100 sm:text-sm">
                                                        <span className="block truncate">
                                                            {values.typeOfEntity ? values.typeOfEntity : 'Select a Type of Entity'}
                                                        </span>
                                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                            <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                                        </span>
                                                    </Listbox.Button>
                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        {typeOfEntityOptionsArray.map((product, index) => (
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
                                    <ErrorMessage name="typeOfEntity" component="div" className="text-sm mt-2 text-red" />
                                </div>

                                <div className="relative">
                                    <DatePicker
                                        selected={values.dateOfIncorporation}
                                        onChange={date => setFieldValue('dateOfIncorporation', date)}
                                        dateFormat="dd-MM-yyyy"
                                        className="w-full bg-white rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition  disabled:bg-bggray"
                                        placeholderText=" "
                                        disabled
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                        Date of Incorporation
                                    </label>
                                    <ErrorMessage name="dateOfIncorporation" component="div" className="text-sm mt-2 text-red" />
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
                                        type="text"
                                        name="email"
                                        className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12 disabled:bg-bggray"
                                        placeholder=" "
                                        disabled
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
                                    <Field
                                        as="select"
                                        id="country"
                                        name="country"
                                        className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12 disabled:bg-bggray"
                                        disabled
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
                                {/* <div className="relative">
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
                                </div> */}
                                <div className="relative">
                                    <Field
                                        type="text"
                                        name="pincode"
                                        className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12 disabled:bg-bggray"
                                        placeholder=" "
                                        disabled
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                        Pincode
                                    </label>
                                    <ErrorMessage name="pincode" component="div" className="text-sm mt-2 text-red" />
                                </div>



                                {/* <div className="relative md:-mt-7">
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
                                </div> */}







                            </div>
                            <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                                <button disabled={isSubmitting || loading} type="submit" className="btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white disabled:opacity-50">
                                    {loading ? 'Updating...' : 'Update'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <RegisterSuccessModel isOpen={isOpen} setIsOpen={setIsOpen} />
            <ToastContainer />
        </div>
    );
};

export default ProfileUpdateForm;
