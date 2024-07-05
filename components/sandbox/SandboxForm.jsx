import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { IoMdInformationCircle } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Popover } from '@headlessui/react'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from "prismjs/components/prism-core";
import { useLoginStatus } from '../../hooks/useLoginStatus'
import _ from 'lodash';
import { data3DSSResponse } from '../../data/sandbox/3DSS-response'
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism.css';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({});

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

const validateOrganizationID = async (value) => {
    let errorMessage;
    if (!value) {
        errorMessage = 'Organization ID is required';
    } else if (value.length !== 20) {
        errorMessage = 'Organization ID must be exactly 20 characters';
    }
    // else {
    //     try {
    //         const response = await axios.post('http://localhost:9000/v1/auth/verify-sandbox-access', {
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

const highlightJson = (code) => {
    const highlighted = highlight(code, languages.json)
        .split('\n')
        .map((line, i) => {
            const keyValueMatch = line.match(/(".*?")(\s*:\s*)(.*)/);
            if (keyValueMatch) {
                const key = keyValueMatch[1];
                const separator = keyValueMatch[2];
                const value = keyValueMatch[3];
                return (
                    `<span class="editorLineNumber">${i + 1}</span>` +
                    `<span class="json-key">${key}</span>` +
                    `<span class="json-separator">${separator}</span>` +
                    `<span class="json-value">${value}</span>`
                );
            }
            return `<span class="editorLineNumber">${i + 1}</span>` + line;
        })
        .join('\n');
    return highlighted;
};

const SandboxForm = ({ apiEndPoint, requestParams, apiResponseData, setSandboxPageData }) => {
    const router = useRouter();
    const { query } = router;
    const [organizationIDValidationStatus, setOrganizationIDValidationStatus] = useState("success") // pending/success/failed
    const [error, setError] = useState(null);
    const [lineNumbers, setLineNumbers] = useState([]);
    const editorRef = useRef(null);
    const { user } = useLoginStatus();


    useEffect(() => {
        if (editorRef.current) {
            const textarea = editorRef.current._input;
            textarea.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            if (editorRef.current) {
                const textarea = editorRef.current._input;
                textarea.removeEventListener('keydown', handleKeyDown);
            }
        };
    }, []);

    const handleKeyDown = (event) => {
        const { selectionStart, selectionEnd, value } = event.target;

        // Prevent editing of keys by intercepting key presses
        const lines = value.split('\n');
        const lineStart = value.lastIndexOf('\n', selectionStart - 1) + 1;
        const lineEnd = value.indexOf('\n', selectionStart);
        const line = value.substring(lineStart, lineEnd !== -1 ? lineEnd : value.length);

        const keyValueMatch = line.match(/(".*?")(\s*:\s*)(.*)/);
        if (keyValueMatch) {
            const keyStart = lineStart + keyValueMatch.index;
            const keyEnd = keyStart + keyValueMatch[1].length;
            if (selectionStart >= keyStart && selectionEnd <= keyEnd) {
                event.preventDefault();
            }
        }
    };

    // const [showSecret, setShowSecret] = useState(false);

    const [selectedSandboxTestCodes, setSelectedSandboxTestCodes] = useState(JSON.stringify({}, null, 2));
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        if (selectedSandboxTestCodes) {
            const lines = selectedSandboxTestCodes?.split('\n')?.map((_, i) => i + 1);
            setLineNumbers(lines);
        }
    }, [selectedSandboxTestCodes]);


    useEffect(() => {
        setResponseData(null);
        setSelectedSandboxTestCodes(JSON.stringify({}, null, 2));
    }, [query?.api])


    useEffect(() => {
        const selectedDataKeyValues = JSON.parse(selectedSandboxTestCodes);

        const selectedData = requestParams.reduce(function (total, currentValue) {
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
    }, [requestParams, query?.api])

    const handleReset = () => {
        const selectedDataKeyValues = JSON.parse(selectedSandboxTestCodes);

        const selectedData = requestParams.reduce(function (total, currentValue) {
            if (!currentValue.fieldCategory) {
                currentValue.fields.forEach(item => {
                    if (item.checked) {
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
    }

    return (
        <div className="relative z-10 bg-white rounded border-gray/20 sm:m-0">
            <Formik
                key={apiEndPoint}
                initialValues={{
                    apiURLs: apiEndPoint,
                    laptop: false,
                    browserIP: false,
                    OrganizationID: user?.organizationId,
                    SecretKey: user?.secretkey,
                    host: "sandbox.mylapay.com",
                    ContentType: "application/json",
                    uniqueId: user?.vcMerchantId,
                }}
                enableReinitialize={true}
                validationSchema={validationSchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values, { setFieldError }) => {
                    let responseData = { response: `${query?.api} response` };

                    if (query?.api === "3DSS-v2.2" || query?.api === "3DSS-v2.3") {
                        responseData = data3DSSResponse
                    }

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
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12 disabled:bg-bggray"
                                    placeholder=" "
                                    disabled
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    API URLs
                                </label>
                                <ErrorMessage name="apiURLs" component="div" className="text-sm mt-2 text-red" />
                            </div>
                        </div>

                        <div>
                            <h2 className='mb-6'>Header</h2>
                            <div className="grid gap-10 md:grid-cols-2 mb-10">
                                <div className="relative">
                                    <Field
                                        type="text"
                                        name="uniqueId"
                                        className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12 disabled:bg-bggray"
                                        placeholder=""
                                        disabled
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                        Unique Id
                                    </label>
                                </div>
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
                        <div>
                            <div className="grid gap-10 md:grid-cols-2 mb-10">
                                <div className='bg-bggray p-4 rounded'>
                                    <h2 className='mb-4'>Request Parameter</h2>
                                    <div>
                                        {requestParams?.map((parameter, paramIndex) => {

                                            return (
                                                <div key={paramIndex} className='mb-4'>
                                                    {parameter?.fieldCategoryName && (
                                                        <h3 className='text-bluedark'>
                                                            {parameter?.fieldCategoryName}
                                                        </h3>
                                                    )}

                                                    {parameter?.fields?.map((field, fieldIndex) => {
                                                        return (
                                                            <div key={fieldIndex} className='flex items-center'>
                                                                <Field
                                                                    type="checkbox"
                                                                    name={field?.name}
                                                                    className="rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                                                    checked={field?.checked}
                                                                    id={field?.name}
                                                                    disabled={organizationIDValidationStatus != 'success'}
                                                                    onChange={e => { 
                                                                        setSandboxPageData(prevData => {
                                                                            const updatedData = prevData?.requestParams?.map((item, itemIndex) => {
                                                                                if (paramIndex === itemIndex) {
                                                                                    const updatedFields = parameter?.fields?.map(fi => {
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

                                                                            return {
                                                                                ...prevData,
                                                                                requestParams: updatedData
                                                                            };
                                                                        });
                                                                    }}
                                                                />

                                                                <div className='flex items-center'>
                                                                    <label className="px-2 font-normal left-3 text-sm text-para text-nowrap">
                                                                        {field?.name} {field.status === 'conditionally required' ? '*' : ''}
                                                                    </label>


                                                                    <Popover className="relative">
                                                                        <Popover.Button className='disabled:text-para outline-none'>
                                                                            <IoMdInformationCircle />
                                                                        </Popover.Button>

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
                                    <div>
                                        <div className="editor-container">
                                            <Editor
                                                ref={editorRef}
                                                value={selectedSandboxTestCodes}
                                                onValueChange={(code) => {
                                                    setSelectedSandboxTestCodes(code);
                                                }}
                                                highlight={highlightJson}
                                                padding={10}
                                                textareaId="codeArea"
                                                className="editor"
                                                style={{
                                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                                    fontSize: 18,
                                                    outline: 0,
                                                }}
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


            {responseData && (
                <div className='px-4 py-8 lg:px-8'>
                    <div className='bg-bggray p-4 rounded mb-8'>
                        <h2 className='mb-3'>Status Codes</h2>
                        <div className='flex space-x-4 text-sm'>
                            {apiResponseData?.statusCodes?.map(item => (
                                <div className='flex rounded-sm overflow-hidden shadow'>
                                    <span className={`py-2 px-4 ${item?.type === "success" ? 'bg-[#22C55E]' : 'bg-[#EF4444]'} text-white`}>
                                        {item?.statusCode}
                                    </span>
                                    <p className='bg-white py-2 px-4'>
                                        {item?.message}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="grid gap-10 md:grid-cols-2 mb-6 ">
                        <div className='bg-bggray p-4 rounded'>
                            <h2 className='mb-3'>Response</h2>
                            <div className='relative'>
                                <div className="editor-container bg-white">
                                    <Editor
                                        ref={editorRef}
                                        value={JSON.stringify(apiResponseData?.responseParameters, null, 2)}
                                        onValueChange={(code) => { }}
                                        highlight={highlightJson}
                                        padding={10}
                                        textareaId="codeArea"
                                        className="editor"
                                        style={{
                                            fontFamily: '"Fira code", "Fira Mono", monospace',
                                            fontSize: 18,
                                            outline: 0,
                                        }}
                                    />
                                </div>
                                <button
                                    className='py-1 px-4 rounded-sm text-sm bg-bluedark text-white absolute top-2 right-5'
                                    type="button"
                                    onClick={() => {
                                        const jsonData = JSON.stringify(responseData.response);

                                        navigator.clipboard.writeText(jsonData)
                                            .then(() => {
                                                toast("Copied")
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
                                {apiResponseData.description}
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
