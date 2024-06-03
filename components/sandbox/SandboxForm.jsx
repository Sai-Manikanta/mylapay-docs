import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
// import JSONInput from "react-json-editor-ajrm/index";
// import locale from "react-json-editor-ajrm/locale/en";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { IoMdInformationCircle, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";
// import { IoMdEye } from "react-icons/io";
import { Popover } from '@headlessui/react'
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import axios from 'axios';
import { useLoginStatus } from '../../hooks/useLoginStatus'
import _ from 'lodash';
import 'prismjs/components/prism-json';
import { data3DSS, } from '../../data/sandbox/3DSS'
import { data3DSSResponse } from '../../data/sandbox/3DSS-response'
import { authenticationPaymentsRequestParams } from '../../data/sandbox/authentication-payments-request-params'
import { authReversalRequestParams } from '../../data/sandbox/auth-reversal'
import { authCaptureRequestParams } from '../../data/sandbox/auth-capture'
import { authRefundRequestParams } from '../../data/sandbox/auth-refund'
import { dataVoid } from '../../data/sandbox/void'
import 'prismjs/themes/prism.css'; // You can choose a different theme
// import './JsonEditor.css'; // Custom styles for line numbers
import 'react-toastify/dist/ReactToastify.css';

// const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });

const validationSchema = Yup.object().shape({
    OrganizationID: Yup.string().required('Organization ID is required').length(20, 'Organization ID must be exactly 20 characters'),
    // browserIP: Yup.boolean().oneOf([true], 'browserIP is conditionally required').required('browserIP is conditionally required')
});

// const userDataLocal = localStorage?.getItem('user') ? JSON.parse(localStorage?.getItem('user')) : {};

const data = {
    authentication: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_secure',
        configuration: {
            OrganizationID: '3576812',
            SecretKey: ""
        },
        Header: {
            host: 'transactions.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '6237486819'
        }
    },
    ['3DSS-v2.2']: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_secure/3DSS-v2.2',
        configuration: {
            OrganizationID: '3576812',
            SecretKey: ""
        },
        Header: {
            host: 'transactions.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '6237486819'
        }
    },
    ['3DSS-v2.3']: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_secure/3DSS-v2.3',
        configuration: {
            OrganizationID: '3576812',
            SecretKey: ""
        },
        Header: {
            host: 'transactions.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '6237486819'
        }
    },
    Payments: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_secure/payments',
        configuration: {
            OrganizationID: '3576812',
            SecretKey: ""
        },
        Header: {
            host: 'transactions.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '6237486819'
        }
    },
    Reversal: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_secure/reversal',
        configuration: {
            OrganizationID: '3576812',
            SecretKey: ""
        },
        Header: {
            host: 'transactions.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '6237486819'
        }
    },
    Capture: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_secure/capture',
        configuration: {
            OrganizationID: '3576812',
            SecretKey: ""
        },
        Header: {
            host: 'transactions.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '6237486819'
        }
    },
    Refund: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_secure/refund',
        configuration: {
            OrganizationID: '3576812',
            SecretKey: ""
        },
        Header: {
            host: 'transactions.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '6237486819'
        }
    },
    Void: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_secure/void',
        configuration: {
            OrganizationID: '3576812',
            SecretKey: ""
        },
        Header: {
            host: 'transactions.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '6237486819'
        }
    },
    Status: {
        apiUrl: 'https://transactions.mylapay.com/v1/mylapay_secure/status',
        configuration: {
            OrganizationID: '3576812',
            SecretKey: ""
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
            SecretKey: ""
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
            SecretKey: ""
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
            SecretKey: ""
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
            SecretKey: ""
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
            SecretKey: ""
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
            SecretKey: ""
        },
        Header: {
            host: 'transactions.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '2963752899'
        }
    },
};

// Two compare two objects and its keys, values to find which key value changed

// const customizer = (objValue, srcValue) => {
//     if (_.isObject(objValue)) {
//         return _.mergeWith({}, objValue, srcValue, customizer);
//     }
//     return srcValue === '' ? objValue : srcValue;
// };

const customizer = (objValue, srcValue, key, object, source) => {
    if (_.isObject(objValue)) {
        return _.mergeWith({}, objValue, srcValue, customizer);
    }
    if (srcValue === '') {
        return objValue;
    }
    if (!(key in source)) {
        return undefined;
    }
    return srcValue;
};

