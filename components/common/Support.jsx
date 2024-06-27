import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useLoginStatus } from '../../hooks/useLoginStatus';

const validationSchema = Yup.object().shape({
    organizationId: Yup.string().required('Organization ID is required'),
    userName: Yup.string().required('Username is required'),
    description: Yup.string().required('Description is required'),
});

const SupportQueryForm = ({ setIsOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user, loading: userLoading } = useLoginStatus();

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        setLoading(true);
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/query-support`, {
                organizationId: values.organizationId.trim(),
                userName: values.userName.trim(),
                description: values.description.trim(),
            });
            setIsOpen(false)
            alert('Query submitted successfully');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setErrors({ serverError: error.response.data.error });
            } else {
                setErrors({ serverError: 'An error occurred. Please try again.' });
                alert('Submission failed: Please try again.');
            }
        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    };

    return (
        <div className="relative z-10 sm:m-0">
            <Formik
                initialValues={{
                    organizationId: user?.organizationId ? user?.organizationId : '',
                    userName: user?.userName ? user?.userName : '',
                    description: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ errors, isSubmitting }) => (
                    <Form className="rounded-3xl bg-white px-4 py-8 lg:px-8">
                        <div className="grid gap-10 md:grid-cols-1 mb-10">
                            <div className="relative">
                                <Field
                                    type="text"
                                    name="organizationId"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Organization ID
                                </label>
                                <ErrorMessage name="organizationId" component="div" className="text-sm mt-2 text-red" />
                            </div>
                        </div>

                        <div className="grid gap-10 md:grid-cols-1 mb-10">
                            <div className="relative">
                                <Field
                                    type="text"
                                    name="userName"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Username
                                </label>
                                <ErrorMessage name="userName" component="div" className="text-sm mt-2 text-red" />
                            </div>
                        </div>

                        <div className="grid gap-10 md:grid-cols-1 mb-10">
                            <div className="relative">
                                <Field
                                    as="textarea"
                                    name="description"
                                    className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                    placeholder=" "
                                />
                                <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                    Description
                                </label>
                                <ErrorMessage name="description" component="div" className="text-sm mt-2 text-red" />
                            </div>
                        </div>

                        {errors.serverError && <div className="text-red text-sm mb-4">{errors.serverError}</div>}

                        <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                            <button type="submit" className="w-full btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white disabled:opacity-50" disabled={isSubmitting || loading}>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

function Support() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='p-4 pt-0 bg-bggray'>
                <div>
                    <div className="wrapper mx-auto">
                        <div className="mx-auto py-20 px-4 sm:px-0">
                            <div className="mx-auto bg-bluedark py-12 px-5 rounded-xl shadow">
                                <div className="grid gap-5 items-center text-center lg:grid-cols-2 xl:grid-cols-2">
                                    <div>
                                        <div
                                            className="text-xl leading-[40px] lg:text-3xl mt-3 text-white aos-init aos-animate"
                                        >
                                            Need{" "}
                                            <span className="text-bluelight font-bold text-3xl ">
                                                support?
                                            </span>
                                            {" "}with Mylapay.
                                        </div>
                                        <p className="mt-4 text-white text-lg">We are here to guide you.</p>
                                    </div>
                                    <div className="item-right">
                                        <button onClick={() => setIsOpen(true)} className="mb-5 mr-1 sm:mr-5 xl:mr-5 xl:my-2 font-semibold px-5 w-52 text-white text-sm rounded-md bg-bluelight hover:before:bg-white hover:text-black relative h-[50px]  overflow-hidden px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500  hover:before:left-0 hover:before:w-full uppercase">
                                            <span className="relative z-10"> Contact Support </span>
                                        </button>
                                        <a href="#">
                                            <button
                                                className="my-2 font-semibold px-5 w-52 mr-1 lg:mx-0 text-white text-sm rounded-md bg-bluelight hover:before:bg-white hover:text-black relative h-[50px] overflow-hidden px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500  hover:before:left-0 hover:before:w-full uppercase aos-init aos-animate"
                                            >
                                                <span className="relative z-10"> Developer Forum </span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <>
                {isOpen && (
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
                    ></div>
                )}
                <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="bg-white fixed top-[50%] left-[50%] z-50 p-2 rounded shadow md:w-1/3"
                    style={{ transform: 'translate(-50%,-50%)' }}
                >
                    <Dialog.Panel>
                        
                        <Dialog.Title className="text-xl font-bold text-center mt-4 text-bluedark">
                        We are here to help!<br /> Submit Your Support Query Below
                        </Dialog.Title>

                        <SupportQueryForm setIsOpen={setIsOpen} />
                    </Dialog.Panel>
                </Dialog>
            </>
        </>
    )
}

export default Support