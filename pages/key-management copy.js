import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoginStatus } from '../hooks/useLoginStatus';

const inter = Inter({ subsets: ["latin"] });

// Validation schema
const validationSchema = Yup.object({
    pemFile: Yup.mixed()
        .required('A PEM file is required')
        .test(
            'fileFormat',
            'File must be a PEM file',
            (value) => value && value.name.endsWith('.pem')
        ),
});

function ProductManagement() {
    const [productManagementData, setProductManagementData] = useState({});

    const formik = useFormik({
        initialValues: {
            pemFile: null,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log('PEM file:', values.pemFile);

            // const formData = new FormData();
            // formData.append('pemFile', values.pemFile);

            // try {
            //     const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/upload-pem/${userId}`, formData, {
            //         headers: {
            //             'Content-Type': 'multipart/form-data'
            //         }
            //     });

            //     toast.success("PEM file has been successfully uploaded.");
            // } catch (error) {
            //     console.error('Upload error:', error);
            //     toast.error("Something went wrong. Please try again.");
            // }
        },
    });

    const { user } = useLoginStatus();

    // useEffect(() => {
    //     if (user?._id) {
    //         axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/product-management/${user?._id}`)
    //             .then(res => {
    //                 setProductManagementData(res.data);
    //             })
    //             .catch(err => {
    //                 setProductManagementData({})
    //                 console.log(err)
    //             })
    //     }
    // }, [user?._id])

    return (
        <div className={`${inter.className}`}>
            <Header />
            <div className={`bg-white wrapper py-16`}>
                <h2 className="text-2xl font-bold mb-6 text-bluedark">Key Management</h2>
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="pemFile" className="block text-sm font-medium text-gray-700">
                            PEM File or PPK File
                        </label>
                        <input
                            id="pemFile"
                            name="pemFile"
                            type="file"
                            accept=".pem"
                            onChange={(event) => {
                                const file = event.currentTarget.files[0];
                                formik.setFieldValue("pemFile", file);
                            }}
                            className="mt-1 block w-full"
                        />
                        {formik.touched.pemFile && formik.errors.pemFile ? (
                            <div className="text-[#EF4444] text-sm">{formik.errors.pemFile}</div>
                        ) : null}
                    </div>
                    <div className="pt-6 space-x-2">
                        <button type="submit" className="px-4 py-2 bg-bluedark text-white rounded">
                            Upload
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div>
            <Footer />
        </div>
    )
}

export default ProductManagement