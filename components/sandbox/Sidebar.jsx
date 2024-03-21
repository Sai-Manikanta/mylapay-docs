import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { SiMicrosoftaccess } from "react-icons/si";
import Sandbox from './SandboxForm'
import mylapaylogo from '../../public/mylapaylogo.png'


function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);

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
                                    <a
                                        href="#"
                                        className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                                    >
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                            {/* <i className="bx bx-home" /> */}
                                            <IoMdHome />
                                        </span>
                                        <span className="text-sm font-medium">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                                    >
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                            {/* <i className="bx bx-music" /> */}
                                            <SiMicrosoftaccess />
                                        </span>
                                        <span className="text-sm font-medium">Authorisation</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                                    >
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                            <i className="bx bx-drink" />
                                        </span>
                                        <span className="text-sm font-medium">3D Secure Protocol 2.1</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                                    >
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                            <i className="bx bx-shopping-bag" />
                                        </span>
                                        <span className="text-sm font-medium">Authentication</span>
                                    </a>
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
                            <h2 class="text-xl font-semibold text-bluedark sm:text-2xl md:text-2xl mb-2">Overview</h2>
                            <p class="text-lg text-para max-w-4xl">
                                Details about how to use 3DS Authentication for various card networks and card-not-present methods.
                            </p>
                        </div>

                        <Sandbox />
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar