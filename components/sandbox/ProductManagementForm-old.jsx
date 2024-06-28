import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductManagementForm = ({ userId, productManagementData, setProductManagementData }) => {
    const formik = useFormik({
        initialValues: {
            products: {
                ...productManagementData
                // merchantPlugins: {
                //     mylapay3DSSv23: false,
                // },
                // authorization: {
                //     payments: false,
                //     reversal: false,
                //     capture: false,
                //     refund: false,
                //     void: false,
                //     status: false,
                // },
                // networkTokens: {
                //     networkTokens: false,
                // },
                // risk: {
                //     riskCheck: false,
                //     reportFraud: false,
                // },
                // dispute: {
                //     disputeCheck: false,
                //     disputeAction: false,
                // },
                // valueAddedServices: {
                //     fxChecker: false,
                //     binChecker: false,
                //     mccChecker: false,
                //     costChecker: false,
                // },
                // webhooks: {
                //     disputes: false,
                //     riskyTransactions: false,
                // },
            },
            // keyManagementFile: null,
        },
        // validationSchema: Yup.object({
        //     keyManagementFile: Yup.mixed().required('A file is required'),
        // }),
        onSubmit: async (values) => {
            try {
                const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/product-management/${userId}`, values);

                setProductManagementData(response.data);
                toast.success("Your Product Management data has been successfully updated.");
            } catch (error) {
                toast.error("Something went wrong. Please try again.");
            }
        },
        enableReinitialize: true
    });

    return (
        <div>
            <h2 className="text-xl font-bold mb-6 text-bluedark">Explore our Products</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                {/* Merchant Plugins */}
                <fieldset>
                    <legend className="font-semibold text-bluedark">Merchant Plugins</legend>
                    <label className="flex items-center 6 text-[#475569] mt-1">
                        <input
                            type="checkbox"
                            name="products.merchantPlugins.mylapay3DSSv23"
                            checked={formik?.values?.products?.merchantPlugins?.mylapay3DSSv23}
                            onChange={formik?.handleChange}
                            style={{ width: '30px', height: '15px' }}
                        />
                        Mylapay 3DSS v2.3
                    </label>
                </fieldset>

                {/* Authorization */}
                <fieldset>
                    <legend className="font-semibold text-bluedark">Authorization</legend>
                    <div className="flex space-x-6 text-[#475569] mt-1">
                        {['payments', 'reversal', 'capture', 'refund', 'void', 'status'].map((field) => (
                            <label key={field} className="flex items-center">
                                <input
                                    type="checkbox"
                                    name={`products.authorization.${field}`}
                                    checked={formik?.values?.products?.authorization?.[field]}
                                    onChange={formik?.handleChange}
                                    style={{ width: '30px', height: '15px' }}
                                />
                                {field?.charAt(0)?.toUpperCase() + field?.slice(1)}
                            </label>
                        ))}
                    </div>
                </fieldset>

                {/* Network Tokens */}
                <fieldset>
                    <legend className="font-semibold text-bluedark">Network Tokens</legend>
                    <label className="flex items-center text-[#475569] mt-1">
                        <input
                            type="checkbox"
                            name="products.networkTokens.networkTokens"
                            checked={formik?.values?.products?.networkTokens?.networkTokens}
                            onChange={formik.handleChange}
                            style={{ width: '30px', height: '15px' }}
                        />
                        Network Tokens
                    </label>
                </fieldset>

                {/* Risk */}
                <fieldset>
                    <legend className="font-semibold text-bluedark">Risk</legend>
                    <div className="flex space-x-6 text-[#475569] mt-1">
                        {['riskCheck', 'reportFraud'].map((field) => (
                            <label key={field} className="block">
                                <input
                                    type="checkbox"
                                    name={`products.risk.${field}`}
                                    checked={formik?.values?.products?.risk?.[field]}
                                    onChange={formik.handleChange}
                                    style={{ width: '30px', height: '15px' }}
                                />
                                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                            </label>
                        ))}
                    </div>
                </fieldset>

                {/* Dispute */}
                <fieldset>
                    <legend className="font-semibold text-bluedark">Dispute</legend>
                    <div className="flex space-x-6 text-[#475569] mt-1">
                        {['disputeCheck', 'disputeAction'].map((field) => (
                            <label key={field} className="flex items-center">
                                <input
                                    type="checkbox"
                                    name={`products.dispute.${field}`}
                                    checked={formik?.values?.products?.dispute?.[field]}
                                    onChange={formik.handleChange}
                                    style={{ width: '30px', height: '15px' }}
                                />
                                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                            </label>
                        ))}
                    </div>
                </fieldset>

                {/* Value Added Services */}
                <fieldset>
                    <legend className="font-semibold text-bluedark">Value Added Services</legend>
                    <div className="flex space-x-6 text-[#475569] mt-1">
                        {['fxChecker', 'binChecker', 'mccChecker', 'costChecker'].map((field) => (
                            <label key={field} className="flex items-center">
                                <input
                                    type="checkbox"
                                    name={`products.valueAddedServices.${field}`}
                                    checked={formik?.values?.products?.valueAddedServices?.[field]}
                                    onChange={formik.handleChange}
                                    style={{ width: '30px', height: '15px' }}
                                />
                                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                            </label>
                        ))}
                    </div>
                </fieldset>

                {/* Webhooks */}
                <fieldset>
                    <legend className="font-semibold text-bluedark">Webhooks</legend>
                    <div className="flex space-x-6 text-[#475569] mt-1">
                        {['disputes', 'riskyTransactions'].map((field) => (
                            <label key={field} className="flex items-center">
                                <input
                                    type="checkbox"
                                    name={`products.webhooks.${field}`}
                                    checked={formik?.values?.products?.webhooks?.[field]}
                                    onChange={formik.handleChange}
                                    style={{ width: '30px', height: '15px' }}
                                />
                                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                            </label>
                        ))}
                    </div>
                </fieldset>

                {/* Key Management */}
                {/* <div className="mt-4">
                    <label className="block font-semibold text-bluedark">Key Management</label>
                    <input
                        type="file"
                        name="keyManagementFile"
                        onChange={(event) => formik.setFieldValue('keyManagementFile', event?.target?.files[0])}
                        className="mt-1"
                    />
                    {formik.errors.keyManagementFile ? <div className="text-[#EF4444]">{formik.errors.keyManagementFile}</div> : null}
                </div> */}

                {/* Buttons */}
                <div className="mt-4 space-x-2">
                    <button type="submit" className="px-4 py-2 bg-bluedark text-white rounded">
                        Save Changes
                    </button>
                    <button type="button" className="px-4 py-2 bg-bluedark text-white rounded" onClick={formik.handleReset}>
                        Reset
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ProductManagementForm;