const mergeAndPrune = (oldObj, newObj) => {
    const merged = _.mergeWith({}, oldObj, newObj, customizer);
    const prune = (obj, reference) => {
        _.forOwn(obj, (value, key) => {
            if (_.isObject(value)) {
                prune(value, reference[key]);
            } else if (!(key in reference)) {
                delete obj[key];
            }
        });
    };
    prune(merged, newObj);
    return merged;
};

const findDifferencesOfObjects = (original, edited) => {
    const changes = {};
    const checkChanges = (origObj, editObj, path = '') => {
        for (const key in origObj) {
            const newPath = path ? `${path}.${key}` : key;
            if (typeof origObj[key] === 'object' && origObj[key] !== null) {
                checkChanges(origObj[key], editObj[key], newPath);
            } else if (origObj[key] !== editObj[key]) {
                changes[newPath] = { original: origObj[key], edited: editObj[key] };
            }
        }
        for (const key in editObj) {
            if (!(key in origObj)) {
                const newPath = path ? `${path}.${key}` : key;
                changes[newPath] = { original: undefined, edited: editObj[key] };
            }
        }
    };
    checkChanges(original, edited);
    return changes;
};

const highlightWithPrism = (code) => Prism.highlight(code, Prism.languages.json, 'json');

const validateOrganizationID = async (value) => {
    let errorMessage;
    if (!value) {
        errorMessage = 'Organization ID is required';
    } else if (value.length !== 20) {
        errorMessage = 'Organization ID must be exactly 20 characters';
    }
    // else {
    //     try {
    //         const response = await axios.post('https://my-backend-1.onrender.com/api/v1/auth/verify-sandbox-access', {
    //             organizationId: value
    //         });

    //         console.log(response);

    //         if (response.status !== 200) {
    //             errorMessage = 'Organization ID verification failed';
    //         }
    //     } catch (error) {
    //         errorMessage = 'Organization ID verification failed';
    //     }
    // }

    return errorMessage;
};

