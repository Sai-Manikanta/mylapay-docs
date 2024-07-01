import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
// import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import Header from '../components/layout/Header'
// import Footer from '../components/layout/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoginStatus } from '../../hooks/useLoginStatus';

const inter = Inter({ subsets: ["latin"] });

// Validation schema
const validationSchema = Yup.object({
    keyManagementFile: Yup.mixed()
        .required('A PEM or PPK file is required')
        .test(
            'fileFormat',
            'File must be a PEM or PPK file',
            (value) => value && (value.name.endsWith('.pem') || value.name.endsWith('.ppk'))
        ),
});

function ProductManagement() {
    const [productManagementData, setProductManagementData] = useState({});

    const formik = useFormik({
        initialValues: {
            keyManagementFile: null,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log('PEM or PPK file:', values.keyManagementFile);

            // const formData = new FormData();
            // formData.append('keyManagementFile', values.keyManagementFile);

            // try {
            //     const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/upload-key/${userId}`, formData, {
            //         headers: {
            //             'Content-Type': 'multipart/form-data'
            //         }
            //     });

            //     toast.success("PEM or PPK file has been successfully uploaded.");
            // } catch (error) {
            //     console.error('Upload error:', error);
            //     toast.error("Something went wrong. Please try again.");
            // }
        },
    });

    const { user } = useLoginStatus();

    // useEffect(() => {
    //     if (user?._id) {
    //         axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/sandbox?api=Product-Management/${user?._id}`)
    //             .then(res => {
    //                 setProductManagementData(res.data);
    //             })
    //             .catch(err => {
    //                 setProductManagementData({})
    //                 console.log(err)
    //             })
    //     }
    // }, [user?._id])

    const handleReset = () => {
        formik.resetForm();
        document.getElementById("keyManagementFile").value = null;
    };

    return (
        <div className={`${inter.className}`}>
            {/* <Header /> */}
            <div className={`bg-white wrapper p-12`}>
                <h2 className="text-2xl font-bold mb-6 text-bluedark">Key Management</h2>
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="keyManagementFile" className="block text-sm font-medium text-gray-700">
                            PEM or PPK File
                        </label>
                        <input
                            id="keyManagementFile"
                            name="keyManagementFile"
                            type="file"
                            accept=".pem,.ppk"
                            onChange={(event) => {
                                const file = event.currentTarget.files[0];
                                formik.setFieldValue("keyManagementFile", file);
                            }}
                            className="mt-1 block w-full"
                        />
                        {formik.touched.keyManagementFile && formik.errors.keyManagementFile ? (
                            <div className="text-[#EF4444] text-sm">{formik.errors.keyManagementFile}</div>
                        ) : null}
                    </div>
                    <div className="pt-6 space-x-2">
                        <button type="submit" className="px-4 py-2 bg-bluedark text-white rounded">
                            Upload
                        </button>
                        <button type="button" onClick={handleReset} className="ml-4 px-4 py-2 bg-bluedark text-white rounded">
                            Reset
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default ProductManagement
