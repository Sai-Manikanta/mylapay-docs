import Link from 'next/link'
import { CiLogin } from "react-icons/ci";
import { PiCodesandboxLogo } from "react-icons/pi";
import { VscChip } from "react-icons/vsc";
import { GoCodeReview } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";

export default function Steps() {
    return (
        <section className="bg-[#F4F4F4] p-4 pt-0">
            <div className="bg-white">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                    <div className="mb-10 text-center md:mb-14">
                        <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-4xl text-center mb-8 px-2">
                            Ready to get started?
                        </h2>

                        <p className="text-center mb-10 text-lg text-para max-w-4xl mx-auto px-2">
                            Complete the steps below. For more details, refer to Get Started with Mylapay APIs page
                        </p>
                    </div>

                    <div className="grid max-w-sm mx-auto">
                        <div className="flex">
                            <div className="flex flex-col items-center mr-6">
                                <div className="w-[2px] h-10 opacity-0 sm:h-full" />
                                <div>
                                    <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                        1
                                    </div>
                                </div>
                                <div className="w-[2px] h-full bg-bggray" />
                            </div>
                            <Link href="/signup">
                                <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer group">
                                    <div className="sm:mr-5">
                                        <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-primary group-hover:bg-bluedark sm:w-20 sm:h-20">
                                            {/* <svg
                                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg> */}
                                            <CiLogin className="w-12 h-12 text-white sm:w-10 sm:h-10" />
                                        </div>
                                    </div>
                                    <div>

                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark hover:text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto">
                                            Signup
                                        </h3>
                                        {/* <p className="text-xl font-semibold sm:text-base">
                                    Login
                                    </p> */}
                                        <p className="text-[12px] leading-[16px] sm:text-sm text-left">Create an account</p>
                                        {/* <p className="text-sm text-gray-700">
                                    Create an account
                                    </p> */}
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-6">
                                <div className="w-[2px] h-10 bg-bggray sm:h-full" />
                                <div>
                                    <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                        2
                                    </div>
                                </div>
                                <div className="w-[2px] h-full bg-bggray" />
                            </div>

                            <Link href="#">
                            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer group">
                                <div className="sm:mr-5">
                                    <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-primary group-hover:bg-bluedark sm:w-20 sm:h-20">
                                        {/* <svg
                                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg> */}
                                        <GoCodeReview className="w-12 h-12 text-white sm:w-10 sm:h-10" />
                                    </div>
                                </div>
                                <div>

                                    <h3 className="text-md xl:text-lg font-semibold text-bluedark group-hover:text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto ">
                                        Review
                                    </h3>

                                    {/* <p className="text-xl font-semibold sm:text-base">
                                    Review
                                    </p> */}
                                    <p className="text-[12px] leading-[16px] sm:text-sm text-left">Check our Documentation</p>
                                    {/* <p className="text-sm text-gray-700">
                                    Check our Documentation
                                    </p> */}
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-6">
                                <div className="w-[2px] h-10 bg-bggray sm:h-full" />
                                <div>
                                    <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                        3
                                    </div>
                                </div>
                                <div className="w-[2px] h-full bg-bggray" />
                            </div>
                            <Link href="/product-apis">
                            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0  hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer group">
                                <div className="sm:mr-5">
                                    <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-primary group-hover:bg-bluedark sm:w-20 sm:h-20">
                                        {/* <svg
                                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg> */}
                                        <VscChip className="w-12 h-12 text-white sm:w-10 sm:h-10" />
                                    </div>
                                </div>
                                <div>

                                    <h3 className="text-md xl:text-lg font-semibold text-bluedark group-hover:text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto ">
                                        Choose
                                    </h3>

                                    {/* <p className="text-xl font-semibold sm:text-base">
                                    Choose
                                    </p> */}
                                    <p className="text-[12px] leading-[16px] sm:text-sm text-left">Browse through Mylapay Solutions</p>
                                    {/* <p className="text-sm text-gray-700">
                                    Browse through Mylapay Solutions
                                    </p> */}
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-6">
                                <div className="w-[2px] h-10 bg-bggray sm:h-full" />
                                <div>
                                    <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                        4
                                    </div>
                                </div>
                                <div className="w-[2px] h-full bg-bggray" />
                            </div>
                            <Link href="/sandbox?api=authentication">
                            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer group">
                                <div className="sm:mr-5">
                                    <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-primary group-hover:bg-bluedark sm:w-20 sm:h-20">
                                        {/* <svg
                                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg> */}
                                        <PiCodesandboxLogo className="w-12 h-12 text-white sm:w-10 sm:h-10" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-md xl:text-lg font-semibold text-bluedark group-hover:text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto ">
                                        Test
                                    </h3>
                                    {/* <p className="text-xl font-semibold sm:text-base">
                                    Test
                                    </p> */}
                                    <p className="text-[12px] leading-[16px] sm:text-sm text-left">Test the APIs in Sandbox</p>
                                    {/* <p className="text-sm text-gray-700">
                                    Test the APIs in Sandbox
                                    </p> */}
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div className="flex">
                            <div className="flex flex-col items-center mr-6">
                                <div className="w-[2px] h-10 bg-bggray sm:h-full" />
                                <div>
                                    <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                        5
                                    </div>
                                </div>
                                <div className="w-[2px] h-full opacity-0" />
                            </div>

                            <Link href="#">
                            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer group">
                                <div className="sm:mr-5">
                                    <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-primary group-hover:bg-bluedark sm:w-20 sm:h-20">
                                        {/* <svg
                                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg> */}
                                        <CiGlobe className="w-12 h-12 text-white sm:w-10 sm:h-10" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-md xl:text-lg font-semibold text-bluedark group-hover:text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto ">
                                        Go Live
                                    </h3>

                                    <p className="text-[12px] leading-[16px] sm:text-sm text-left">Contact support for onboarding</p>
                                    {/* <p className="text-xl font-semibold sm:text-base">Go Live</p> */}
                                    {/* <p className="text-sm text-gray-700">
                                    Contact support for onboarding
                                    </p> */}
                                </div>
                            </div>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};