const SandboxForm = () => {
    const router = useRouter();
    const { query } = router;
    const [intialFormData, setIntialFormData] = useState(null);
    const [organizationIDValidationStatus, setOrganizationIDValidationStatus] = useState("pending") // pending/success/failed
    const [error, setError] = useState(null);
    const [lineNumbers, setLineNumbers] = useState([]);
    // const [userData, setUserData] = useState({});
    const { user } = useLoginStatus();
    const [showSecret, setShowSecret] = useState(false);
    // const [notChangingParameterData, setNotChangingParameterData] = useState([]);
    const [parametersData, setParametersData] = useState([]);

    const [selectedSandboxTestCodes, setSelectedSandboxTestCodes] = useState(JSON.stringify({}, null, 2));
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        if (selectedSandboxTestCodes) {
            const lines = selectedSandboxTestCodes?.split('\n')?.map((_, i) => i + 1);
            setLineNumbers(lines);
        }
    }, [selectedSandboxTestCodes]);


    useEffect(() => {
        if (data[query?.api]) {
            setIntialFormData(data[query?.api])

            // CHANGES
            setOrganizationIDValidationStatus("pending");
            setResponseData(null);
            setSelectedSandboxTestCodes(JSON.stringify({}, null, 2))

            // console.log({
            //     query: query?.api
            // })

            // console.log(query?.api)

            // setParametersData(data3DSS)

            // 3DSS-v2.3

            // console.log(query?.api);

            if (query?.api === "3DSS-v2.2" || query?.api === "3DSS-v2.3") {
                setParametersData(data3DSS)
                // setParametersData(authenticationPaymentsRequestParams)
            } else if (query?.api === "Payments") {
                console.log("RUN")
                setParametersData(authenticationPaymentsRequestParams)
            } else if (query?.api === "Reversal") {
                setParametersData(authReversalRequestParams)
            } else if (query?.api === "Capture") {
                // authCaptureRequestParams
                setParametersData(authCaptureRequestParams)
            } else if (query?.api === "Refund") {
                setParametersData(authRefundRequestParams)
            } else if (query?.api === "Void") {
                setParametersData(dataVoid)
            } else {
                setParametersData([])
            }


            // setNotChangingParameterData(data3DSS)
        }
    }, [query?.api])


    useEffect(() => {
        const selectedDataKeyValues = JSON.parse(selectedSandboxTestCodes);

        const selectedData = parametersData.reduce(function (total, currentValue) {
            if (!currentValue?.fieldCategory) {
                currentValue?.fields?.forEach(item => {
                    if (item?.checked) {
                        const valueOfProperty = selectedDataKeyValues[item.name];
                        total[item?.name] = valueOfProperty ? valueOfProperty : item.value;
                    }
                });
            } else {
                const now = currentValue?.fieldCategoryName;
                total = {
                    ...total,
                    [currentValue?.fieldCategoryName]: currentValue?.fields?.reduce(function (totalObj, currentValueData) {
                        if (currentValueData?.checked) {
                            if (selectedDataKeyValues[now]) {
                                const valueOfProperty = selectedDataKeyValues[now][currentValueData?.name] ? selectedDataKeyValues[now][currentValueData?.name] : "";
                                totalObj[currentValueData?.name] = valueOfProperty ? valueOfProperty : currentValueData?.value;
                            } else {
                                totalObj[currentValueData?.name] = currentValueData.value
                            }
                        }
                        return totalObj
                    }, {})
                }
            }
            return total;
        }, {})

        setSelectedSandboxTestCodes(prevDataOri => {
            return JSON.stringify(selectedData, null, 2)
        });
    }, [parametersData, query?.api])


    const validateOrganisationId = async (value) => {
        // axios.post('https://my-backend-1.onrender.com/api/v1/auth/verify-sandbox-access')

        // if (value.length === 10) {
        //     setOrganizationIDValidationStatus("success");
        // } else if (value.length < 10) {
        //     setOrganizationIDValidationStatus("pending");
        // } else {
        //     setOrganizationIDValidationStatus("failed");
        // }

        if (value.length < 20) {
            setOrganizationIDValidationStatus("pending");
            return null;
        } else if (value.length > 20) {
            setOrganizationIDValidationStatus("failed");
            return null;
        }

        // Set status to pending when request is being sent
        setOrganizationIDValidationStatus("pending");

        try {
            const response = await axios.post('https://my-backend-1.onrender.com/api/v1/auth/verify-sandbox-access', {
                organizationId: value
            }, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}` // Add the authorization header with the token
                }
            });

            // setOrganizationIDValidationStatus("success");

            if (response.status === 200) {
                setOrganizationIDValidationStatus("success");
            } else {
                setOrganizationIDValidationStatus("failed");
            }
        } catch (error) {
            // console.error('Error validating organization ID:', error);
            setOrganizationIDValidationStatus("failed");
        }

        // You might also want to handle length check separately before making the request

    }

    useEffect(() => {
        if (user?.organizationId) {
            validateOrganisationId(user?.organizationId);
        }
    }, [user?.organizationId, data[query?.api]])

    const handleReset = () => {
        const selectedDataKeyValues = JSON.parse(selectedSandboxTestCodes);

        const selectedData = parametersData.reduce(function (total, currentValue) {
            if (!currentValue.fieldCategory) {
                currentValue.fields.forEach(item => {
                    if (item.checked) {
                        // const valueOfProperty = selectedDataKeyValues[item.name];
                        total[item.name] = item.value;
                    }
                });
            } else {
                const now = currentValue.fieldCategoryName;
                total = {
                    ...total,
                    [currentValue.fieldCategoryName]: currentValue.fields.reduce(function (totalObj, currentValueData) {
                        if (currentValueData.checked) {
                            if (selectedDataKeyValues[now]) {
                                // const valueOfProperty = selectedDataKeyValues[now][currentValueData?.name] ? selectedDataKeyValues[now][currentValueData?.name] : "";
                                totalObj[currentValueData.name] = currentValueData?.value;
                            } else {
                                totalObj[currentValueData.name] = currentValueData.value
                            }


                        }

                        return totalObj
                    }, {})
                }
            }
            return total;
        }, {})

        setSelectedSandboxTestCodes(prevDataOri => {
            return JSON.stringify(selectedData, null, 2)
        });

        // setParametersData(notChangingParameterData)
        // setParametersData([])
    }

    return (
        <div className="relative z-10 bg-white rounded border-gray/20 sm:m-0">
            {/* <p>{JSON.stringify(user)}</p> */}
            {intialFormData && (
                <Formik
                    key={intialFormData?.apiUrl}
                    initialValues={{
                        apiURLs: intialFormData?.apiUrl,
                        laptop: false,
                        browserIP: false,
                        OrganizationID: user?.organizationId,
                        SecretKey: user?.secretkey,
                        host: intialFormData?.Header?.host,
                        ContentType: intialFormData?.Header?.contentType,
                        vcMerchantId: user?.vcMerchantId, // intialFormData?.Header?.vcMerchantId
                    }}
                    validationSchema={validationSchema}
                    validateOnChange={true}
                    validateOnBlur={true}
                    onSubmit={(values, { setFieldError }) => {
                        // Handle form submission here
                        console.log({ ...values, selectedSandboxTestCodes });

                        let responseData = { response: `${query?.api} response` };

                        if(query?.api === "3DSS-v2.2" || query?.api === "3DSS-v2.3"){
                            responseData = data3DSSResponse
                        }
                        

                        // Set response data if request successfull
                        setResponseData({
                            statusCode: 200,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                            response: responseData,
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
                    {({ setFieldValue, handleChange, handleBlur, setFieldTouched, errors, touched }) => (
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
                                            validate={validateOrganizationID}
                                            // validate={(value) => {
                                            //     let errorMessage;
                                            //     if (!value) {
                                            //         errorMessage = 'Organization ID is required';
                                            //     } else if (value.length !== 10) {
                                            //         errorMessage = 'Organization ID must be exactly 10 characters';
                                            //     }
                                            //     return errorMessage;
                                            // }}
                                            // value={user?.organizationId}

                                            onFocus={(event) => {
                                                setFieldTouched('OrganizationID', true);
                                                handleChange(event);
                                            }}
                                            onChange={(event) => {
                                                handleChange(event);
                                                setFieldValue('OrganizationID', event.target.value, true);
                                                setFieldValue('vcMerchantId', event.target.value);

                                                // if (event?.target?.value?.length === 20) {
                                                validateOrganisationId(event.target.value)
                                                // }
                                            }}
                                            onBlur={(event) => {
                                                handleBlur(event);
                                            }}
                                        // onChange={(event) => {
                                        //     const { name, value } = event.target;

                                        //     console.log(value.length);


                                        //     // validateOrganisationId(value)

                                        //     handleChange(event)
                                        // }}
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


                                        {(errors.OrganizationID && touched.OrganizationID) && organizationIDValidationStatus !== "success" && (
                                            <div className="text-sm mt-2 text-[#F43F5E]">
                                                {errors.OrganizationID}
                                            </div>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <Field
                                            type="text"
                                            name="SecretKey"
                                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                            value={user?.secretkey}
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                            Secret Key
                                        </label>
                                        <ErrorMessage name="SecretKey" component="div" className="text-sm mt-2 text-red" />
                                    </div>
                                    <div className="relative">
                                        <Field
                                            type="text"
                                            name="vcMerchantId"
                                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12 disabled:bg-bggray"
                                            placeholder=""
                                            disabled
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                            VC Merchant Id
                                        </label>
                                        {/* <ErrorMessage name="vcMerchantId" component="div" className="text-sm mt-2 text-red" /> */}
                                    </div>
                                    <div className="relative">
                                        <Field
                                            type={showSecret ? "text" : "password"}
                                            name="sharedSecretKey"
                                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12 disabled:bg-bggray"
                                            value={"Shared Sectret key text"}
                                            disabled
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                            Shared Secret Key
                                        </label>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setShowSecret((prevShowSecret) => !prevShowSecret);
                                            }}
                                            className="absolute right-9 top-2 text-sm text-para"
                                        >
                                            {showSecret ? <IoMdEyeOff size="1.3rem" /> : <IoMdEye size="1.3rem" />}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                navigator.clipboard.writeText("Shared Sectret key text")
                                                    .then(() => {
                                                        // alert("Text copied to clipboard!");
                                                        toast("Secret key copied!");
                                                    }).catch(err => {
                                                        console.error("Failed to copy text: ", err);
                                                    });
                                            }}
                                            className="absolute right-2 top-2 text-sm text-para"
                                        >
                                            <FaCopy size="1rem" />
                                        </button>



                                        <ErrorMessage name="sharedSecretKey" component="div" className="text-sm mt-2 text-red" />
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


                                </div>
                            </div>

                            {/* <div>
                                {JSON.stringify(parametersData)}
                            </div> */}

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

                                                        {parameter?.fields?.map((field, index) => {
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
                                                                                            fields: updatedFields,
                                                                                        }
                                                                                    }

                                                                                    return item;
                                                                                })

                                                                                console.log(updatedData)

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

                                        {/* {organizationIDValidationStatus === 'success' && (
                                            <p className='text-sm mb-5'>
                                                To edit a value, hover your mouse cursor over the target value and click on the displayed edit icon button
                                            </p>
                                        )} */}

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


                                            {/* <JSONInput
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
                                            /> */}


                                            <div className="editor-container">
                                                <div className="line-numbers">
                                                    {lineNumbers.map((lineNumber) => (
                                                        <div key={lineNumber} style={{ color: '#022061' }}>{lineNumber}</div>
                                                    ))}
                                                </div>
                                                <Editor
                                                    value={selectedSandboxTestCodes}
                                                    onValueChange={(code) => {

                                                        // console.log(code);

                                                        setSelectedSandboxTestCodes(prevData => {
                                                            let parsedCode = JSON.parse(code);
                                                            const changes = findDifferencesOfObjects(JSON.parse(prevData), parsedCode);

                                                            const firstPropertyName = Object.keys(changes)[0];
                                                            console.log(firstPropertyName, ':', changes[firstPropertyName].edited)

                                                            // setParametersData(prevData => {
                                                            //     return { ...prevData, [firstPropertyName]: changes[firstPropertyName].edited }
                                                            // })


                                                            // setParametersData key value  


                                                            // return JSON.stringify(parsedCode, null, 2)
                                                            return code;
                                                        });
                                                        try {
                                                            setError(null); // Clear the error if JSON is valid
                                                        } catch (err) {
                                                            setError('Invalid JSON'); // Set error message if JSON is invalid
                                                        }
                                                    }}
                                                    highlight={highlightWithPrism}
                                                    padding={10}
                                                    className="code-editor"
                                                />
                                            </div>
                                            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}


                                        </div>

                                        <button
                                            className='py-1 px-4 rounded-sm text-sm bg-bluedark text-white absolute top-3 right-5'
                                            type="button"
                                            onClick={() => {
                                                navigator.clipboard.writeText(selectedSandboxTestCodes)
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

                            {/* <div>
                                <h1>selectedSandboxTestCodes</h1>
                                <p>{JSON?.stringify(JSON?.parse(selectedSandboxTestCodes))}</p>
                            </div> */}

                            {/* <div>
                                <h1>responseData</h1>
                                <p>{JSON.stringify(responseData)}</p>
                            </div> */}

                            <div className="mt-10 ltr:lg:text-right rtl:lg:text-left">
                                <button type="submit" disabled={organizationIDValidationStatus != 'success' || error} className="btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white mr-6 disabled:bg-bggray disabled:text-black">
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

            {/* <p>{JSON.stringify(responseData)}</p> */}

            {responseData && (
                <div className='px-4 py-8 lg:px-8'>
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

                    <div className="grid gap-10 md:grid-cols-2 mb-6 ">
                        <div className='bg-bggray p-4 rounded'>
                            <h2 className='mb-3'>Response</h2>

                            <div className='relative'>
                                {/* <DynamicReactJson
                                    src={responseData.response}
                                    theme="monokai"
                                    enableClipboard={false}
                                    displayObjectSize={false}
                                    displayDataTypes={false}
                                    displayArrayKey={false}
                                    name={false}
                                /> */}

                                <div className="editor-container bg-white">
                                    {/* <p>{JSON.stringify(responseData.response)}</p> */}
                                    {/* <div className="line-numbers">
                                        {lineNumbers.map((lineNumber) => (
                                            <div key={lineNumber} style={{ color: '#022061' }}>{lineNumber}</div>
                                        ))}
                                    </div>  */}
                                    <Editor
                                        value={JSON.stringify(responseData.response, null, 2)}
                                        onValueChange={(code) => {
                                            setSelectedSandboxTestCodes(prevData => {
                                                return code;
                                            });
                                            try {
                                                setError(null);
                                            } catch (err) {
                                                setError('Invalid JSON');
                                            }
                                        }}
                                        highlight={highlightWithPrism}
                                        padding={10}
                                        className="code-editor"
                                    />
                                </div>


                                <button
                                    className='py-1 px-4 rounded-sm text-sm bg-bluedark text-white absolute top-5 right-5'
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
