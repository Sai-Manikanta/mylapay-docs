import React from 'react';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductManagementForm = ({ userToken, productManagementData, setProductManagementData }) => {
    const formik = useFormik({
        initialValues: {
            ...productManagementData.products
            // merchantPlugins: false,
            // authorization: false,
            // networkTokens: false,
            // risk: false,
            // dispute: false,
            // valueAddedServices: false,
            // webhooks: false,
        },
        // validationSchema: Yup.object({
        //     keyManagementFile: Yup.mixed().required('A file is required'),
        // }),
        onSubmit: async (values) => {
            // console.log({ userId, products: { ...values } });
            try {
                const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/product-management`, { products: values }, {
                    headers: {
                        Authorization: userToken
                    }
                });

                setProductManagementData(response.data);
                toast.success("Your Product Management data has been successfully updated.");
            } catch (error) {
                toast.error("Something went wrong. Please try again.");
            }
        },
        enableReinitialize: true
    });

    const handleReset = async () => {
        try {
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/product-management`, {
                products: {
                    merchantPlugins: false,
                    authorization: false,
                    networkTokens: false,
                    risk: false,
                    dispute: false,
                    valueAddedServices: false,
                    webhooks: false
                }
            }, {
                headers: {
                    Authorization: userToken
                }
            });

            setProductManagementData(response.data);
            toast.success("Your product management data has been reset successfully.");
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    }

    const productsData = [
        {
            labelText: 'Merchant Plugins',
            nameText: 'merchantPlugins',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem optio quis molestias deleniti, quisquam corporis eum hic maxime assumenda repellendus.'
        },
        {
            labelText: 'Authorization',
            nameText: 'authorization',
            description: 'Switch to smarter, speed, safer payments with Mylapay and elevate your payment experience with higher success rates.'
        },
        {
            labelText: 'Network Tokens',
            nameText: 'networkTokens',
            description: 'Mylapay’s Network Tokenization allows customer’s card details to be stored securely and be used for recurring transactions'
        },
        {
            labelText: 'Risk',
            nameText: 'risk',
            description: 'Mylapay’s IntelleWatch Fraud and Risk Management product enables you to keep a check on fraudulent transactions up to 99.999%'
        },
        {
            labelText: 'Dispute',
            nameText: 'dispute',
            description: 'Using our Dispute API, you can respond to disputes and chargebacks instantly.'
        },
        {
            labelText: 'Value Added Services',
            nameText: 'valueAddedServices',
            description: 'Our VAS includes FX, BIN, MCC and Cost Checkers that will help you to validate and verify customer information before accepting payments.'
        },
        {
            labelText: 'Webhooks',
            nameText: 'webhooks',
            description: 'Get real-time notifications about status updates, newly available reports, and other important events like refund issued or chargeback through our webhooks.'
        }
    ]

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-bluedark">Choose our Products</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div className="text-[#475569] mt-1">
                    {productsData.map((field) => (
                        <label key={field.nameText} className="flex mb-6 gap-x-2">
                            <input
                                type="checkbox"
                                name={field.nameText}
                                checked={formik.values[field.nameText]}
                                onChange={formik?.handleChange}
                                style={{ width: '50px', height: '25px' }}
                                className='mt-1'
                            />
                            <div>
                                <span className='text-xl text-bluedark'>
                                    {field.labelText}
                                </span>
                                <p className='pt-1'>
                                    {field.description}
                                </p>
                            </div>

                        </label>
                    ))}
                </div>
                <div className="pt-6 space-x-2">
                    <button type="submit" className="px-4 py-2 bg-bluedark text-white rounded">
                        Save Changes
                    </button>
                    <button type="button" className="px-4 py-2 bg-bluedark text-white rounded" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ProductManagementForm;
