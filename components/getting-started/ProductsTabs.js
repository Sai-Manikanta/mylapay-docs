import React from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import switch1 from '../../public/switch1.png'

function ProductsTabs() {
    return (
        <section className="bg-[#F4F4F4] p-4">
            <div className="bg-white">
                <div className="wrapper py-16 ">

                    <div className="heading">
                        <h2
                            className="text-center mb-7 text-md font-bold text-black leading-normal text-2xl lg:leading-[50px] lg:text-4xl"
                        >
                            Products
                        </h2>
                        <p className="text-left mb-10 text-lg text-para">
                            Find the solution that best suits your needs. Browse through Mylapay Products and choose the one or multiple products that is right for your business. Using our sandbox environment, you'll be able to test them
                        </p>
                    </div>

                    <Tab.Group>
                        {/* className="border-b-2 border-primary" */}
                        <Tab.List>
                            <Tab className="outline-none">
                                {({ selected }) => (
                                    /* Use the `selected` state to conditionally style the selected tab. */
                                    <div className="px-0 py-0 hover:scale-105 transition-transform duration-300 ease-in-out">
                                        <div className={`mr-4 w-fit text-[12px] py-3 px-2 sm:px-4 md:px-8  font-bold ${selected ? 'text-white' : 'text-bluedark'} rounded-md ${selected ? 'bg-bluelight' : '#fff'} hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase`}>
                                            <span className="relative z-10 select-none">
                                                Authentication
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </Tab>
                            <Tab className="outline-none">
                                {({ selected }) => (
                                    /* Use the `selected` state to conditionally style the selected tab. */
                                    <div className="px-0 py-0 hover:scale-105 transition-transform duration-300 ease-in-out">
                                        <div className={`mr-4 w-fit text-[12px] py-3 px-2 sm:px-4 md:px-8 font-bold ${selected ? 'text-white' : 'text-bluedark'} rounded-md ${selected ? 'bg-bluelight' : '#fff'} hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase`}>
                                            <span className="relative z-10 select-none">
                                                Authorization
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </Tab>
                            <Tab className="outline-none">
                                {({ selected }) => (
                                    /* Use the `selected` state to conditionally style the selected tab. */
                                    <div className="px-0 py-0 hover:scale-105 transition-transform duration-300 ease-in-out">
                                        <div className={`mr-1 w-fit text-[12px] py-3 px-2 sm:px-4 md:px-8  font-bold ${selected ? 'text-white' : 'text-bluedark'} rounded-md ${selected ? 'bg-bluelight' : '#fff'} hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase`}>
                                            <span className="relative z-10 select-none">
                                                IntelleEngine
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="py-4">
                            <Tab.Panel>

                                <div className="mx-auto mt-6 p-4 bg-[#f8fafc] border-l-4 border-primary">
                                    <div>
                                        <h2 className="text-xl font-bold text-bluedark sm:text-xl md:text-xl mb-4">
                                            What is Mylapay Secure?
                                        </h2>

                                        <p className=" text-para mx-auto">
                                            Mylapay 3-D Secure Authentication 2.3.1.1 powered by EMVCo empowers both cardholders and merchants with an additional layer of protection while mitigating fraudulent activity. It seamlessly redirects users to provide additional secured information to complete the transaction.
                                        </p>
                                    </div>
                                </div>


                                <div className="mx-auto pt-10 px-4 sm:px-0">
                                    <div className="mb-6">
                                        <h2 className="text-xl font-bold text-bluedark sm:text-2xl md:text-2xl">
                                            Benefits
                                        </h2>
                                    </div>

                                    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                                        <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden">
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                            </div>
                                            <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                                <span className="font-bold text-bluelight">Flexible Integration</span><br />
                                                Seamlessly integrate into your existing payment system with our APIs
                                            </h3>
                                        </div>

                                        <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden">
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                            </div>
                                            <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                                <span className="font-bold text-bluelight">Enhanced Fraud Protection</span><br />
                                                Reduces the risk of fraudulent transactions by leveraging additional verification
                                            </h3>
                                        </div>

                                        <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden">
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                            </div>
                                            <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                                <span className="font-bold text-bluelight">Increased Transaction Approvals</span><br />
                                                Legitimate transactions are approved, leading to fewer transactions to decline
                                            </h3>
                                        </div>

                                    </div>
                                </div>


                                <div className="mx-auto pt-10 px-4 sm:px-0">
                                    <div>
                                        <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-2xl mb-8">
                                            How it works
                                        </h2>
                                        <img src="https://junto.investments/wp-content/uploads/adyen-value-chain-1536x264.png" alt="flow-diagram" style={{ width: '100%' }} className='mt-4' />
                                    </div>
                                </div>




                            </Tab.Panel>
                            <Tab.Panel>


                                <div className="mx-auto mt-6 p-4 bg-[#f8fafc] border-l-4 border-primary">
                                    <div>
                                        <h2 className="text-xl font-bold text-bluedark sm:text-xl md:text-xl mb-4">
                                            What is Mylapay Switch?
                                        </h2>

                                        <p className=" text-para mx-auto mb-2">
                                            Mylapay Switch empowers global aggregators, gateways, and banks with a robust and secure payment authorization solution. It seamlessly facilitates both online and offline transactions, ensuring compatibility with major card networks like Visa, Mastercard, and Rupay.
                                        </p>

                                        <p className=" text-para mx-auto">
                                            Embedded with comprehensive risk management tools, Mylapay Switch safeguards every transaction against fraud, while its intelligent algorithms optimize approval rates. This synergy of security and efficiency makes it the ideal choice for modernizing payment infrastructure.
                                        </p>
                                    </div>
                                </div>

                                {/* <div className="mx-auto pt-10 px-4 sm:px-0">
                                    <div>
                                        <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-4xl text-center mb-8">
                                            What is Mylapay Switch?
                                        </h2>

                                        <p className="mb-6 text-lg text-para mx-auto">
                                            Mylapay Switch empowers global aggregators, gateways, and banks with a robust and secure payment authorization solution. It seamlessly facilitates both online and offline transactions, ensuring compatibility with major card networks like Visa, Mastercard, and Rupay.
                                        </p>
                                        <p className="text-lg text-para mx-auto">
                                            Embedded with comprehensive risk management tools, Mylapay Switch safeguards every transaction against fraud, while its intelligent algorithms optimize approval rates. This synergy of security and efficiency makes it the ideal choice for modernizing payment infrastructure.
                                        </p>
                                    </div>
                                </div> */}

                                <div className="mx-auto pt-10 px-4 sm:px-0">
                                    <div className="mb-6">
                                        <h2 className="text-xl font-bold text-bluedark sm:text-2xl md:text-2xl">
                                            Benefits
                                        </h2>
                                    </div>

                                    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                                        <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden">
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                            </div>
                                            <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                                <span className="font-bold text-bluelight">Increased payment success rate</span><br />
                                                Seamless transaction processing assures high payment success rates.
                                            </h3>
                                        </div>
                                        <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden">
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                            </div>
                                            <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                                <span className="font-bold text-bluelight">Secure environment</span><br />
                                                PCI-DSS compliant and compatible with Visa, Mastercard and Rupay networks.
                                            </h3>
                                        </div>
                                        <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden">
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                            </div>
                                            <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                                <span className="font-bold text-bluelight">High Availability</span><br />
                                                Exceptional reliability with an impressive 99.99% uptime.
                                            </h3>
                                        </div>
                                        <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden">
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                            </div>
                                            <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                                <span className="font-bold text-bluelight">Proactive risk assessment</span><br />

                                                Robust architecture prevents fraudulent activities.
                                            </h3>
                                        </div>

                                        <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden">
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                            </div>
                                            <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                                <span className="font-bold text-bluelight">Improved decision-making</span><br />

                                                Key data points provided additionally for better authorization success.
                                            </h3>
                                        </div>

                                    </div>
                                </div>


                                <div className="mx-auto pt-10 px-4 sm:px-0">
                                    <div>
                                        <h2 className="text-xl font-bold text-bluedark sm:text-2xl md:text-2xl mb-8">
                                            How it works
                                        </h2>
                                        <img src="https://junto.investments/wp-content/uploads/adyen-value-chain-1536x264.png" alt="flow-diagram" style={{ width: '100%' }} className='mt-4' />
                                    </div>
                                </div>

                            </Tab.Panel>
                            <Tab.Panel>



                                <div className="mx-auto mt-6 p-4 bg-[#f8fafc] border-l-4 border-primary">
                                    <div>
                                        <h2 className="text-xl font-bold text-bluedark sm:text-xl md:text-xl mb-4">
                                            What is Mylapay IntelleEngine?
                                        </h2>

                                        <p className=" text-para mx-auto mb-2">
                                            IntelleEngine, a 360 degree transaction management system streamlines payment authorization to settlement post-authorization effectively overseeing clearing, settlements, reconciliation, and profitability analysis.
                                        </p>

                                        <p className=" text-para mx-auto">
                                            This intuitive platform provides a user-friendly operational dashboard and effortlessly integrates with any third-party switch, supporting both card-present and card-not-present transactions. It revolutionizes payment processing by offering comprehensive end-to-end acquiring capabilities. Compatible with cloud technology, it can be hosted or deployed within an acquirer's IT infrastructure for enhanced data security. While presenting a unified suite, we customize solutions to fulfill specific acquirer requirements.
                                        </p>
                                    </div>
                                </div>

                                {/* <div className="mx-auto pt-10 px-4 sm:px-0">
                                    <div>
                                        <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-4xl text-center mb-8">
                                            What is Mylapay IntelleEngine?
                                        </h2>

                                        <p className="mb-6 text-lg text-para mx-auto">
                                            IntelleEngine, a 360 degree transaction management system streamlines payment authorization to settlement post-authorization effectively overseeing clearing, settlements, reconciliation, and profitability analysis.
                                        </p>
                                        <p className="text-lg text-para mx-auto">
                                            This intuitive platform provides a user-friendly operational dashboard and effortlessly integrates with any third-party switch, supporting both card-present and card-not-present transactions. It revolutionizes payment processing by offering comprehensive end-to-end acquiring capabilities. Compatible with cloud technology, it can be hosted or deployed within an acquirer's IT infrastructure for enhanced data security. While presenting a unified suite, we customize solutions to fulfill specific acquirer requirements.
                                        </p>
                                    </div>
                                </div> */}

                                <div className="mx-auto pt-10 px-4 sm:px-0">
                                    <div className="mb-6">
                                        <h2 className="text-xl font-bold text-bluedark sm:text-2xl md:text-2xl">
                                            Benefits
                                        </h2>
                                    </div>

                                    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                                        <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden">
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                            </div>
                                            <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                                <span className="font-bold text-bluelight">Seamless payment processing with high success rates</span><br />
                                                Simplified & easy API Integration
                                            </h3>
                                        </div>
                                        <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden">
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                            </div>
                                            <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                                <span className="font-bold text-bluelight">Cloud Solution & Highly Secured environment</span><br />
                                                Card networks published forex rates to maximize DCC revenue.
                                            </h3>
                                        </div>
                                        <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden">
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                            </div>
                                            <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                                <span className="font-bold text-bluelight">Risk protection embedded across the process </span><br />
                                                Realtime txn costing & routing optimizer APIs.
                                            </h3>
                                        </div>
                                        <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden">
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                            </div>
                                            <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                                <span className="font-bold text-bluelight">100% transparent system with intuitive dashboard </span><br />

                                                Realtime – Batchwise – Same day Settlement ready system
                                            </h3>
                                        </div>

                                        <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden">
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                            </div>
                                            <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                                <span className="font-bold text-bluelight">Zero risk on Cross border payments </span><br />

                                                Zero revenue leakage system
                                            </h3>
                                        </div>

                                        <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden">
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                            </div>
                                            <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                                <span className="font-bold text-bluelight">Transaction Cost plus, pricing </span><br />

                                                End-to-end processing in a single platform
                                            </h3>
                                        </div>

                                    </div>

                                    <div className="mx-auto pt-10 px-4 sm:px-0">
                                        <div>
                                            <h2 className="text-xl font-bold text-bluedark sm:text-2xl md:text-2xl mb-8">
                                                How it works
                                            </h2>
                                            <img src="https://junto.investments/wp-content/uploads/adyen-value-chain-1536x264.png" alt="flow-diagram" style={{ width: '100%' }} className='mt-4' />
                                        </div>
                                    </div>
                                </div>

                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </section>
    )
}

export default ProductsTabs