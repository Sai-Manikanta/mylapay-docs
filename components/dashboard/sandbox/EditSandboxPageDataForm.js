import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from "prismjs/components/prism-core";

import 'prismjs/components/prism-json';
import 'prismjs/themes/prism.css';

const hightlightWithLineNumbers = (input, language) =>
    highlight(input, language)
        .split("\n")
        .map((line, i) => `<span class='editorLineNumber' style="color:#002060">${i + 1}</span>${line}`)
        .join("\n");

function SandboxCMSForm({ sandboxData }) {
    const [requestParamsData, setRequestParamsData] = useState(JSON.stringify(sandboxData?.requestParams, null, 2));
    const [responseParamsData, setResponseParamsData] = useState(JSON.stringify(sandboxData?.response?.responseParameters, null, 2));

    const initialValues = {
        name: sandboxData?.name,
        apiEndPoint: sandboxData?.apiEndPoint,
        overview: sandboxData?.overview,
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        apiEndPoint: Yup.string().required('API Endpoint is required').url('Must be a valid URL'),
        overview: Yup.array().of(Yup.string().required('Overview item is required'))
    });

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    };

    return (
        <div className="mt-8 relative">
            {/* <p>{JSON.stringify(sandboxData.response.responseParameters)}</p> */}
            <div>
                <Formik
                    initialValues={initialValues}
                    // enableReinitialize
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, isSubmitting }) => (
                        <Form className="space-y-4">
                            <div className='grid md:grid-cols-2 gap-4'>
                            <div className='col-span-2'>
                                <label className="block text-sm font-medium text-gray-700">Overview</label>
                                <FieldArray name="overview">
                                    {({ push, remove }) => (
                                        <div className="space-y-2">
                                            {values.overview.map((item, index) => (
                                                <div key={index} className="flex space-x-2">
                                                    <Field
                                                        name={`overview.${index}`}
                                                        type="textarea"
                                                        className="border p-2 flex-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                                        onClick={() => remove(index)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                onClick={() => push('')}
                                            >
                                                + Add Overview Item
                                            </button>
                                        </div>
                                    )}
                                </FieldArray>
                                <ErrorMessage name="overview" component="p" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <Field
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="border p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <label htmlFor="apiEndPoint" className="block text-sm font-medium text-gray-700">
                                    API Endpoint
                                </label>
                                <Field
                                    id="apiEndPoint"
                                    name="apiEndPoint"
                                    type="text"
                                    className="border p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage name="apiEndPoint" component="p" className="text-red-500 text-sm mt-1" />
                            </div>





                            {/* <div className="flex items-center mt-4"> */}
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-bluedark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 fixed top-5 right-10 z-50"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                            {/* </div> */}

                            </div>
                        </Form>
                    )}
                </Formik>

                <div className='grid grid-cols-2 gap-4 mt-6'>
                    <Editor
                        value={requestParamsData}
                        onValueChange={code => {
                            setRequestParamsData(code);
                        }}
                        highlight={code => hightlightWithLineNumbers(code, languages.json)}
                        padding={10}
                        textareaId="codeArea"
                        className="editor"
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 18,
                            outline: 0
                        }}
                    />

                    {/* responseParamsData, setResponseParamsData */}

                    {/* responseParamsData, setResponseParamsData */}
                    <Editor
                        value={responseParamsData}
                        onValueChange={code => {
                            setResponseParamsData(code);
                        }}
                        highlight={code => hightlightWithLineNumbers(code, languages.json)}
                        padding={10}
                        textareaId="codeArea"
                        className="editor"
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 18,
                            outline: 0
                        }}
                    />
                </div> 

            </div>

        </div>
    );
}

export default SandboxCMSForm;
