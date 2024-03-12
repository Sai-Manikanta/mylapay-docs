import Link from 'next/link'

export default function AccessSteps() {
    return (
        <div className="bg-[#F4F4F4] p-4 pb-0">
            <div className="bg-white">
                <div className="wrapper">
                    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="mb-10 text-center md:mb-12">
                            <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-4xl text-center mb-8 px-2">
                                Create your Developers Login
                            </h2>

                            <p className="text-center mb-10 text-lg text-para max-w-4xl mx-auto px-2">
                                This step is essential to receive unique organization ID and secret key. This key will be used for API authentication.
                            </p>


                            <div class="relative mt-12 lg:mt-20">
                                <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                                    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="875" height="48" viewBox="0 0 875 48"
                                        fill="none">
                                        <path
                                            d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                                            stroke="#002060" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 12" />
                                    </svg>
                                </div>
                                <div
                                    class="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                                    <div>
                                        <div
                                            class="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-primary dark:border-gray-700 rounded-full shadow">
                                            <span class="text-xl font-semibold text-darkblue dark:text-gray-200">1</span>
                                        </div>
                                        <h2 class="text-2xl font-bold text-center mt-4 mb-2 text-bluedark">
                                            Register
                                        </h2>
                                        <p class="text-center text-black text-lg">
                                            Fill the form with all the necessary details
                                        </p>
                                    </div>
                                    <div>
                                        <div
                                            class="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-primary dark:border-gray-700 rounded-full shadow">
                                            <span class="text-xl font-semibold text-darkblue dark:text-gray-200">2</span>
                                        </div>

                                        <h2 class="text-2xl font-bold text-center mt-4 mb-2 text-bluedark">
                                            Get Unique ID & Secret
                                        </h2>
                                        <p class="text-center text-black text-lg">
                                            Receive unique Organisation ID and secret key via email
                                        </p>
                                    </div>
                                    <div>
                                        <div
                                            class="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-primary dark:border-gray-700 rounded-full shadow">
                                            <span class="text-xl font-semibold text-darkblue dark:text-gray-200">3</span>
                                        </div>
                                        <h2 class="text-2xl font-bold text-center mt-4 mb-2 text-bluedark">
                                            Generate Password
                                        </h2>
                                        <p class="text-center text-black text-lg">
                                            Follow the steps mentioned in the email to generate password
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <Link href="/login">
                                <button className="mt-14 font-semibold px-5 pr-6 w-52 text-white text-center text-sm rounded-md bg-bluelight hover:before:bg-bluedark relative h-[50px] overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase btn_2">
                                    <span className="relative z-10 text-[13px] py-4 ">Sign up</span>
                                </button>
                            </Link>

                            {/* <p className="text-base text-gray-900 font-semibold md:text-lg">
                                A quick overview of the steps required to get started with integrating with Mylapay Solutions
                            </p> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};