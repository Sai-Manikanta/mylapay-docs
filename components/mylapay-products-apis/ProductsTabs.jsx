// import { lazy } from "react"
import { Tab } from '@headlessui/react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
// import ReactJson from 'react-json-view'
// const LazyReactJson = lazy(() => import("react-json-view"))
const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });
import { GoGraph } from "react-icons/go"
import { IoMdSwitch } from "react-icons/io"
import { RiSecurePaymentLine } from "react-icons/ri";
import visaCardIcon from "../../public/visa-card-icon.png"
import masterCardIcon from '../../public/master-card-icon.png'
import rupayCardIcon from '../../public/rupay-card-icon.png'


const requestJSON = {
    "username": "username",
    "password": "password"
}

const responseJSON = {
    "token": ""
}

function ProductsTabs() {
    return (
        <div className='p-4 bg-bggray'>
            <div className='bg-[#fff] '>
                <div className="wrapper xxl:mx-[-30px]">
                    <div className="max-w-4xl mx-auto py-20 px-4 sm:px-0">

                        <div className="mb-10 text-center md:mb-14">
                            <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-4xl text-center mb-8 px-2">
                                Mylapay Product APIs
                            </h2>

                            <p className="text-center mb-10 text-lg text-para max-w-4xl mx-auto px-2">
                                Find the solution that best suits your needs. Browse through Mylapay Products and choose the one or multiple products that right for your business.
                            </p>
                        </div>



                        <div className='my-8'>
                            <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                API Endpoints
                            </h3>

                            <p className="text-md text-black mb-2">
                                You need to include this URL before each URL endpoint to make API calls.
                            </p>

                            <div className='inline-flex flex-col sm:flex-row border text-sm rounded mb-2'>
                                <div className='py-2 px-4 sm:border-r'>
                                    Sandbox API URL
                                </div>
                                <div className='py-2 px-4 flex-grow text-primary'>
                                    https://transactions.mylapay.com/v1
                                </div>
                            </div>
                        </div>




                        <div className='my-8'>
                            <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                JWT Headers
                            </h3>

                            <p className="text-md text-black  mb-3">
                                Mylapay API uses JWT-based authentication for all requests that require authentication. Clients must include a valid JWT token in the Authentication header for each request.
                            </p>

                            <p className="text-md text-black ">
                                To obtain a JWT token, clients must make a POST request to the https://transactions.mylapay.com/v1/get_jwt_token endpoint with a valid username and password. The API server will verify the credentials and return a JWT token in the response body
                            </p>
                        </div>



                        <div className='my-8 grid sm:grid-cols-2 gap-4'>
                            <div>
                                <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                    Sample Request
                                </h3>

                                <div>
                                    <DynamicReactJson
                                        src={requestJSON}
                                        theme="monokai"
                                        enableClipboard={false}
                                        displayObjectSize={false}
                                        displayDataTypes={false}
                                        displayArrayKey={false}
                                        name={false}
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                    Sample Response
                                </h3>
                                <div>
                                    <DynamicReactJson
                                        src={responseJSON}
                                        theme="monokai"
                                        enableClipboard={false}
                                        displayObjectSize={false}
                                        displayDataTypes={false}
                                        displayArrayKey={false}
                                        name={false}
                                    />
                                </div>
                            </div>
                        </div>




                        <div className='my-8'>
                            <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                Token Format
                            </h3>

                            <p className="text-md text-black  mb-3">
                                JWT tokens used for authentication should be signed using the HS256 algorithm
                            </p>
                        </div>


                        <div className='my-8'>
                            <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                Verifying a JWT token
                            </h3>

                            <p className="text-md text-black  mb-3">
                                The API server verifies JWT tokens by checking the signature and expiration time. Tokens must be signed with the secret key “mysecretkey” and is valid for X days. If a JWT token is invalid or has expired, the API server will return Unauthorized response. If a client sends an invalid or expired JWT token, the API server will return Unauthorized response with the following JSON body: <span style={{ color: 'crimson' }}>{JSON.stringify({ "error": "Invalid or expired token" })}</span>
                            </p>
                        </div>




                        <Tab.Group>
                            <Tab.List className="border-b-2 border-primary">
                                <Tab className="outline-none">
                                    {({ selected }) => (
                                        /* Use the `selected` state to conditionally style the selected tab. */
                                        <div class="px-0 py-0">
                                            <div class={`mr-1 w-fit text-[12px] py-3 px-2 sm:px-4 md:px-8  font-bold ${selected ? 'text-white' : 'text-bluedark'} rounded-t-md ${selected ? 'bg-bluelight' : '#fff'} hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase`}>
                                                <span class="relative z-10 select-none">
                                                    Authentication
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </Tab>
                                <Tab className="outline-none">
                                    {({ selected }) => (
                                        /* Use the `selected` state to conditionally style the selected tab. */
                                        <div class="px-0 py-0">
                                            <div class={`mr-1 w-fit text-[12px] py-3 px-2 sm:px-4 md:px-8 font-bold ${selected ? 'text-white' : 'text-bluedark'} rounded-t-md ${selected ? 'bg-bluelight' : '#fff'} hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase`}>
                                                <span class="relative z-10 select-none">
                                                    Authorization
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </Tab>
                                <Tab className="outline-none">
                                    {({ selected }) => (
                                        /* Use the `selected` state to conditionally style the selected tab. */
                                        <div class="px-0 py-0">
                                            <div class={`mr-1 w-fit text-[12px] py-3 px-2 sm:px-4 md:px-8  font-bold ${selected ? 'text-white' : 'text-bluedark'} rounded-t-md ${selected ? 'bg-bluelight' : '#fff'} hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase`}>
                                                <span class="relative z-10 select-none">
                                                    IntelleEngine
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </Tab>
                            </Tab.List>
                            <Tab.Panels className="py-4">
                                <Tab.Panel>

                                    <div className="grid md:grid-cols-1 mt-4 max-w-xl">
                                        <div className="flex gap-4 items-center">
                                            <span className="text-violet-600 bg-violet-500/10 p-3 pl-0 pr-0 rounded-full">
                                                <svg
                                                    width={15}
                                                    height={15}
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <div>
                                                {/* <h3 className="font-semibold text-xl">Customizable</h3> */}

                                                <p className="text-md text-black ">
                                                    Seamless and secure authentication for online payments
                                                </p>


                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <span className="text-violet-600 bg-violet-500/10 p-3 pl-0 pr-0 rounded-full">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H2.50002C2.22388 4.99998 2.00002 5.22384 2.00002 5.49998V12.5C2.00002 12.7761 2.22388 13 2.50002 13H9.50002C9.77616 13 10 12.7761 10 12.5V5.49998C10 5.22384 9.77616 4.99998 9.50002 4.99998ZM2.50002 3.99998C1.67159 3.99998 1.00002 4.67156 1.00002 5.49998V12.5C1.00002 13.3284 1.67159 14 2.50002 14H9.50002C10.3284 14 11 13.3284 11 12.5V5.49998C11 4.67156 10.3284 3.99998 9.50002 3.99998H2.50002ZM14.7389 6.00001H14V12H14.7389C14.9469 12 15.064 12.2393 14.9362 12.4035L13.6974 13.9963C13.5973 14.125 13.4028 14.125 13.3027 13.9963L12.0639 12.4035C11.9362 12.2393 12.0532 12 12.2612 12H13V6.00001H12.2612C12.0532 6.00001 11.9361 5.76074 12.0639 5.59653L13.3027 4.00373C13.4028 3.87505 13.5973 3.87505 13.6974 4.00374L14.9362 5.59653C15.0639 5.76074 14.9469 6.00001 14.7389 6.00001Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <div>
                                                <p className="text-md text-black ">
                                                    Mylapay 3-D Secure (3DS) Version 2.3.1 certified by EMVCo
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            Used by
                                        </h3>

                                        <p className="text-md text-black">
                                            Payment Acquiring Banks, Merchants, and Payment Aggregators.
                                        </p>
                                    </div>

                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            Regions
                                        </h3>

                                        <p className="text-md text-black">
                                            This API is available globally.
                                        </p>
                                    </div>

                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            Supported Cards
                                        </h3>

                                        <div className='inline-flex items-center gap-x-5'>
                                            <Image src={visaCardIcon} width={80} alt="Visa card icon" className='h-20' />
                                            <Image src={masterCardIcon} width={70} alt="Master card icon" className='h-16' />
                                            <Image src={rupayCardIcon} height={64} width={140} alt="Rupay card icon" className='h-16 -mt-6' />
                                        </div>
                                    </div>


                                    {/* <div className='mt-6'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            How to start testing our APIs
                                        </h3>

                                        <p className="text-md text-black ">
                                            Once you have the organization ID and secret key, you can use them to authenticate requestes to our sandbox test environment. You can send requests and receive response directly. Just fill in you login credentials on the testing page and click Send.
                                        </p>
                                    </div> */}

                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            API URL
                                        </h3>

                                        {/* <p className="text-md text-black  mb-2">
                                            You need to include this URL before each URL endpoint to make API calls.
                                        </p>

                                        <div className='inline-flex border text-sm rounded mb-2'>
                                            <div className='py-2 px-4 border-r'>
                                                Sandbox API URL
                                            </div>
                                            <div className='py-2 px-4 flex-grow text-primary'>
                                                https://transactions.mylapay.com/v1
                                            </div>
                                        </div> */}



                                        <p className="text-md text-black mb-2">
                                            Use the URL to access and initiate authorization and reversal request.
                                        </p>

                                        <div className='inline-flex flex-col sm:flex-row border text-sm rounded mb-2'>
                                            <div className='py-2 px-4 sm:border-r'>
                                                Example
                                            </div>
                                            <div className='py-2 px-4 flex-grow break-all'>
                                                <span className='text-primary'>https://transactions.mylapay.com/v1</span>/mylapay_secure
                                            </div>
                                        </div>
                                    </div>


                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            API specifications
                                        </h3>

                                        <p className="text-md text-black  mb-3">
                                            The API specification precisely defines the required parameters for both initiating a request and receiving a response in the 3-D Secure Authentication process. It serves as a comprehensive guide, outlining the specific data elements essential for a successful authentication exchange.
                                        </p>

                                        {/* <p className="text-md text-black ">
                                            To obtain a JWT token, clients must make a POST request to the https://transactions.mylapay.com/v1/get_jwt_token endpoint with a valid username and password. The API server will verify the credentials and return a JWT token in the response body
                                        </p> */}
                                    </div>


                                    {/* <div className='mt-8 grid sm:grid-cols-2 gap-4'>
                                        <div>
                                            <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                                Sample Request
                                            </h3>

                                            <div>
                                                <DynamicReactJson
                                                    src={requestJSON}
                                                    theme="monokai"
                                                    enableClipboard={false}
                                                    displayObjectSize={false}
                                                    displayDataTypes={false}
                                                    displayArrayKey={false}
                                                    name={false}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                                Sample Response
                                            </h3>
                                            <div>
                                                <DynamicReactJson
                                                    src={responseJSON}
                                                    theme="monokai"
                                                    enableClipboard={false}
                                                    displayObjectSize={false}
                                                    displayDataTypes={false}
                                                    displayArrayKey={false}
                                                    name={false}
                                                />
                                            </div>
                                        </div>
                                    </div> */}

                                </Tab.Panel>
                                <Tab.Panel>
                                    <div className="grid md:grid-cols-1 mt-4 max-w-xl">
                                        <div className="flex gap-4 items-center">
                                            <span className="text-violet-600 bg-violet-500/10 p-3 pl-0 pr-0 rounded-full">
                                                {/* <svg
                                                    width={15}
                                                    height={15}
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                </svg> */}
                                                <GoGraph className="w-5 h-5" />
                                            </span>
                                            <div>
                                                {/* <h3 className="font-semibold text-xl">Customizable</h3> */}

                                                <p className="text-md text-black ">
                                                    Elevate your payment experience with higher success rate
                                                </p>


                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <span className="text-violet-600 bg-violet-500/10 p-3 pl-0 pr-0 rounded-full">
                                                {/* <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H2.50002C2.22388 4.99998 2.00002 5.22384 2.00002 5.49998V12.5C2.00002 12.7761 2.22388 13 2.50002 13H9.50002C9.77616 13 10 12.7761 10 12.5V5.49998C10 5.22384 9.77616 4.99998 9.50002 4.99998ZM2.50002 3.99998C1.67159 3.99998 1.00002 4.67156 1.00002 5.49998V12.5C1.00002 13.3284 1.67159 14 2.50002 14H9.50002C10.3284 14 11 13.3284 11 12.5V5.49998C11 4.67156 10.3284 3.99998 9.50002 3.99998H2.50002ZM14.7389 6.00001H14V12H14.7389C14.9469 12 15.064 12.2393 14.9362 12.4035L13.6974 13.9963C13.5973 14.125 13.4028 14.125 13.3027 13.9963L12.0639 12.4035C11.9362 12.2393 12.0532 12 12.2612 12H13V6.00001H12.2612C12.0532 6.00001 11.9361 5.76074 12.0639 5.59653L13.3027 4.00373C13.4028 3.87505 13.5973 3.87505 13.6974 4.00374L14.9362 5.59653C15.0639 5.76074 14.9469 6.00001 14.7389 6.00001Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                </svg> */}
                                                <IoMdSwitch className="w-5 h-5" />
                                            </span>
                                            <div>
                                                <p className="text-md text-black ">
                                                    Mylapay Switch
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            Used by
                                        </h3>

                                        <p className="text-md text-black">
                                            Payment Acquiring Banks, Merchants, and Payment Aggregators
                                        </p>
                                    </div>

                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            Regions
                                        </h3>

                                        <p className="text-md text-black">
                                            This API is available globally
                                        </p>
                                    </div>

                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            Supported Cards
                                        </h3>

                                        <div className='inline-flex items-center gap-x-5'>
                                            <Image src={visaCardIcon} width={80} alt="Visa card icon" className='h-20' />
                                            <Image src={masterCardIcon} width={70} alt="Master card icon" className='h-16' />
                                            <Image src={rupayCardIcon} height={64} width={140} alt="Rupay card icon" className='h-16 -mt-6' />
                                        </div>
                                    </div>


                                    {/* <div className='mt-6'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            How to start testing our APIs
                                        </h3>

                                        <p className="text-md text-black ">
                                            Once you have the organization ID and secret key, you can use them to authenticate requestes to our sandbox test environment. You can send requests and receive response directly. Just fill in you login credentials on the testing page and click Send.
                                        </p>
                                    </div> */}

                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            API URL
                                        </h3>

                                        {/* <p className="text-md text-black mb-2">
                                            You need to include this URL before each URL endpoint to make API calls.
                                        </p>

                                        <div className='inline-flex flex-col sm:flex-row border text-sm rounded mb-2'>
                                            <div className='py-2 px-4 sm:border-r'>
                                                Sandbox API URL
                                            </div>
                                            <div className='py-2 px-4 flex-grow text-primary'>
                                                https://transactions.mylapay.com/v1
                                            </div>
                                        </div> */}

                                        <p className="text-md text-black mb-2">
                                            Use the URL to access and initiate authorization and reversal request.
                                        </p>

                                        <div className='inline-flex flex-col sm:flex-row border text-sm rounded mb-2'>
                                            <div className='py-2 px-4 sm:border-r'>
                                                Example
                                            </div>
                                            <div className='py-2 px-4 flex-grow break-all'>
                                                <span className='text-primary'>https://transactions.mylapay.com/v1</span>/mylapay_switch
                                            </div>
                                        </div>
                                    </div>


                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            API specifications
                                        </h3>

                                        <p className="text-md text-black  mb-3">
                                            For ISO switch Authorization & Reversal request {"<>"} response for card payment transactions of Visa, MasterCard and Rupay networks.
                                        </p>

                                        {/* <p className="text-md text-black  break-all">
                                            To obtain a JWT token, clients must make a POST request to the https://transactions.mylapay.com/v1/get_jwt_token endpoint with a valid username and password. The API server will verify the credentials and return a JWT token in the response body
                                        </p> */}
                                    </div>


                                    {/* <div className='mt-8 grid sm:grid-cols-2 gap-4'>
                                        <div>
                                            <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                                Sample Request
                                            </h3>

                                            <div>
                                                <DynamicReactJson
                                                    src={requestJSON}
                                                    theme="monokai"
                                                    enableClipboard={false}
                                                    displayObjectSize={false}
                                                    displayDataTypes={false}
                                                    displayArrayKey={false}
                                                    name={false}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                                Sample Response
                                            </h3>
                                            <div>
                                                <DynamicReactJson
                                                    src={responseJSON}
                                                    theme="monokai"
                                                    enableClipboard={false}
                                                    displayObjectSize={false}
                                                    displayDataTypes={false}
                                                    displayArrayKey={false}
                                                    name={false}
                                                />
                                            </div>
                                        </div>
                                    </div> */}
                                </Tab.Panel>
                                <Tab.Panel>
                                    <div className="grid md:grid-cols-1 mt-4 max-w-xl">
                                        <div className="flex gap-4 items-start">
                                            <span className="text-violet-600 bg-violet-500/10 p-3 pl-0 pr-0 rounded-full">
                                                {/* <svg
                                                    width={15}
                                                    height={15}
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                </svg> */}
                                                {/* <GiArtificialIntelligence className="w-8 h-8" /> */}
                                                <RiSecurePaymentLine className="w-5 h-5" />
                                            </span>
                                            <div>
                                                {/* <h3 className="font-semibold text-xl">Customizable</h3> */}

                                                <p className="text-md text-black ">
                                                    Simplify your Payment journey with efficient post-authorization process management
                                                </p>


                                            </div>
                                        </div>

                                    </div>


                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            Used by
                                        </h3>

                                        <p className="text-md text-black">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </div>

                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            Regions
                                        </h3>

                                        <p className="text-md text-black">
                                            This API is available globally.
                                        </p>
                                    </div>

                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            Supported Cards
                                        </h3>

                                        <div className='inline-flex items-center gap-x-5'>
                                            <Image src={visaCardIcon} width={80} alt="Visa card icon" className='h-20' />
                                            <Image src={masterCardIcon} width={70} alt="Master card icon" className='h-16' />
                                            <Image src={rupayCardIcon} height={64} width={140} alt="Rupay card icon" className='h-16 -mt-6' />
                                        </div>
                                    </div>


                                    <div className='mt-6'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            How to start testing our APIs
                                        </h3>

                                        <p className="text-md text-black ">
                                            Once you have the organization ID and secret key, you can use them to authenticate requestes to our sandbox test environment. You can send requests and receive response directly. Just fill in you login credentials on the testing page and click Send.

                                        </p>
                                    </div>

                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                            API URLs
                                        </h3>

                                        {/* <p className="text-md text-black  mb-2">
                                            You need to include this URL before each URL endpoint to make API calls.
                                        </p>

                                        <div className='inline-flex border text-sm rounded mb-2'>
                                            <div className='py-2 px-4 border-r'>
                                                Sandbox API URL
                                            </div>
                                            <div className='py-2 px-4 flex-grow text-primary'>
                                                https://transactions.mylapay.com/v1
                                            </div>
                                        </div> */}

                                        <div>
                                            <p className="text-md text-black  mb-2">
                                                Use the URL to access for Capture the transactions.
                                            </p>

                                            <div className='inline-flex flex-col sm:flex-row border text-sm rounded mb-2'>
                                                <div className='py-2 px-4 sm:border-r'>
                                                    Capture API URL

                                                </div>
                                                <div className='py-2 px-4 flex-grow break-all'>
                                                    <span className='text-primary'>https://transactions.mylapay.com/v1</span>/mylapay_switch/capture
                                                </div>
                                            </div>
                                        </div>


                                        <div className='mt-6'>
                                            <p className="text-md text-black  mb-2">
                                                Use the URL to access for refund the transactions
                                            </p>

                                            <div className='inline-flex flex-col sm:flex-row border text-sm rounded mb-2'>
                                                <div className='py-2 px-4 sm:border-r'>
                                                    Refund API URL
                                                </div>
                                                <div className='py-2 px-4 flex-grow break-all'>
                                                    <span className='text-primary'>https://transactions.mylapay.com/v1</span>/mylapay_switch/refund
                                                </div>
                                            </div>
                                        </div>

                                        

                                        <div className='mt-6'>
                                            <p className="text-md text-black  mb-2">
                                                Use the URL to access for Void the Transactions
                                            </p>

                                            <div className='inline-flex flex-col sm:flex-row border text-sm rounded mb-2'>
                                                <div className='py-2 px-4 sm:border-r'>
                                                Void API URL
                                                </div>
                                                <div className='py-2 px-4 flex-grow break-all'>
                                                    <span className='text-primary'>https://transactions.mylapay.com/v1</span>/mylapay_switch/void
                                                </div>
                                            </div>
                                        </div>


                                        <div className='mt-6'>
                                            <p className="text-md text-black  mb-2">
                                                Use the URL to access for Reversal the transactions.
                                            </p>

                                            <div className='inline-flex flex-col sm:flex-row border text-sm rounded mb-2'>
                                                <div className='py-2 px-4 sm:border-r'>
                                                Reversal API URL
                                                </div>
                                                <div className='py-2 px-4 flex-grow break-all'>
                                                    <span className='text-primary'>https://transactions.mylapay.com/v1</span>/mylapay_switch/reversal
                                                </div>
                                            </div>
                                        </div>



                                    </div>


                                    <div className='mt-8'>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                        API specifications
                                        </h3>

                                        <p className="text-md text-black  mb-3">
                                        For Capture, Refund, Reversal, Void for the API request {"<>"} response for card payment transactions of Visa, MasterCard and Rupay networks.
                                        </p>

                                        
                                    </div>


                                    {/* <div className='mt-8 grid sm:grid-cols-2 gap-4'>
                                        <div>
                                            <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                                Sample Request
                                            </h3>

                                            <div>
                                                <DynamicReactJson
                                                    src={requestJSON}
                                                    theme="monokai"
                                                    enableClipboard={false}
                                                    displayObjectSize={false}
                                                    displayDataTypes={false}
                                                    displayArrayKey={false}
                                                    name={false}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-md xl:text-lg font-semibold text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:text-white">
                                                Sample Response
                                            </h3>
                                            <div>
                                                <DynamicReactJson
                                                    src={responseJSON}
                                                    theme="monokai"
                                                    enableClipboard={false}
                                                    displayObjectSize={false}
                                                    displayDataTypes={false}
                                                    displayArrayKey={false}
                                                    name={false}
                                                />
                                            </div>
                                        </div>
                                    </div> */}
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsTabs