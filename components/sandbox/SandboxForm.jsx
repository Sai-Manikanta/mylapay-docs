import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });

const validationSchema = Yup.object().shape({
    OrganizationID: Yup.string().required('Organization ID is required').length(10, 'Organization ID must be exactly 10 characters'),
    browserIP: Yup.boolean().oneOf([true], 'browserIP is conditionally required').required('browserIP is conditionally required')
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
    const [intialFormData, setIntialFormData] = useState(null);
    const [organizationIDValidationStatus, setOrganizationIDValidationStatus] = useState("pending") // pending/success/failed
    const [parametersData, setParametersData] = useState([
        {
            id: 1,
            fieldCategory: false,
            fields: [
                {
                    name: 'Partner Id',
                    type: 'text',
                    status: 'mandate',
                    checked: true,
                    value: '7359368922'
                },
                {
                    name: 'deviceChannel',
                    type: 'text',
                    status: 'mandate',
                    checked: true,
                    value: 'Device 2302'
                }
            ]
        },
        {
            id: 2,
            fieldCategory: true,
            fieldCategoryName: 'Browser Info',
            fields: [
                {
                    name: 'browserIP',
                    type: 'text',
                    status: 'conditionally required',
                    checked: false,
                    value: ''
                },
                {
                    name: 'browserJavaEnabled',
                    type: 'text',
                    status: 'mandate',
                    checked: true,
                    value: 'Yes'
                }
            ]
        },
        {
            id: 3,
            fieldCategory: true,
            fieldCategoryName: 'Billing Info',
            fields: [
                {
                    name: 'billAddrCity',
                    type: 'text',
                    status: 'conditionally',
                    checked: false,
                    value: ''
                },
                {
                    name: 'billAddrCountry',
                    type: 'text',
                    status: 'conditionally',
                    checked: false,
                    value: ''
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
                    id: 1,
                    fieldCategory: false,
                    fields: [
                        {
                            name: 'Partner Id',
                            type: 'text',
                            status: 'mandate',
                            checked: true,
                            value: '7359368922'
                        },
                        {
                            name: 'deviceChannel',
                            type: 'text',
                            status: 'mandate',
                            checked: true,
                            value: 'Device 2302'
                        }
                    ]
                },
                {
                    id: 2,
                    fieldCategory: true,
                    fieldCategoryName: 'Browser Info',
                    fields: [
                        {
                            name: 'browserIP',
                            type: 'text',
                            status: 'conditionally required',
                            checked: false,
                            value: ''
                        },
                        {
                            name: 'browserJavaEnabled',
                            type: 'text',
                            status: 'mandate',
                            checked: true,
                            value: 'Yes'
                        }
                    ]
                },
                {
                    id: 3,
                    fieldCategory: true,
                    fieldCategoryName: 'Billing Info',
                    fields: [
                        {
                            name: 'billAddrCity',
                            type: 'text',
                            status: 'conditionally',
                            checked: false,
                            value: ''
                        },
                        {
                            name: 'billAddrCountry',
                            type: 'text',
                            status: 'conditionally',
                            checked: false,
                            value: ''
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
                id: 1,
                fieldCategory: false,
                fields: [
                    {
                        name: 'Partner Id',
                        type: 'text',
                        status: 'mandate',
                        checked: true,
                        value: '7359368922'
                    },
                    {
                        name: 'deviceChannel',
                        type: 'text',
                        status: 'mandate',
                        checked: true,
                        value: 'Device 2302'
                    }
                ]
            },
            {
                id: 2,
                fieldCategory: true,
                fieldCategoryName: 'Browser Info',
                fields: [
                    {
                        name: 'browserIP',
                        type: 'text',
                        status: 'conditionally required',
                        checked: false,
                        value: ''
                    },
                    {
                        name: 'browserJavaEnabled',
                        type: 'text',
                        status: 'mandate',
                        checked: true,
                        value: 'Yes'
                    }
                ]
            },
            {
                id: 3,
                fieldCategory: true,
                fieldCategoryName: 'Billing Info',
                fields: [
                    {
                        name: 'billAddrCity',
                        type: 'text',
                        status: 'conditionally',
                        checked: false,
                        value: ''
                    },
                    {
                        name: 'billAddrCountry',
                        type: 'text',
                        status: 'conditionally',
                        checked: false,
                        value: ''
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
                        console.log({ ...values, ...selectedSandboxTestCodes });

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
                                            {parametersData.map((parameter, i) => {
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
                                                                    <label className="px-2 font-normal left-3 text-sm text-para text-nowrap">
                                                                        {field?.name} {field.status === 'conditionally required' ? '*' : ''}
                                                                    </label>

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

                                    <div className='bg-bggray p-4 rounded'>
                                        <h2 className='mb-4'>Sandbox Test Codes</h2>

                                        {organizationIDValidationStatus === 'success' && (
                                            <p className='text-sm mb-5'>
                                                To edit a value, hover your mouse cursor over the target value and click on the displayed edit icon button
                                            </p>
                                        )}

                                        {selectedSandboxTestCodes['Browser Info']?.browserIP === "" && (
                                            <p className='text-[#880808] text-sm mb-4'>Please Enter a value for Browser IP</p>
                                        )}

                                        <div>
                                            <DynamicReactJson
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
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 ltr:lg:text-right rtl:lg:text-left">
                                <button type="submit" disabled={organizationIDValidationStatus != 'success' || selectedSandboxTestCodes['Browser Info']?.browserIP === ""} className="btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white mr-6 disabled:bg-bggray disabled:text-black">
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

            {responseData && (
                <div className='px-4 py-8 lg:px-8'>
                    <div className='flex gap-x-4'>
                        <span className='text-bluedark mb-4 block'>Status Codes</span>
                        <span className='text-[#22C55E]'>
                            {responseData.statusCode}
                        </span>
                    </div>

                    <div className='mb-4'>
                        <span className='text-bluedark mb-1 block'>Description</span>
                        <span className='text-sm'>
                            {responseData.description}
                        </span>
                    </div>

                    <div className="grid gap-10 md:grid-cols-2 mb-6 ">
                        <div className='bg-bggray p-4 rounded'>
                            <h2 className='mb-3'>Response</h2>

                            <div>
                                <DynamicReactJson
                                    src={responseData.response}
                                    theme="monokai"
                                    enableClipboard={false}
                                    displayObjectSize={false}
                                    displayDataTypes={false}
                                    displayArrayKey={false}
                                    name={false}
                                />
                            </div>
                        </div>

                        <div className='bg-bggray p-4 rounded'>
                            <h2 className='mb-3'>Header</h2>

                            <div>
                                <DynamicReactJson
                                    src={responseData.header}
                                    theme="monokai"
                                    enableClipboard={false}
                                    displayObjectSize={false}
                                    displayDataTypes={false}
                                    displayArrayKey={false}
                                    name={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SandboxForm;
