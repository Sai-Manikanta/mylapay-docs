import React from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import switch1 from '../../public/switch1.png'
import visaCardIcon from "../../public/visa-card-icon.png"
import masterCardIcon from '../../public/master-card-icon.png'
import rupayCardIcon from '../../public/rupay-card-icon.png'

import flexibleIntegration from '../../public/images/benefit-icons/Flexible-Integration.png'
import enhancedFraudProtection from '../../public/images/benefit-icons/Enhanced-Fraud-Protection.png'
import increasedTransactionApprovals from '../../public/images/benefit-icons/Increased-Transaction-Approvals.png'
import reducedChargebacks from '../../public/images/benefit-icons/Reduced-Chargebacks.png'

import increasedPaymentSuccessRate from '../../public/images/benefit-icons/Increased-payment-success-rate.png'
import secureEnvironment from '../../public/images/benefit-icons/Secure-environment.png'
import highAvailability from '../../public/images/benefit-icons/High-Availability.png'
import proactiveRiskAssessment from '../../public/images/benefit-icons/Proactive-risk-assessment.png'

import seamlessPaymentProcessingWithHighSuccessRates from '../../public/images/benefit-icons/Seamless-payment-processing-with-high-success-rates.png'
import cloudSolutionHighlySecuredEnvironment from '../../public/images/benefit-icons/Cloud-Solution-Highly-Secured-environment.png'
import riskProtectionEmbeddedAcrossTheProcess from '../../public/images/benefit-icons/Risk-protection-embedded-across-the-process.png'
import simplifiedEasyAPIIntegration from '../../public/images/benefit-icons/Simplified-easy-API-Integration.png'
import transactionCostPlusPricing from '../../public/images/benefit-icons/Transaction-Cost-plus-pricing.png'
import zeroRevenueleakageSystem from '../../public/images/benefit-icons/Zero-revenue-leakage-system.png'

// Workflow
import authenticationWorkflowDesktop from '../../public/images/Workflows/Authentication-Workflow-Desktop.png'
import authenticationWorkflowMobile from '../../public/images/Workflows/Authentication-Workflow-Mobile.png'

import authorizationWorkflowDesktop from '../../public/images/Workflows/Authorization-Workflow-Desktop.png'
import authorizationWorkflowMobile from '../../public/images/Workflows/Authorization-Workflow-Mobile.png'

import intellegineWorkflowDesktop from '../../public/images/workflows/Intellegine-Workflow-Desktop.png'
import intellegineWorkflowMobile from '../../public/images/workflows/Intellegine-Workflow-Mobile.png'

