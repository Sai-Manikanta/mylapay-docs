import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { SiMicrosoftaccess } from "react-icons/si";
import Sandbox from './SandboxForm';
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
    authorization: {
        overview: [
            'Mylapay Switch authorizes both card-present (POS) and card-not-present (PG) payments. This sandbox test environment will help you to test APIs, check error responses, request, and response data parameters for ISO switch authorization and reversal with Visa, MasterCard and Rupay networks.',
            'APIs are used to take card payment authorization from Issuing banks through card networks environment. Mylapay takes the API request and initiates the request to respective card networks with the required data elements in ISO formats.'
        ],
        apiSpecification: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ]
    }
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
            <div className='flex min-h-screen'>
                <div className={`${showSidebar ? 'block' : 'hidden'} sm:block h-screen fixed sm:sticky top-0 bg-primary text-white`}>
                    {/* SIDEBAR */}
                    {/* <button onClick={() => setShowSidebar(false)}>Close</button> */}



                    <div className="min-h-screen flex flex-row bg-gray-100">
                        <div className="flex flex-col w-56 bg-primary overflow-hidden">
                            <div className="flex items-center sm:justify-center p-4 gap-x-5 shadow bg-white">
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
                            <ul className="flex flex-col py-4">
                                <li>
                                    <Link
                                        href="/"
                                        className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                                    >
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                            <IoMdHome />
                                        </span>
                                        <span className="text-sm font-medium">Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/sandbox?api=authentication"
                                        className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'authentication' ? 'text-bluedark' : 'text-white'}
                                        `}
                                    >
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                            <i className="bx bx-shopping-bag" />
                                        </span>
                                        <span className="text-sm font-medium">
                                            Authentication
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/sandbox?api=authorization"
                                        className={`
                                             flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                                             ${query?.api === 'authorization' ? 'text-bluedark' : 'text-white'}
                                        `}
                                    >
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                            {/* <i className="bx bx-music" /> */}
                                            <SiMicrosoftaccess />
                                        </span>
                                        <span className="text-sm font-medium">
                                            Authorisation
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>



                    <button className='fixed top-5 right-5 sm:hidden' onClick={() => setShowSidebar(false)}>
                        CLOSE
                    </button>
                </div>
                <div className='flex-grow'>
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
                    <div className='p-8 bg-bggray min-h-screen'>
                        {/* <div className='bg-bluedark text-white h-screen'>RIGHT CONTENT</div> */}
                        {/* <div className='bg-black text-white h-screen'>RIGHT CONTENT</div> */}
                        <div className='bg-white rounded py-6 px-8 mb-8'>
                            <h2 className="text-xl font-semibold text-bluedark sm:text-2xl md:text-2xl mb-2">
                                Overview
                            </h2>

                            {data[query?.api]?.overview?.map((text, index) => (
                                <p key={index} className=" text-para max-w-4xl mb-4">
                                    {text}
                                </p>
                            ))}


                            <h2 className="text-xl font-semibold text-bluedark sm:text-2xl md:text-2xl mb-2">
                                API Specifications
                            </h2>

                            {data[query?.api]?.apiSpecification?.map((text, index) => (
                                <p key={index} className=" text-para max-w-4xl mb-4">
                                    {text}
                                </p>
                            ))}


                        </div>

                        <Sandbox />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar