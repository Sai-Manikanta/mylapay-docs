import { CiLogin } from "react-icons/ci";
import { MdOutlineCelebration } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { GrTest } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa";
import { PiCodesandboxLogo } from "react-icons/pi";
import { VscChip } from "react-icons/vsc";

export default function IntegrationSteps() {
    return (
        <div className="bg-[#F4F4F4] p-4 pb-0">
            <div className="bg-white">
                <div className="wrapper">
                    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="mb-10 text-center md:mb-12">
                            <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-4xl text-center mb-8 px-2">
                                Ready to get started?
                            </h2>

                            <p className="text-center mb-10 text-lg text-para max-w-4xl mx-auto px-2">
                                A quick overview of the steps required to access Mylapay Products that suits your business needs
                            </p>

                            {/* <p className="text-base text-gray-900 font-semibold md:text-lg">
                                A quick overview of the steps required to get started with integrating with Mylapay Solutions
                            </p> */}
                        </div>
                        <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
                            <div className="relative text-center">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary sm:w-20 sm:h-20">
                                    <CiLogin className="w-12 h-12 text-white sm:w-10 sm:h-10" />
                                </div>

                                <h2 class="text-2xl font-bold text-center mb-2 text-bluedark">Step 1</h2>
                                <p class="text-center text-black text-lg">
                                Create your Developers Login
                                </p>

                                <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                                    <svg
                                        className="w-8 text-bluedark transform rotate-90 lg:rotate-0"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <line
                                            fill="none"
                                            strokeMiterlimit="10"
                                            x1="2"
                                            y1="12"
                                            x2="22"
                                            y2="12"
                                        />
                                        <polyline
                                            fill="none"
                                            strokeMiterlimit="10"
                                            points="15,5 22,12 15,19 "
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative text-center">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary sm:w-20 sm:h-20">
                                    {/* <svg
                                        className="w-12 h-12 text-bluedark sm:w-16 sm:h-16"
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
                                    <VscChip className="w-10 h-10 text-white" />
                                </div>
                                <h2 class="text-2xl font-bold text-center mb-2 text-bluedark">Step 2</h2>
                                <p class="text-center text-black text-lg">
                                    Choose our Products
                                </p>
                                <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                                    <svg
                                        className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <line
                                            fill="none"
                                            strokeMiterlimit="10"
                                            x1="2"
                                            y1="12"
                                            x2="22"
                                            y2="12"
                                        />
                                        <polyline
                                            fill="none"
                                            strokeMiterlimit="10"
                                            points="15,5 22,12 15,19 "
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative text-center">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary sm:w-20 sm:h-20">
                                    <PiCodesandboxLogo className="w-10 h-10 text-white" />
                                </div>
                                <h2 class="text-2xl font-bold text-center mb-2 text-bluedark">Step 3</h2>
                                <p class="text-center text-black text-lg">
                                    Test APIs on Sandbox environment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};