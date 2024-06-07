import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react'
import { IoMenuSharp, IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoMdClose, IoMdHome } from "react-icons/io";
import { SiMicrosoftaccess, SiCoronaengine } from "react-icons/si";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiAuthelia } from "react-icons/si";
import { MdOutlineToken } from "react-icons/md";
import { LiaFighterJetSolid } from "react-icons/lia";
import { GrBusinessService } from "react-icons/gr";
import { PiWebhooksLogo } from "react-icons/pi";
import { BsPlugin } from "react-icons/bs";
import Sandbox from './SandboxForm';
import ProfileDropDown from './ProfileDropDown'
// import NewAside from './NewAside'

// import SidebarNew from './SidebarNew'
import mylapaylogo from '../../public/mylapaylogo.png';

const data = {
    authentication: {
        overview: [
            'Mylapay Secure facilitates authentication of card-not-present (Payment Gateway / Payment Aggregators) payments. This sandbox test environment will help you to test APIs, check error responses, request and response data parameters with Visa and MasterCard networks.',
            "Mylapay API gateway receives the API request of the Visa / Mastercard / Rupay card payment authentication conducted via merchant - ecommerce - payment gateway channels, through its 3-D Secure server and initiates the request to the card network's directory server, including the necessary data elements in JSON formats, subsequently providing the authentication response."
        ],
        apiSpecification: [
            "The API specification precisely defines the required parameters for both initiating a request and receiving a response in the 3-D Secure Authentication process. It serves as a comprehensive guide, outlining the specific data elements essential for a successful authentication exchange"
        ]
    },
    ['3DSS-v2.2']: {
        overview: [
            'Mylapay Secure facilitates authentication of card-not-present (Payment Gateway / Payment Aggregators) payments. This sandbox test environment will help you to test APIs, check error responses, request and response data parameters with Visa and MasterCard networks.',
            "Mylapay API gateway receives the API request of the Visa / Mastercard / Rupay card payment authentication conducted via merchant - ecommerce - payment gateway channels, through its 3-D Secure server and initiates the request to the card network's directory server, including the necessary data elements in JSON formats, subsequently providing the authentication response."
        ],
        apiSpecification: [
            "The API specification precisely defines the required parameters for both initiating a request and receiving a response in the 3-D Secure Authentication process. It serves as a comprehensive guide, outlining the specific data elements essential for a successful authentication exchange"
        ]
    },
    ['3DSS-v2.3']: {
        overview: [
            'Mylapay Secure facilitates authentication of card-not-present (Payment Gateway / Payment Aggregators) payments. This sandbox test environment will help you to test APIs, check error responses, request and response data parameters with Visa and MasterCard networks.',
            "Mylapay API gateway receives the API request of the Visa / Mastercard / Rupay card payment authentication conducted via merchant - ecommerce - payment gateway channels, through its 3-D Secure server and initiates the request to the card network's directory server, including the necessary data elements in JSON formats, subsequently providing the authentication response."
        ],
        apiSpecification: [
            "The API specification precisely defines the required parameters for both initiating a request and receiving a response in the 3-D Secure Authentication process. It serves as a comprehensive guide, outlining the specific data elements essential for a successful authentication exchange"
        ]
    },
    authorization: {
        overview: [
            'Mylapay Switch authorizes both card-present (POS) and card-not-present (PG) payments. This sandbox test environment will help you to test APIs, check error responses, request, and response data parameters for ISO switch authorization and reversal with Visa, MasterCard and Rupay networks.',
            'APIs are used to take card payment authorization from Issuing banks through card networks environment. Mylapay takes the API request and initiates the request to respective card networks with the required data elements in ISO formats.'
        ],
        apiSpecification: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ]
    },
    Payments: {
        overview: [
            'Mylapay Switch authorizes both card-present (POS) and card-not-present (PG) payments. This sandbox test environment will help you to test APIs, check error responses, request, and response data parameters for ISO switch authorization and reversal with Visa, MasterCard and Rupay networks.',
            'APIs are used to take card payment authorization from Issuing banks through card networks environment. Mylapay takes the API request and initiates the request to respective card networks with the required data elements in ISO formats.'
        ],
        apiSpecification: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ]
    },
    Capture: {
        overview: [
            'Capture APIs are used to capture an authorized transaction from the issuing bank in ISO formats for checking error responses, request, and response data parameters. This API is applicable for both Card-present (POS) and Card-not-present (PG) payments.',
        ],
        apiSpecification: [
            "Capture API Specifications"
        ]
    },
    Refund: {
        overview: [
            'Refund APIs are used to show a refund which is linked to a capture or sale. This API is applicable for both Card-present (POS) and Card-not-present (PG) payments.',
        ],
        apiSpecification: [
            "Refund API Specifications"
        ]
    },
    Reversal: {
        overview: [
            'Reversal APIs are used to reverse / cancel the authorization taken for the card payment earlier from Issuing banks through card networks environment by providing the data elements in ISO formats.',
        ],
        apiSpecification: [
            "Reversal API Specifications"
        ]
    },
    Void: {
        overview: [
            'Void APIs are used to void a capture or credit that was submitted but not yet processed by the processor. This API is applicable for both Card-present (POS) and Card-not-present (PG) payments.',
        ],
        apiSpecification: [
            "Void API Specifications"
        ]
    },
};


