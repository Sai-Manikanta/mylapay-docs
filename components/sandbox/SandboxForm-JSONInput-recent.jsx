import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import JSONInput from "react-json-editor-ajrm/index";
import locale from "react-json-editor-ajrm/locale/en";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { IoMdInformationCircle } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Popover } from '@headlessui/react'
import 'react-toastify/dist/ReactToastify.css';

const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });

const validationSchema = Yup.object().shape({
    OrganizationID: Yup.string().required('Organization ID is required').length(10, 'Organization ID must be exactly 10 characters'),
    // browserIP: Yup.boolean().oneOf([true], 'browserIP is conditionally required').required('browserIP is conditionally required')
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
    refund: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_switch/capture',
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
    capture: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_switch/capture',
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
    reversal: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_switch/refund',
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
    void: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_switch/void',
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
    reversal: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_switch/reversal',
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
    const [intialFormData, setIntialFormData] = useState(null);
    const [organizationIDValidationStatus, setOrganizationIDValidationStatus] = useState("pending") // pending/success/failed
    const [parametersData, setParametersData] = useState([
        {
            id: 10,
            fieldCategory: true,
            fieldCategoryName: 'Seller Info',
            fields: [
                {
                    name: "sellerName",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable a- 100",
                    description: "Name of the Seller",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "sellerId",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable an-50",
                    description: "Required if Seller ID in Multi Transaction object is present. Merchant-assigned Seller identifier",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "sellerBusinessName",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable a- 100",
                    description: "Business name of the Seller",
                    status: "optional",
                    checked: false,
                    value: ""
                }
            ]
        },
        {
            id: 11,
            fieldCategory: true,
            fieldCategoryName: 'Pay Token Info',
            fields: [
                {
                    name: "token",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n -13 to 19",
                    description: "Payment token used to initiate the EMV 3DS transaction",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "tokenAdditionalData",
                    type: "text",
                    dataType: "Object",
                    lengthAndType: "Variable an-500",
                    description: "Additional information about the Payment Token from the Token Service Provider",
                    status: "optional",
                    checked: false,
                    value: ""
                }
            ]
        }
    ]);

    const [selectedSandboxTestCodes, setSelectedSandboxTestCodes] = useState({});
    const [responseData, setResponseData] = useState(null);


    useEffect(() => {
        if (data[query?.api]) {
            setIntialFormData(data[query?.api])

            // CHANGES
            setOrganizationIDValidationStatus("pending");
            setResponseData(null);
            setSelectedSandboxTestCodes({})
            setParametersData([
                {
                    id: 10,
                    fieldCategory: true,
                    fieldCategoryName: 'Seller Info',
                    fields: [
                        {
                            name: "sellerName",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable a- 100",
                            description: "Name of the Seller",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "sellerId",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable an-50",
                            description: "Required if Seller ID in Multi Transaction object is present. Merchant-assigned Seller identifier",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "sellerBusinessName",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable a- 100",
                            description: "Business name of the Seller",
                            status: "optional",
                            checked: false,
                            value: ""
                        }
                    ]
                },
                {
                    id: 11,
                    fieldCategory: true,
                    fieldCategoryName: 'Pay Token Info',
                    fields: [
                        {
                            name: "token",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n -13 to 19",
                            description: "Payment token used to initiate the EMV 3DS transaction",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "tokenAdditionalData",
                            type: "text",
                            dataType: "Object",
                            lengthAndType: "Variable an-500",
                            description: "Additional information about the Payment Token from the Token Service Provider",
                            status: "optional",
                            checked: false,
                            value: ""
                        }
                    ]
                }
            ])
        }
    }, [data[query?.api]])


    useEffect(() => {
        const selectedData = parametersData.reduce(function (total, currentValue) {
            if (!currentValue.fieldCategory) {
                currentValue.fields.forEach(item => {
                    if (item.checked) {
                        total[item.name] = item.value;
                    }
                });
            } else {

                total = {
                    ...total,
                    [currentValue.fieldCategoryName]: currentValue.fields.reduce(function (totalObj, currentValue) {
                        if (currentValue.checked) {
                            totalObj[currentValue.name] = currentValue.value
                        }

                        return totalObj
                    }, {})
                }
            }

            return total;

        }, {})


        setSelectedSandboxTestCodes(selectedData);
    }, [parametersData])


    const validateOrganisationId = (value) => {
        if (value.length === 10) {
            setOrganizationIDValidationStatus("success");
        } else if (value.length < 10) {
            setOrganizationIDValidationStatus("pending");
        } else {
            setOrganizationIDValidationStatus("failed");
        }
    }

    const handleReset = () => {
        setParametersData([
            {
                id: 10,
                fieldCategory: true,
                fieldCategoryName: 'Seller Info',
                fields: [
                    {
                        name: "sellerName",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable a- 100",
                        description: "Name of the Seller",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "sellerId",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable an-50",
                        description: "Required if Seller ID in Multi Transaction object is present. Merchant-assigned Seller identifier",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "sellerBusinessName",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable a- 100",
                        description: "Business name of the Seller",
                        status: "optional",
                        checked: false,
                        value: ""
                    }
                ]
            },
            {
                id: 11,
                fieldCategory: true,
                fieldCategoryName: 'Pay Token Info',
                fields: [
                    {
                        name: "token",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n -13 to 19",
                        description: "Payment token used to initiate the EMV 3DS transaction",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "tokenAdditionalData",
                        type: "text",
                        dataType: "Object",
                        lengthAndType: "Variable an-500",
                        description: "Additional information about the Payment Token from the Token Service Provider",
                        status: "optional",
                        checked: false,
                        value: ""
                    }
                ]
            }
        ])
    }

    return (
        <div className="relative z-10 bg-white rounded border-gray/20 sm:m-0">
            {intialFormData && (
                <Formik
                    key={intialFormData?.apiUrl}
                    initialValues={{
                        apiURLs: intialFormData?.apiUrl,
                        laptop: false,
                        browserIP: false,
                        OrganizationID: '',
                        SecretKey: intialFormData?.configuration?.SecretKey,
                        host: intialFormData?.Header?.host,
                        ContentType: intialFormData?.Header?.contentType,
                        vcMerchantId: intialFormData?.Header?.vcMerchantId,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setFieldError }) => {
                        // Handle form submission here
                        console.log({ ...values, selectedSandboxTestCodes });

                        // Set response data if request successfull
                        setResponseData({
                            statusCode: 200,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                            response: {
                                status: "success",
                                data: {
                                    id: 12345,
                                    name: "John Doe",
                                    email: "john.doe@example.com"
                                }
                            },
                            header: {
                                Status: "200 OK",
                                Date: "Fri, 25 Mar 2024 12:00:00 GMT",
                                Server: "Apache",
                                ['Content-Type']: "application/json",
                                ['Content-Length']: "56",
                                Connection: "close"
                            }
                        })

                    }}
                >
                    {({ setFieldValue, handleChange }) => (
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
                                            validateOnChange={true}
                                            validate={(value) => {
                                                let errorMessage;
                                                if (!value) {
                                                    errorMessage = 'Organization ID is required';
                                                } else if (value.length !== 10) {
                                                    errorMessage = 'Organization ID must be exactly 10 characters';
                                                }
                                                return errorMessage;
                                            }}
                                            onChange={(event) => {
                                                const { name, value } = event.target;

                                                validateOrganisationId(value)

                                                handleChange(event)
                                            }}
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                            Organization ID
                                        </label>

                                        {organizationIDValidationStatus === "success" && (
                                            <FaCircleCheck className='text-[#22C55E] text-xl absolute top-[9px] right-[10px]' />
                                        )}

                                        {organizationIDValidationStatus === "failed" && (
                                            <FaCircleXmark className='text-[#F43F5E] text-xl absolute top-[9px] right-[10px]' />
                                        )}
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

                            <div>
                                <div className="grid gap-10 md:grid-cols-2 mb-10">
                                    <div className='bg-bggray p-4 rounded'>
                                        <h2 className='mb-4'>Request Parameter</h2>
                                        <div>
                                            {parametersData?.map((parameter, i) => {

                                                return (
                                                    <div key={i} className='mb-4'>
                                                        {parameter?.fieldCategory && (
                                                            <h3 className='text-bluedark'>
                                                                {parameter?.fieldCategoryName}
                                                            </h3>
                                                        )}

                                                        {parameter?.fields.map((field, index) => {
                                                            return (
                                                                <div key={index} className='flex items-center'>
                                                                    <Field
                                                                        type="checkbox"
                                                                        name={field?.name}
                                                                        className="rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                                                        checked={field?.checked}
                                                                        id={field?.name}
                                                                        disabled={organizationIDValidationStatus != 'success'}
                                                                        onChange={e => {
                                                                            setParametersData(prevData => {
                                                                                const updatedData = prevData.map(item => {
                                                                                    if (item.id === parameter.id) {
                                                                                        const updatedFields = parameter.fields.map(fi => {
                                                                                            if (fi.name === field?.name) {

                                                                                                setFieldValue(field?.name, e.target.checked);

                                                                                                return {
                                                                                                    ...fi,
                                                                                                    checked: e.target.checked,
                                                                                                }
                                                                                            }

                                                                                            return fi;
                                                                                        })

                                                                                        return {
                                                                                            ...item,
                                                                                            fields: updatedFields
                                                                                        }
                                                                                    }

                                                                                    return item;
                                                                                })

                                                                                return updatedData;
                                                                            })
                                                                        }}
                                                                    />

                                                                    <div className='flex items-center'>
                                                                        <label className="px-2 font-normal left-3 text-sm text-para text-nowrap">
                                                                            {field?.name} {field.status === 'conditionally required' ? '*' : ''}
                                                                        </label>


                                                                        <Popover className="relative">
                                                                            {/* disabled={organizationIDValidationStatus != 'success'} */}
                                                                            <Popover.Button className='disabled:text-para outline-none'>
                                                                                <IoMdInformationCircle />
                                                                            </Popover.Button>

                                                                            {/* name: 'billAddrCountry',
                                                                                type: 'text',
                                                                                status: 'conditionally',
                                                                                dataType: 'String',
                                                                                lengthAndType: 'Fixed ans-6',
                                                                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', 
                                                                            */}

                                                                            <Popover.Panel className="absolute z-10 bg-white shadow rounded block sm:w-96 p-6">
                                                                                {({ close }) => (
                                                                                    <>
                                                                                        <button className='absolute top-4 right-4' onClick={() => close()}>
                                                                                            <IoCloseCircleSharp className='text-xl text-bluedark' />
                                                                                        </button>
                                                                                        <h2 className='mb-2 border-b border-gray pb-2'>
                                                                                            <span className='font-semibold mr-2'>Field Name:</span>
                                                                                            {field?.name}
                                                                                        </h2>
                                                                                        <h2 className='mb-2 border-b border-gray pb-2'>
                                                                                            <span className='font-semibold mr-2'>Data Type:</span>
                                                                                            <span className='bg-primary inline-block px-4 py-1 text-sm rounded'>
                                                                                                {field?.dataType}
                                                                                            </span>
                                                                                        </h2>
                                                                                        <h2 className='mb-2 border-b border-gray pb-2'>
                                                                                            <span className='font-semibold mr-2'>Type:</span>
                                                                                            <span className='capitalize'>{field?.status}</span>
                                                                                        </h2>
                                                                                        <h2 className='mb-2 border-b border-gray pb-2'>
                                                                                            <span className='font-semibold mr-2'>Length and Type:</span>
                                                                                            {field?.lengthAndType}
                                                                                        </h2>
                                                                                        <span className='font-semibold mb-2'>Definition</span>
                                                                                        <p style={{ whiteSpace: 'pre-line' }}>{field.description}</p>
                                                                                    </>
                                                                                )}
                                                                            </Popover.Panel>
                                                                        </Popover>

                                                                        {/* <button type='button' disabled={organizationIDValidationStatus != 'success'} className='disabled:text-para'>
                                                                            <IoMdInformationCircle />
                                                                        </button> */}
                                                                    </div>


                                                                    {field.status === 'conditionally required' && (
                                                                        <ErrorMessage name={field?.name} component="div" className="text-sm text-red" />
                                                                    )}
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className='bg-bggray p-4 rounded relative'>
                                        <h2 className='mb-4'>Sandbox Test Codes</h2>

                                        {organizationIDValidationStatus === 'success' && (
                                            <p className='text-sm mb-5'>
                                                To edit a value, hover your mouse cursor over the target value and click on the displayed edit icon button
                                            </p>
                                        )}

                                        {/* {selectedSandboxTestCodes['Browser Info']?.browserIP === "" && (
                                            <p className='text-[#880808] text-sm mb-4'>Please Enter a value for Browser IP</p>
                                        )} */}

                                        <div>
                                            {/* <DynamicReactJson
                                                src={selectedSandboxTestCodes}
                                                theme="monokai"
                                                enableClipboard={false}
                                                displayObjectSize={false}
                                                displayDataTypes={false}
                                                displayArrayKey={false}
                                                name={false}
                                                onEdit={organizationIDValidationStatus != 'success' ? false : (edit) => {
                                                    setParametersData(prevData => {
                                                        const newData = prevData.map(item => {
                                                            const newItem = { ...item };
                                                            const fieldIndex = newItem.fields.findIndex(field => field.name === edit.name);
                                                            if (fieldIndex !== -1) {
                                                                newItem.fields[fieldIndex] = {
                                                                    ...newItem.fields[fieldIndex],
                                                                    value: edit.new_value
                                                                };
                                                            }
                                                            return newItem;
                                                        });

                                                        return newData;
                                                    });
                                                }}
                                            /> */}


                                            <JSONInput
                                                placeholder={selectedSandboxTestCodes}
                                                onBlur={(newData) => {
                                                    if (!newData.error) {
                                                        setSelectedSandboxTestCodes(newData.jsObject);
                                                    }
                                                    // setSelectedSandboxTestCodes(newData.jsObject);
                                                    // console.log(newData.jsObject);
                                                    // setParametersData(newData.jsObject);
                                                    // setData(newData.jsObject)
                                                }}
                                                // confirmGood={false}
                                                onKeyPressUpdate={false}
                                                theme="light_mitsuketa_tribute"
                                                locale={locale}
                                                height="100%"
                                                width="100%"
                                            />


                                        </div>

                                        <button
                                            className='py-1 px-4 rounded-sm text-sm bg-bluedark text-white absolute top-3 right-5'
                                            type="button"
                                            onClick={() => {
                                                const jsonData = JSON.stringify(selectedSandboxTestCodes);

                                                navigator.clipboard.writeText(jsonData)
                                                    .then(() => {
                                                        toast("Copied");
                                                    })
                                                    .catch((error) => {
                                                        console.error('Failed to copy JSON data: ', error);
                                                    });
                                            }}
                                        >
                                            COPY
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h1>selectedSandboxTestCodes</h1>
                                <p>{JSON.stringify(selectedSandboxTestCodes)}</p>
                            </div>

                            {/* <div>
                                <h1>responseData</h1>
                                <p>{JSON.stringify(responseData)}</p>
                            </div> */}

                            <div className="mt-10 ltr:lg:text-right rtl:lg:text-left">
                                <button type="submit" disabled={organizationIDValidationStatus != 'success'} className="btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white mr-6 disabled:bg-bggray disabled:text-black">
                                    Send
                                </button>
                                <button onClick={handleReset} disabled={organizationIDValidationStatus != 'success'} type="button" className="btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white disabled:bg-bggray disabled:text-black">
                                    Reset
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            )}

            {/* responseData */}

            {responseData && (
                <div className='px-4 py-8 lg:px-8'>
                    {/* <div className='flex gap-x-4'>
                        <span className='text-bluedark mb-4 block'>Status Codes</span>
                        <span className='text-[#22C55E]'>
                            {responseData.statusCode}
                        </span>
                    </div> */}


                    {/* <div className='bg-bggray p-4 rounded mb-8'>
                                <h2 className='mb-3'>Status Codes</h2>
                                <div className='space-y-2'>
                                    <div className='bg-white p-2 border-l-4 border-[#22C55E] text-sm'>
                                        <p>200 - Success</p>
                                    </div>
                                    <div className='bg-white p-2 border-l-4 border-[#EF4444] text-sm'>
                                        <p>400 - Success</p>
                                    </div>
                                    <div className='bg-white p-2 border-l-4 border-[#EF4444] text-sm'>
                                        <p>500 - Success</p>
                                    </div>
                                    <div className='bg-white p-2 border-l-4 border-[#EF4444] text-sm'>
                                        <p>401 - Success</p>
                                    </div>
                                </div>
                            </div> */}


                    <div className='bg-bggray p-4 rounded mb-8'>
                        <h2 className='mb-3'>Status Codes</h2>
                        <div className='flex space-x-4 text-sm'>
                            <div className='flex rounded-sm overflow-hidden shadow'>
                                <span className="py-2 px-4 bg-[#22C55E] text-white">200</span><p className='bg-white py-2 px-4'>Success</p>
                            </div>

                            <div className='flex rounded-sm overflow-hidden shadow'>
                                <span className="py-2 px-4 bg-[#EF4444] text-white">400</span><p className='bg-white py-2 px-4'>Invalid</p>
                            </div>

                            <div className='flex rounded-sm overflow-hidden shadow'>
                                <span className="py-2 px-4 bg-[#EF4444] text-white">500</span><p className='bg-white py-2 px-4'>Unexpected System Error</p>
                            </div>

                            <div className='flex rounded-sm overflow-hidden shadow'>
                                <span className="py-2 px-4 bg-[#EF4444] text-white">401</span><p className='bg-white py-2 px-4'>Unauthorized request</p>
                            </div>
                        </div>
                    </div>


                    {/* <div className="mx-auto mt-8 p-4 bg-[#E2E8F0] border-l-4 border-primary">
                        <div>
                            <h2 className="text-xl font-bold text-bluedark sm:text-lg mb-2">
                                Used by
                            </h2>

                            <p className=" text-para mx-auto">
                                Payment Acquiring Banks, Merchants, and Payment Aggregators.
                            </p>
                        </div>
                    </div> */}

                    {/* <div className='mb-4'>
                        <span className='text-bluedark mb-1 block'>Description</span>
                        <span className='text-sm'>
                            {responseData.description}
                        </span>
                    </div> */}

                    <div className="grid gap-10 md:grid-cols-2 mb-6 ">
                        <div className='bg-bggray p-4 rounded'>
                            <h2 className='mb-3'>Response</h2>

                            <div className='relative'>
                                <DynamicReactJson
                                    src={responseData.response}
                                    theme="monokai"
                                    enableClipboard={false}
                                    displayObjectSize={false}
                                    displayDataTypes={false}
                                    displayArrayKey={false}
                                    name={false}
                                />

                                <button
                                    className='py-1 px-4 rounded-sm text-sm bg-white text-bluedark absolute top-5 right-5'
                                    type="button"
                                    onClick={() => {
                                        const jsonData = JSON.stringify(responseData.response);

                                        navigator.clipboard.writeText(jsonData)
                                            .then(() => {
                                                toast("Copied")
                                                // alert('COPIED')
                                                // console.log('JSON data copied to clipboard');
                                            })
                                            .catch((error) => {
                                                console.error('Failed to copy JSON data: ', error);
                                            });
                                    }}
                                >
                                    COPY
                                </button>
                            </div>


                        </div>

                        <div className='bg-bggray p-4 rounded'>
                            <h2 className='mb-3'>Description</h2>
                            <p className='text-sm bg-white p-4'>
                                {responseData.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default SandboxForm;
