import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios'
import { Disclosure } from '@headlessui/react'
import { IoMenuSharp, IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoMdClose, IoMdHome } from "react-icons/io";
import { SiMicrosoftaccess } from "react-icons/si";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiAuthelia } from "react-icons/si";
import { MdOutlineToken } from "react-icons/md";
import { LiaFighterJetSolid } from "react-icons/lia";
import { GrBusinessService } from "react-icons/gr";
import { PiWebhooksLogo } from "react-icons/pi";
import { BsPlugin } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import Sandbox from './SandboxForm';
import ProfileDropDown from './ProfileDropDown';
import { useLoginStatus } from '../../hooks/useLoginStatus'
import mylapaylogo from '../../public/mylapaylogo.png';

function SandboxWrapper() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [sandboxPageData, setSandboxPageData] = useState({});
    const [productManagementData, setProductManagementData] = useState({});
    const { user } = useLoginStatus();
    const router = useRouter();
    const { query } = router;

    useEffect(() => {
        if (query?.api) {
            // FETCHING SANDBOX API Page Data from Database
            axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/sandbox-page-data/${query?.api}`)
                .then(res => {
                    console.log(res.data.data)
                    setSandboxPageData(res.data.data)
                })
                .catch(err => {
                    setSandboxPageData({})
                    console.log(err)
                })
        }
    }, [query?.api])

    useEffect(() => {
        if (user?._id) {
            axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/product-management/${user?._id}`)
                .then(res => {
                    setProductManagementData(res.data);
                })
                .catch(err => {
                    setSandboxPageData({})
                    console.log(err)
                })
        }
    }, [user?._id])

    const apisAndcontentNotReadyPages = ["Status", "Network-Tokens", "Risk-Check", "Report-Fraud", "Dispute-Check", "Dispute-Action", "Fx-Checker", "BIN-Checker", "MCC-Checker", "Cost-Checker", "Disputes", "Risky-transaction"];

    return (
        <div>
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
                                <Disclosure as="li" defaultOpen={true}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={`
                                            flex w-full pr-4 flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                            text-bluedark
                                       `}
                                            >
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <HiOutlineHome size="1.3rem" />
                                                </span>
                                                <span className="text-sm font-medium text-left">
                                                    Home
                                                </span>

                                                <span className='inline-block ml-auto'>
                                                    {open ? <FaChevronUp className="inline-flex items-center justify-center h-5 w-5" /> : <FaChevronDown className="inline-flex items-center justify-center h-5 w-5" />}
                                                </span>
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-500 pl-10">
                                                <button
                                                    onClick={() => router.push('/product-management')}
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             text-bluedark
                                             disabled:opacity-50
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Product Management
                                                    </span>
                                                </button>

                                                <button
                                                    onClick={() => router.push('/key-management')}
                                                    // disabled={!productManagementData?.merchantPlugins?.mylapay3DSSv23}
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === '3DSS-v2.3' ? 'text-primary' : 'text-bluedark'}
                                             disabled:opacity-50
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Key Management
                                                    </span>
                                                </button>
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
                                            ${(query?.api === 'Payment-Aggregator') ? 'text-primary' : 'text-bluedark'}
                                       `}
                                            >
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <MdOutlineToken />
                                                </span>
                                                <span className="text-sm font-medium">
                                                    Onboarding
                                                </span>

                                                <span className='inline-block ml-auto'>
                                                    {open ? <FaChevronUp className="inline-flex items-center justify-center h-5 w-5" /> : <FaChevronDown className="inline-flex items-center justify-center h-5 w-5" />}
                                                </span>


                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-500 pl-10">


                                                <button
                                                    onClick={() => router.push('/sandbox?api=Payment-Aggregator')}
                                                    // disabled={!productManagementData?.authorization?.capture}
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Payment-Aggregator' ? 'text-primary' : 'text-bluedark'}
                                             disabled:opacity-50
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Payment Aggregator
                                                    </span>
                                                </button>

                                                <button
                                                    onClick={() => router.push('/sandbox?api=Merchant')}
                                                    // disabled={!productManagementData?.authorization?.capture}
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Merchant' ? 'text-primary' : 'text-bluedark'}
                                             disabled:opacity-50
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Merchant
                                                    </span>
                                                </button>


                                            </Disclosure.Panel>
                                        </>
                                    )}


                                </Disclosure>

                                <Disclosure as="li" defaultOpen={true}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={`
                                            flex w-full pr-4 flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                            ${(query?.api === '3DSS-v2.2' || query?.api === '3DSS-v2.3') ? 'text-primary' : 'text-bluedark'}
                                       `}
                                            >
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
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
                                                <button
                                                    onClick={() => router.push('/sandbox?api=3DSS-v2.2')}
                                                    // disabled={!productManagementData?.merchantPlugins?.mylapay3DSSv23}
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === '3DSS-v2.2' ? 'text-primary' : 'text-bluedark'}
                                             disabled:opacity-50
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        3DSS v2.2
                                                    </span>
                                                </button>

                                                <button
                                                    onClick={() => router.push('/sandbox?api=3DSS-v2.3')}
                                                    // disabled={!productManagementData?.merchantPlugins?.mylapay3DSSv23}
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === '3DSS-v2.3' ? 'text-primary' : 'text-bluedark'}
                                             disabled:opacity-50
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        3DSS v2.3
                                                    </span>
                                                </button>
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

                                                <button
                                                    onClick={() => router.push('/sandbox?api=Payments')}
                                                    // disabled={!productManagementData?.authorization?.payments}
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Payments' ? 'text-primary' : 'text-bluedark'}
                                             disabled:opacity-50
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Payments
                                                    </span>
                                                </button>


                                                <button
                                                    onClick={() => router.push('/sandbox?api=Reversal')}
                                                    // disabled={!productManagementData?.authorization?.reversal}
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Reversal' ? 'text-primary' : 'text-bluedark'}
                                             disabled:opacity-50
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Reversal
                                                    </span>
                                                </button>


                                                <button
                                                    onClick={() => router.push('/sandbox?api=Capture')}
                                                    // disabled={!productManagementData?.authorization?.capture}
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Capture' ? 'text-primary' : 'text-bluedark'}
                                             disabled:opacity-50
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Capture
                                                    </span>
                                                </button>



                                                <button
                                                    onClick={() => router.push('/sandbox?api=Refund')}
                                                    // disabled={!productManagementData?.authorization?.refund}
                                                    className={`
        flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
        ${query?.api === 'Refund' ? 'text-primary' : 'text-bluedark'}
        disabled:opacity-50
    `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Refund
                                                    </span>
                                                </button>

                                                <button
                                                    onClick={() => router.push('/sandbox?api=Void')}
                                                    // disabled={!productManagementData?.authorization?.void}
                                                    className={`
        flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
        ${query?.api === 'Void' ? 'text-primary' : 'text-bluedark'}
        disabled:opacity-50
    `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Void
                                                    </span>
                                                </button>

                                                <button
                                                    onClick={() => router.push('/sandbox?api=Status')}
                                                    // disabled={!productManagementData?.authorization?.status}
                                                    className={`
        flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
        ${query?.api === 'Status' ? 'text-primary' : 'text-bluedark'}
        disabled:opacity-50
    `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Status
                                                    </span>
                                                </button>

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

                                                <button
                                                    onClick={() => router.push('/sandbox?api=Network-Tokens')}
                                                    // disabled={!productManagementData?.networkTokens?.networkTokens}
                                                    className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'Network-Tokens' ? 'text-primary' : 'text-bluedark'}
                                             disabled:opacity-50
                                        `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Network Tokens
                                                    </span>
                                                </button>

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
                                                <button
                                                    onClick={() => router.push('/sandbox?api=Risk-Check')}
                                                    // disabled={!productManagementData?.risk?.riskCheck}
                                                    className={`
        flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
        ${query?.api === 'Risk-Check' ? 'text-primary' : 'text-bluedark'}
        disabled:opacity-50
    `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Risk Check
                                                    </span>
                                                </button>

                                                <button
                                                    onClick={() => router.push('/sandbox?api=Report-Fraud')}
                                                    // disabled={!productManagementData?.risk?.reportFraud}
                                                    className={`
        flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
        ${query?.api === 'Report-Fraud' ? 'text-primary' : 'text-bluedark'}
        disabled:opacity-50
    `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Report Fraud
                                                    </span>
                                                </button>

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
                                                <button
                                                    onClick={() => router.push('/sandbox?api=Dispute-Check')}
                                                    // disabled={!productManagementData?.dispute?.disputeCheck}
                                                    className={`
        flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
        ${query?.api === 'Dispute-Check' ? 'text-primary' : 'text-bluedark'}
        disabled:opacity-50
    `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Dispute Check
                                                    </span>
                                                </button>

                                                <button
                                                    onClick={() => router.push('/sandbox?api=Dispute-Action')}
                                                    // disabled={!productManagementData?.dispute?.disputeAction}
                                                    className={`
        flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
        ${query?.api === 'Dispute-Action' ? 'text-primary' : 'text-bluedark'}
        disabled:opacity-50
    `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Dispute Action
                                                    </span>
                                                </button>

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
                                                <button
                                                    onClick={() => router.push('/sandbox?api=Fx-Checker')}
                                                    // disabled={!productManagementData?.valueAddedServices?.fxChecker}
                                                    className={`
        flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
        ${query?.api === 'Fx-Checker' ? 'text-primary' : 'text-bluedark'}
        disabled:opacity-50
    `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Fx Checker
                                                    </span>
                                                </button>

                                                <button
                                                    onClick={() => router.push('/sandbox?api=BIN-Checker')}
                                                    // disabled={!productManagementData?.valueAddedServices?.binChecker}
                                                    className={`
        flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
        ${query?.api === 'BIN-Checker' ? 'text-primary' : 'text-bluedark'}
        disabled:opacity-50
    `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        BIN Checker
                                                    </span>
                                                </button>

                                                <button
                                                    onClick={() => router.push('/sandbox?api=MCC-Checker')}
                                                    // disabled={!productManagementData?.valueAddedServices?.mccChecker}
                                                    className={`
        flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
        ${query?.api === 'MCC-Checker' ? 'text-primary' : 'text-bluedark'}
        disabled:opacity-50
    `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        MCC Checker
                                                    </span>
                                                </button>

                                                <button
                                                    onClick={() => router.push('/sandbox?api=Cost-Checker')}
                                                    // disabled={!productManagementData?.valueAddedServices?.costChecker}
                                                    className={`
        flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
        ${query?.api === 'Cost-Checker' ? 'text-primary' : 'text-bluedark'}
        disabled:opacity-50
    `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Cost Checker
                                                    </span>
                                                </button>
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
                                                <button
                                                    onClick={() => router.push('/sandbox?api=Disputes')}
                                                    // disabled={!productManagementData?.webhooks?.disputes}
                                                    className={`
        flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
        ${query?.api === 'Disputes' ? 'text-primary' : 'text-bluedark'}
        disabled:opacity-50
    `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Disputes
                                                    </span>
                                                </button>

                                                <button
                                                    onClick={() => router.push('/sandbox?api=Risky-transaction')}
                                                    // disabled={!productManagementData?.webhooks?.riskyTransactions}
                                                    className={`
        flex flex-row items-center h-12 transform hover:translate-x-2 disabled:hover:translate-x-0 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
        ${query?.api === 'Risky-transaction' ? 'text-primary' : 'text-bluedark'}
        disabled:opacity-50
    `}
                                                >
                                                    <span className="text-sm font-medium">
                                                        Risky transaction
                                                    </span>
                                                </button>

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
                                <IoMdHome size="1.5rem" className='text-bluedark' />
                            </span>
                            {/* <span className="text-sm font-medium">Home</span> */}
                        </Link>
                        <ProfileDropDown />
                    </div>



                    <div className='p-8 bg-bggray min-h-screen'>

                        {!apisAndcontentNotReadyPages.includes(query?.api) && query?.api !== 'API-Authentication' && Object.entries(sandboxPageData).length > 0 && (
                            <>
                                <div className='bg-white rounded py-6 px-8 mb-8'>
                                    {/* <p>{JSON.stringify(sandboxPageData)}</p> */}
                                    <h2 className="text-xl font-semibold text-bluedark sm:text-2xl md:text-2xl mb-2">
                                        Overview
                                    </h2>

                                    {sandboxPageData?.overview?.map((text, index) => (
                                        <p key={index} className=" text-para max-w-4xl mb-4">
                                            {text}
                                        </p>
                                    ))}
                                </div>

                                {/* <pre>
                                    {JSON.stringify(sandboxPageData.requestParams, null, 2)}
                                </pre> */}

                                <Sandbox
                                    apiEndPoint={sandboxPageData?.apiEndPoint}
                                    requestParams={sandboxPageData?.requestParams}
                                    apiResponseData={sandboxPageData?.response}
                                    setSandboxPageData={setSandboxPageData}
                                />
                            </>
                        )}

                        {query?.api === 'API-Authentication' && (
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
                        )}

                        {!(Object.entries(sandboxPageData).length > 0) && query?.api !== 'API-Authentication' && query?.api !== 'Product-Management' && (
                            <div className="bg-white p-8 rounded-lg shadow-lg w-full text-center">
                                <h2 className="text-2xl font-semibold mb-4">Coming Soon!</h2>
                                <p className="text-gray-700 mb-4">
                                    Our team is working on the relevant APIs for testing. Please reach out to
                                    <a href="/customer-support" className="text-blue-500 underline ml-1">Customer Support</a> for any urgent information.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SandboxWrapper