function TabsCommonContent() {
    return (
        <>
            <div className="mx-auto pt-10 px-4 sm:px-0">
                <div>
                    <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-2xl mb-6">
                        Used by
                    </h2>

                    <div className="mx-auto p-4 bg-[#E2E8F0] border-l-4 border-primary">
                        <div>
                            <p className=" text-para mx-auto">
                                Payment Acquiring Banks, Merchants, and Payment Aggregators.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto pt-10 px-4 sm:px-0">
                <div>
                    <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-2xl mb-6">
                        Regions
                    </h2>

                    <div className="mx-auto p-4 bg-[#E2E8F0] border-l-4 border-primary">
                        <div>
                            <p className=" text-para mx-auto">
                                This API is available globally.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto pt-10 px-4 sm:px-0">
                <div>
                    <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-2xl mb-6">
                        Supported Cards
                    </h2>

                    <div className="mx-auto p-4 bg-[#E2E8F0] border-l-4 border-primary">
                        <div className='inline-flex items-center gap-x-5'>
                            <Image src={visaCardIcon} width={80} alt="Visa card icon" className='h-20 transform hover:scale-125 transition duration-300' />
                            <Image src={masterCardIcon} width={70} alt="Master card icon" className='h-16 transform hover:scale-125 transition duration-300' />
                            <Image src={rupayCardIcon} height={64} width={140} alt="Rupay card icon" className='h-16 -mt-6 transform hover:scale-125 transition duration-300' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

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
                                    <div className="px-0 py-0 transition-transform duration-300 ease-in-out">
                                        <div className={`border border-primary mr-0 sm:mr-4 w-fit text-[12px] py-3 px-1 sm:px-4 md:px-8  font-bold ${selected ? 'text-white' : 'text-bluedark'} rounded-t-md ${selected ? 'bg-bluelight' : '#fff'} hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase`}>
                                            <span className="text-xs sm:text-sm relative z-10 select-none">
                                                Authentication
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </Tab>
                            <Tab className="outline-none">
                                {({ selected }) => (
                                    /* Use the `selected` state to conditionally style the selected tab. */
                                    <div className="px-0 py-0 transition-transform duration-300 ease-in-out">
                                        <div className={`border border-primary mr-0 sm:mr-4 w-fit text-[12px] py-3 px-1 sm:px-4 md:px-8 font-bold ${selected ? 'text-white' : 'text-bluedark'} rounded-t-md ${selected ? 'bg-bluelight' : '#fff'} hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase`}>
                                            <span className="text-xs sm:text-sm relative z-10 select-none">
                                                Authorization
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </Tab>
                            <Tab className="outline-none">
                                {({ selected }) => (
                                    /* Use the `selected` state to conditionally style the selected tab. */
                                    <div className="px-0 py-0 transition-transform duration-300 ease-in-out">
                                        <div className={`border border-primary mr-0 sm:mr-4 w-fit text-[12px] py-3 px-1 sm:px-4 md:px-8  font-bold ${selected ? 'text-white' : 'text-bluedark'} rounded-t-md ${selected ? 'bg-bluelight' : '#fff'} hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase`}>
                                            <span className="text-xs sm:text-sm relative z-10 select-none">
                                                IntelleEngine
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="p-4 bg-white sm:bg-[#f1f1f1] border-t-2 border-primary">
                            <Tab.Panel>

                                <div className="mx-auto mt-6 p-4 bg-white sm:bg-[#f8fafc] border-l-4 border-primary">
                                    <div>
                                        <h2 className="text-xl font-bold text-bluedark sm:text-xl md:text-xl mb-4">
                                            What is Mylapay Secure?
                                        </h2>

                                        <p className=" text-para px-4 sm:px-0 mx-auto">
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

                                    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">


                                        <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={flexibleIntegration}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>Flexible Integration</h2>
                                                    <p className='text-sm'>Seamlessly integrate into your existing payment system with our APIs</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={enhancedFraudProtection}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>Enhanced Fraud Protection</h2>
                                                    <p className='text-sm'>Reduces the risk of fraudulent transactions by leveraging additional verification</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={increasedTransactionApprovals}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>Increased Transaction Approvals</h2>
                                                    <p className='text-sm'>Legitimate transactions are approved, leading to fewer transactions to decline</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={reducedChargebacks}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>Reduced Chargebacks</h2>
                                                    <p className='text-sm'>Liability of chargebacks shifts from merchant to issuer</p>
                                                </div>
                                            </div>
                                        </div>


                                        {/* <div
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
                                        </div> */}

                                        {/* <div
                                            className="bg-[#f8fafc] rounded shadow p-4 grid gap-1 text-left transition ease-in-out delay-150 content-start"
                                        >
                                            <div className="items-left justify-left overflow-hidden relative">
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
                                        </div> */}

                                        {/* <div
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
                                        </div> */}

                                    </div>
                                </div>


                                <div className="mx-auto pt-10 px-4 sm:px-0">
                                    <div>
                                        <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-2xl mb-8">
                                            How it works
                                        </h2>
                                        <Image src={authenticationWorkflowDesktop} alt="flow-diagram" style={{ width: '100%' }} className='bg-white p-4 hidden sm:block' />
                                        <Image src={authenticationWorkflowMobile} alt="flow-diagram" style={{ width: '600px' }} className='bg-white p-4 sm:hidden' />
                                    </div>
                                </div>


                                <TabsCommonContent />












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

                                    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">

                                        <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={increasedPaymentSuccessRate}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>Increased payment success rate</h2>
                                                    <p className='text-sm'>Seamlessly integrate into your existing payment system with our APIs</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div
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
                                        </div> */}


                                        <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={secureEnvironment}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>Secure environment</h2>
                                                    <p className='text-sm'>PCI-DSS compliant and compatible with Visa, Mastercard and Rupay networks.</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={highAvailability}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>High Availability</h2>
                                                    <p className='text-sm'>Exceptional reliability with an impressive 99.99% uptime.</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={proactiveRiskAssessment}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>Proactive risk assessment</h2>
                                                    <p className='text-sm'>
                                                        Robust architecture prevents fraudulent activities.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>


                                        {/* <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={switch1}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>Improved decision-making</h2>
                                                    <p className='text-sm'>
                                                        Key data points provided additionally for better authorization success.
                                                    </p>
                                                </div>
                                            </div>
                                        </div> */}

                                    </div>
                                </div>


                                <div className="mx-auto pt-10 px-4 sm:px-0">
                                    <div>
                                        <h2 className="text-xl font-bold text-bluedark sm:text-2xl md:text-2xl mb-8">
                                            How it works
                                        </h2>
                                        <Image src={authorizationWorkflowDesktop} alt="flow-diagram" style={{ width: '100%' }} className='bg-white p-4 hidden sm:block' />
                                        <Image src={authorizationWorkflowMobile} alt="flow-diagram" style={{ width: '600px' }} className='bg-white p-4 sm:hidden' />
                                    </div>
                                </div>

                                <TabsCommonContent />

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




                                    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">



                                        {/* import seamlessPaymentProcessingWithHighSuccessRates from '../../public/images/benefit-icons/Seamless-payment-processing-with-high-success-rates.png'
                                    import cloudSolutionHighlySecuredEnvironment from '../../public/images/benefit-icons/Cloud-Solution-Highly-Secured-environment.png'
                                    import riskProtectionEmbeddedAcrossTheProcess from '../../public/images/benefit-icons/Risk-protection-embedded-across-the-process.png'
                                    import simplifiedEasyAPIIntegration from '../../public/images/benefit-icons/Simplified-easy-API-Integration.png'
                                    import transactionCostPlusPricing from '../../public/images/benefit-icons/Transaction-Cost-plus-pricing.png'
                                    import zeroRevenueleakageSystem from '../../public/images/benefit-icons/Zero-revenue-leakage-system.png' */}


                                        <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={seamlessPaymentProcessingWithHighSuccessRates}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>Seamless payment processing with high success rates</h2>
                                                    <p className='text-sm'>
                                                        Card networks published forex rates to maximize DCC revenue.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={cloudSolutionHighlySecuredEnvironment}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>Cloud Solution & Highly Secured environment</h2>
                                                    <p className='text-sm'>
                                                        Realtime txn costing & routing optimizer APIs.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={riskProtectionEmbeddedAcrossTheProcess}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>Risk protection embedded across the process</h2>
                                                    <p className='text-sm'>
                                                        100% transparent system with intuitive dashboard
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={simplifiedEasyAPIIntegration}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>Simplified & easy API Integration</h2>
                                                    <p className='text-sm'>
                                                        Zero risk on Cross border payments
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={transactionCostPlusPricing}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>Transaction Cost plus, pricing</h2>
                                                    <p className='text-sm'>
                                                        Realtime – Batchwise – Same day Settlement ready system
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='bg-gradient-to-r from-[#47BDFF] to-[#002060] p-2 rounded shadow hover:scale-105 transition-transform duration-300 ease-in-out '>
                                            <div className='bg-white rounded h-full p-2 flex gap-x-4 items-start'>
                                                <Image
                                                    src={zeroRevenueleakageSystem}
                                                    alt=""
                                                    className="flex-shrink-0 max-w-[70px] opacity-70 hover:opacity-100 hover:duration-100"
                                                />
                                                <div className='flex-grow'>
                                                    <h2 className='font-bold text-bluelight'>Zero revenue leakage system </h2>
                                                    <p className='text-sm'>
                                                        End-to-end processing in a single platform
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mx-auto pt-10 px-4 sm:px-0">
                                        <div>
                                            <h2 className="text-xl font-bold text-bluedark sm:text-2xl md:text-2xl mb-8">
                                                How it works
                                            </h2>
                                            <Image src={intellegineWorkflowDesktop} alt="flow-diagram" style={{ width: '100%' }} className='bg-white p-4 hidden sm:block' />
                                            <Image src={intellegineWorkflowMobile} alt="flow-diagram" style={{ width: '600px' }} className='bg-white p-4 sm:hidden' />
                                        </div>
                                    </div>

                                    <TabsCommonContent />
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