function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const router = useRouter();
    const { query } = router;

    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
            </Head>
            <div className='flex min-h-screen relative'>
                <div className={`${showSidebar ? 'block' : 'hidden'} sm:block h-screen fixed sm:sticky top-0 bg-primary text-white`}>
                    <div className="min-h-screen flex flex-row bg-gray-100">
                        <div className="flex flex-col w-56 bg-white overflow-hidden">
                            <div className="flex items-center sm:justify-center p-4 gap-x-5 bg-white">
                                <div className='block sm:hidden'>
                                    {showSidebar ? (
                                        <button onClick={() => setShowSidebar(false)}>Close</button>
                                    ) : (
                                        <button onClick={() => setShowSidebar(true)}>Open</button>
                                    )}
                                </div>

                                <Link href="/" className="-m-1.5 p-1.5">
                                    <Image className="h-8 w-auto" src={mylapaylogo} alt="" />
                                </Link>
                            </div>
                            <ul className="flex flex-col py-4 bg-white" style={{ maxHeight: 'calc(100vh - 3rem)', overflowY: 'auto', overflowX: 'hidden' }}>
                                {/* <Link
                                    href="/sandbox?api=API-Authentication"
                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'API-Authentication' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                >
                                    <span className="text-sm font-medium">
                                        API Authentication
                                    </span>
                                </Link> */}


                                <Link
                                    href="/sandbox?api=API-Authentication"
                                    className={`
                                            flex w-full pr-4 flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                            ${(query?.api === 'API-Authentication') ? 'text-primary' : 'text-bluedark'}
                                       `}
                                >
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                        {/* <i className="bx bx-shopping-bag" /> */}
                                        <SiAuthelia />
                                    </span>
                                    <span className="text-sm font-medium text-left">
                                        API Authentication
                                    </span>
                                </Link>

                                <Disclosure as="li" defaultOpen={false}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={`
                                            flex w-full pr-4 flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                            ${(query?.api === '3DSS-v2.2' || query?.api === '3DSS-v2.3') ? 'text-primary' : 'text-bluedark'}
                                       `}
                                            >
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    {/* <i className="bx bx-shopping-bag" /> */}
                                                    <BsPlugin />
                                                </span>
                                                <span className="text-sm font-medium text-left">
                                                    3DSS - Merchant<br /> Plug-ins
                                                </span>

                                                <span className='inline-block ml-auto'>
                                                    {open ? <FaChevronUp className="inline-flex items-center justify-center h-5 w-5" /> : <FaChevronDown className="inline-flex items-center justify-center h-5 w-5" />}
                                                </span>
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-500 pl-10">


                                                <Link
                                                    href="/sandbox?api=3DSS-v2.2"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === '3DSS-v2.2' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        3DSS v2.2
                                                    </span>
                                                </Link>
                                                <Link
                                                    href="/sandbox?api=3DSS-v2.3"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === '3DSS-v2.3' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >

                                                    <span className="text-sm font-medium">
                                                        3DSS v2.3
                                                    </span>
                                                </Link>


                                            </Disclosure.Panel>
                                        </>
                                    )}


                                </Disclosure>

                                <Disclosure as="li" defaultOpen={false}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={`
                                            flex w-full pr-4 flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                            ${(query?.api === 'Payments' || query?.api === 'Reversal' || query?.api === 'Capture' || query?.api === 'Refund' || query?.api === 'Void' || query?.api === 'Status') ? 'text-primary' : 'text-bluedark'}
                                       `}
                                            >
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <SiMicrosoftaccess />
                                                </span>
                                                <span className="text-sm font-medium text-left">
                                                    Authorization
                                                </span>

                                                <span className='inline-block ml-auto'>
                                                    {open ? <FaChevronUp className="inline-flex items-center justify-center h-5 w-5" /> : <FaChevronDown className="inline-flex items-center justify-center h-5 w-5" />}
                                                </span>
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-500 pl-10">
                                                <Link
                                                    href="/sandbox?api=Payments"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Payments' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Payments
                                                    </span>
                                                </Link>
                                                <Link
                                                    href="/sandbox?api=Reversal"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Reversal' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >

                                                    <span className="text-sm font-medium">
                                                        Reversal
                                                    </span>
                                                </Link>

                                                <Link
                                                    href="/sandbox?api=Capture"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Capture' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >

                                                    <span className="text-sm font-medium">
                                                        Capture
                                                    </span>
                                                </Link>

                                                <Link
                                                    href="/sandbox?api=Refund"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Refund' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >

                                                    <span className="text-sm font-medium">
                                                        Refund
                                                    </span>
                                                </Link>

                                                <Link
                                                    href="/sandbox?api=Void"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Void' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >

                                                    <span className="text-sm font-medium">
                                                        Void
                                                    </span>
                                                </Link>

                                                <Link
                                                    href="/sandbox?api=Status"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Status' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >

                                                    <span className="text-sm font-medium">
                                                        Status
                                                    </span>
                                                </Link>




                                            </Disclosure.Panel>
                                        </>
                                    )}


                                </Disclosure>

                                {/* <Disclosure as="li" defaultOpen={false}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={`
                                            flex w-full pr-4 flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                            ${(query?.api === 'refund' || query?.api === 'reversal' || query?.api === 'void' || query?.api === 'capture') ? 'text-primary' : 'text-bluedark'}
                                       `}
                                            >
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <SiCoronaengine />
                                                </span>
                                                <span className="text-sm font-medium">
                                                    Intellengine
                                                </span>

                                                <span className='inline-block ml-auto'>
                                                    {open ? <FaChevronUp className="inline-flex items-center justify-center h-5 w-5" /> : <FaChevronDown className="inline-flex items-center justify-center h-5 w-5" />}
                                                </span>
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-500 pl-10">
                                                <Link
                                                    href="/sandbox?api=capture"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'capture' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Capture
                                                    </span>
                                                </Link>
                                                <Link
                                                    href="/sandbox?api=refund"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'refund' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Refund
                                                    </span>
                                                </Link>
                                                <Link
                                                    href="/sandbox?api=reversal"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'reversal' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Reversal
                                                    </span>
                                                </Link>
                                                <Link
                                                    href="/sandbox?api=void"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'void' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Void
                                                    </span>
                                                </Link>
                                            </Disclosure.Panel>
                                        </>
                                    )}


                                </Disclosure> */}

                                <Disclosure as="li" defaultOpen={false}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={`
                                            flex w-full pr-4 flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                            ${(query?.api === 'Network-Tokens') ? 'text-primary' : 'text-bluedark'}
                                       `}
                                            >
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <MdOutlineToken />
                                                </span>
                                                <span className="text-sm font-medium">
                                                    Network Tokens
                                                </span>

                                                <span className='inline-block ml-auto'>
                                                    {open ? <FaChevronUp className="inline-flex items-center justify-center h-5 w-5" /> : <FaChevronDown className="inline-flex items-center justify-center h-5 w-5" />}
                                                </span>


                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-500 pl-10">
                                                <Link
                                                    href="/sandbox?api=Network-Tokens"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Network-Tokens' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Network Tokens
                                                    </span>
                                                </Link>


                                            </Disclosure.Panel>
                                        </>
                                    )}


                                </Disclosure>

                                <Disclosure as="li" defaultOpen={false}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={`
                                            flex w-full pr-4 flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                            ${(query?.api === 'Risk-Check' || query?.api === 'Report-Fraud') ? 'text-primary' : 'text-bluedark'}
                                       `}
                                            >
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <IoShieldCheckmarkOutline />
                                                </span>
                                                <span className="text-sm font-medium">
                                                    Risk
                                                </span>

                                                <span className='inline-block ml-auto'>
                                                    {open ? <FaChevronUp className="inline-flex items-center justify-center h-5 w-5" /> : <FaChevronDown className="inline-flex items-center justify-center h-5 w-5" />}
                                                </span>


                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-500 pl-10">
                                                <Link
                                                    href="/sandbox?api=Risk-Check"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Risk-Check' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Risk Check
                                                    </span>
                                                </Link>

                                                <Link
                                                    href="/sandbox?api=Report-Fraud"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Report-Fraud' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Report Fraud
                                                    </span>
                                                </Link>
                                            </Disclosure.Panel>
                                        </>
                                    )}


                                </Disclosure>

                                <Disclosure as="li" defaultOpen={false}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={`
                                            flex w-full pr-4 flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                            ${(query?.api === 'Dispute-Check' || query?.api === 'Dispute-Action') ? 'text-primary' : 'text-bluedark'}
                                       `}
                                            >
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <LiaFighterJetSolid />
                                                </span>
                                                <span className="text-sm font-medium">
                                                    Dispute
                                                </span>

                                                <span className='inline-block ml-auto'>
                                                    {open ? <FaChevronUp className="inline-flex items-center justify-center h-5 w-5" /> : <FaChevronDown className="inline-flex items-center justify-center h-5 w-5" />}
                                                </span>


                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-500 pl-10">
                                                <Link
                                                    href="/sandbox?api=Dispute-Check"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Dispute-Check' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Dispute Check
                                                    </span>
                                                </Link>

                                                <Link
                                                    href="/sandbox?api=Dispute-Action"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Dispute-Action' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Dispute Action
                                                    </span>
                                                </Link>
                                            </Disclosure.Panel>
                                        </>
                                    )}


                                </Disclosure>

                                <Disclosure as="li" defaultOpen={false}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={`
                                            flex w-full pr-4 flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                            ${(query?.api === 'Fx-Checker' || query?.api === 'BIN-Checkerd' || query?.api === 'MCC-Checker' || query?.api === 'Cost-Checker') ? 'text-primary' : 'text-bluedark'}
                                       `}
                                            >
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <GrBusinessService />
                                                </span>
                                                <span className="text-sm font-medium">
                                                    Value Added Services
                                                </span>

                                                <span className='inline-block ml-auto'>
                                                    {open ? <FaChevronUp className="inline-flex items-center justify-center h-5 w-5" /> : <FaChevronDown className="inline-flex items-center justify-center h-5 w-5" />}
                                                </span>


                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-500 pl-10">
                                                <Link
                                                    href="/sandbox?api=Fx-Checker"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Fx-Checker' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Fx Checker
                                                    </span>
                                                </Link>

                                                <Link
                                                    href="/sandbox?api=BIN-Checker"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'BIN-Checker' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        BIN Checker
                                                    </span>
                                                </Link>

                                                <Link
                                                    href="/sandbox?api=MCC-Checker"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'MCC-Checker' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        MCC Checker
                                                    </span>
                                                </Link>

                                                <Link
                                                    href="/sandbox?api=Cost-Checker"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Cost-Checker' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Cost Checker
                                                    </span>
                                                </Link>


                                            </Disclosure.Panel>
                                        </>
                                    )}


                                </Disclosure>

                                <Disclosure as="li" defaultOpen={false}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={`
                                            flex w-full pr-4 flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                            ${(query?.api === 'Disputes' || query?.api === 'Risky-transaction') ? 'text-primary' : 'text-bluedark'}
                                       `}
                                            >
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <PiWebhooksLogo />
                                                </span>
                                                <span className="text-sm font-medium">
                                                    Webhook
                                                </span>

                                                <span className='inline-block ml-auto'>
                                                    {open ? <FaChevronUp className="inline-flex items-center justify-center h-5 w-5" /> : <FaChevronDown className="inline-flex items-center justify-center h-5 w-5" />}
                                                </span>


                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-500 pl-10">
                                                <Link
                                                    href="/sandbox?api=Disputes"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Disputes' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Disputes
                                                    </span>
                                                </Link>

                                                <Link
                                                    href="/sandbox?api=Risky-transaction"
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Risky-transaction' ? 'text-primary' : 'text-bluedark'}
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Risky transaction
                                                    </span>
                                                </Link>
                                            </Disclosure.Panel>
                                        </>
                                    )}


                                </Disclosure>
                            </ul>
                        </div>
                    </div>
                    <button className='fixed top-5 right-5 sm:hidden' onClick={() => setShowSidebar(false)}>
                        CLOSE
                    </button>
                </div>

                {/* <NewAside /> */}

                <div className='flex-grow'>
                    {/* Header mobile */}
                    <div className='p-4  sm:hidden flex items-center gap-x-5'>
                        {showSidebar ? (
                            <button onClick={() => setShowSidebar(false)}>
                                <IoMdClose className='text-2xl' />
                            </button>
                        ) : (
                            <button onClick={() => setShowSidebar(true)}>
                                <IoMenuSharp className='text-2xl' />
                            </button>
                        )}

                        <Link href="/" className="-m-1.5 p-1.5">
                            <Image className="h-8 w-auto" src={mylapaylogo} alt="" />
                        </Link>
                    </div>

                    {/* Header desktop */}
                    <div className='p-4 pr-14 hidden sm:flex justify-end items-center gap-x-5 sticky top-0 right-0 bg-white left-0 z-50'>

                        <Link href="/" className="-m-1.5 p-1.5" style={{ visibility: 'hidden' }}>
                            <Image className="h-8 w-auto" src={mylapaylogo} alt="" />
                        </Link>


                        <Link
                            href="/"
                            className="flex flex-row items-center h-12 transform transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 mr-1 text-lg text-gray-400">
                                <IoMdHome />
                            </span>
                            <span className="text-sm font-medium">Home</span>
                        </Link>


                        <ProfileDropDown />


                    </div>

                    <div className='p-8 bg-bggray min-h-screen'>


                        {query?.api !== 'API-Authentication' && (
                            <>
                                <div className='bg-white rounded py-6 px-8 mb-8'>
                                    <h2 className="text-xl font-semibold text-bluedark sm:text-2xl md:text-2xl mb-2">
                                        Overview
                                    </h2>

                                    {data[query?.api]?.overview?.map((text, index) => (
                                        <p key={index} className=" text-para max-w-4xl mb-4">
                                            {text}
                                        </p>
                                    ))}


                                    {/* <h2 className="text-xl font-semibold text-bluedark sm:text-2xl md:text-2xl mb-2">
                                        API Specifications
                                    </h2>

                                    {data[query?.api]?.apiSpecification?.map((text, index) => (
                                        <p key={index} className=" text-para max-w-4xl mb-4">
                                            {text}
                                        </p>
                                    ))} */}

                                </div>

                                <Sandbox />
                            </>
                        )}

                        {query?.api === 'API-Authentication' && (
                            // <div className='bg-white rounded py-6 px-8 mb-8'>
                            <div className="min-h-screen flex flex-col items-center justify-center">
                                <div className=" bg-white shadow-lg rounded-lg p-8 ">
                                    <h2 className="text-2xl font-bold mb-6 text-bluedark">Mylapay API Authentication Process and Sandbox Setup</h2>
                                    <p className="mb-4 text-gray-700">
                                        Mylapay uses HTTP Signature as an authentication method.
                                    </p>
                                    <p className="mb-4 text-gray-700">
                                        After logging into Mylapay’s Developer Account, the following credentials are required to successfully authenticate and setup the sandbox environment:
                                    </p>
                                    <ul className="list-decimal list-inside mb-6 text-gray-700">
                                        <li className="mb-2">
                                            <span className="font-semibold">Organization ID</span> – The unique ID that is generated by Mylapay for the user. This is non-editable and non-transferable.
                                        </li>
                                        <li className="mb-2">
                                            <span className="font-semibold">API URL</span> – Each of Mylapay’s products has a unique API URL that will be used in sandbox testing.
                                        </li>
                                        <li className="mb-2">
                                            <span className="font-semibold">API Keys</span> – Two keys will be generated and shared with the User, viz., Key & Shared Secret Key that will be used to authenticate the user in the sandbox environment.
                                        </li>
                                        <li className="mb-2">
                                            <span className="font-semibold">Password</span> – A random password will be generated for the user during the time of account creation, and it will be sent along with the account confirmation email.
                                        </li>
                                    </ul>
                                    <div className="bg-bluedark border-l-4 border-primary p-4 mb-6">
                                        <p className="text-primary font-semibold">Note:</p>
                                        <ul className="list-disc list-inside text-primary">
                                            <li className="mb-2">
                                                If the API keys are lost, they can be generated again using “Generate Keys”. If the password is lost or needs to be changed, “Forgot my Password” option can be used.
                                            </li>
                                            <li className="mb-2">
                                                Do not share your API Key and Secret Key with anyone or on any public platforms. This can pose serious threats for your Mylapay Account.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            // </div>
                        )}

                        {/* <Sandbox /> */}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar