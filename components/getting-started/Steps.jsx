import Link from 'next/link'
import { CiLogin } from "react-icons/ci";
import { PiCodesandboxLogo } from "react-icons/pi";
import { GoCodeReview } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";
import { useLoginStatus } from '../../hooks/useLoginStatus'

export default function Steps() {
    const { isLoggedIn } = useLoginStatus();

    return (
        <section className="bg-[#F4F4F4] p-4 pb-0">
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

                        <Link href="/signup">
                            <div className="flex group">
                                <div className="flex flex-col items-center mr-6">
                                    <div className="w-[2px] h-10 opacity-0 sm:h-full" />
                                    <div>
                                        <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group-hover:bg-bluedark group-hover:text-white">
                                            1
                                        </div>
                                    </div>
                                    <div className="w-[2px] h-full bg-bggray" />
                                </div>

                                <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0 group-hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                                    <div className="sm:mr-5">
                                        <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-primary group-hover:bg-bluedark sm:w-20 sm:h-20">
                                            <CiLogin className="w-12 h-12 text-white sm:w-10 sm:h-10" />
                                        </div>
                                    </div>
                                    <div>

                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark hover:text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto group-hover:underline group-hover:decoration-primary">
                                            Sign Up
                                        </h3>
                                        <p className="text-[12px] leading-[16px] sm:text-sm text-left">Create an account</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/developers-guide">
                            <div className="flex group">
                                <div className="flex flex-col items-center mr-6">
                                    <div className="w-[2px] h-10 bg-bggray sm:h-full" />
                                    <div>
                                        <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group-hover:bg-bluedark group-hover:text-white">
                                            2
                                        </div>
                                    </div>
                                    <div className="w-[2px] h-full bg-bggray" />
                                </div>


                                <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0  group-hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                                    <div className="sm:mr-5">
                                        <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-primary group-hover:bg-bluedark sm:w-20 sm:h-20">
                                            <GoCodeReview className="w-12 h-12 text-white sm:w-10 sm:h-10" />
                                        </div>
                                    </div>
                                    <div>

                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark group-hover:text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto  group-hover:underline group-hover:decoration-primary">
                                            Review
                                        </h3>

                                        <p className="text-[12px] leading-[16px] sm:text-sm text-left">Check our Documentation</p>
                                    </div>
                                </div>

                            </div>
                        </Link>


                        <Link href={isLoggedIn ? "/sandbox?api=Product-Management" : "/login"}>
                            <div className="flex  group">
                                <div className="flex flex-col items-center mr-6">
                                    <div className="w-[2px] h-10 bg-bggray sm:h-full" />
                                    <div>
                                        <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group-hover:bg-bluedark group-hover:text-white">
                                            3
                                        </div>
                                    </div>
                                    <div className="w-[2px] h-full bg-bggray" />
                                </div>

                                <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0  group-hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                                    <div className="sm:mr-5">
                                        <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-primary group-hover:bg-bluedark sm:w-20 sm:h-20">
                                            <PiCodesandboxLogo className="w-12 h-12 text-white sm:w-10 sm:h-10" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark group-hover:text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto  group-hover:underline group-hover:decoration-primary">
                                            Test
                                        </h3>
                                        <p className="text-[12px] leading-[16px] sm:text-sm text-left">Test the APIs in Sandbox</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/customer-care">
                            <div className="flex  group">
                                <div className="flex flex-col items-center mr-6">
                                    <div className="w-[2px] h-10 bg-bggray sm:h-full" />
                                    <div>
                                        <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group-hover:bg-bluedark group-hover:text-white">
                                            4
                                        </div>
                                    </div>
                                    <div className="w-[2px] h-full opacity-0" />
                                </div>

                                <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0  group-hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                                    <div className="sm:mr-5">
                                        <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-primary group-hover:bg-bluedark sm:w-20 sm:h-20">
                                            <CiGlobe className="w-12 h-12 text-white sm:w-10 sm:h-10" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-md xl:text-lg font-semibold text-bluedark group-hover:text-bluedark mb-2 md:mb-2 mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 text-left m-auto  group-hover:underline group-hover:decoration-primary">
                                            Go Live
                                        </h3>
                                        <p className="text-[12px] leading-[16px] sm:text-sm text-left">Contact support for onboarding</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};