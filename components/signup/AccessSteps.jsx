import { TypeAnimation } from 'react-type-animation';
import LoginForm from './SignupForm'

export default function AccessSteps() {
    return (
        <div className="bg-[#F4F4F4] p-4">
            <div className="bg-white">
                <div className="wrapper pb-4">
                    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="mb-10 text-center md:mb-0">
                            <TypeAnimation
                                sequence={[
                                    'Create your Developers Login', 
                                    2000, 
                                    "Its Easy", 
                                    2000, 
                                ]}
                                wrapper="h1"
                                cursor={true}
                                repeat={Infinity}
                                className="text-xl font-bold text-black sm:text-3xl md:text-4xl text-center mb-8 px-2"
                            />
                            <p className="mt-6 text-center mb-10 text-lg text-para max-w-4xl mx-auto px-2">
                                This step is essential to receive unique organization ID and secret key. This key will be used for API authentication.
                            </p>
                            <div className="relative mt-12 lg:mt-12">
                                <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                                    <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="875" height="48" viewBox="0 0 875 48"
                                        fill="none">
                                        <path
                                            d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                                            stroke="#002060" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 12" />
                                    </svg>
                                </div>
                                <div
                                    className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                                    <div className='group'>
                                        <div
                                            className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-primary dark:border-gray-700 rounded-full shadow group-hover:bg-primary group-hover:text-white transform group-hover:scale-110 transition duration-300">
                                            <span className="text-xl font-semibold text-darkblue dark:text-gray-200">1</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-center mt-4 mb-2 text-bluedark">
                                            Register
                                        </h2>
                                        <p className="text-center text-black text-lg">
                                            Fill the form with all the necessary details
                                        </p>
                                    </div>
                                    <div className='group'>
                                        <div
                                            className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-primary dark:border-gray-700 rounded-full shadow  group-hover:bg-primary group-hover:text-white transform group-hover:scale-110 transition duration-300s">
                                            <span className="text-xl font-semibold text-darkblue dark:text-gray-200">2</span>
                                        </div>

                                        <h2 className="text-2xl font-bold text-center mt-4 mb-2 text-bluedark">
                                            Get Unique ID
                                        </h2>
                                        <p className="text-center text-black text-lg">
                                            Receive unique Organisation ID and secret key via email
                                        </p>
                                    </div>
                                    <div className='group'>
                                        <div
                                            className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-primary dark:border-gray-700 rounded-full shadow   group-hover:bg-primary group-hover:text-white transform group-hover:scale-110 transition duration-300s">
                                            <span className="text-xl font-semibold text-darkblue dark:text-gray-200">3</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-center mt-4 mb-2 text-bluedark">
                                            Generate Password
                                        </h2>
                                        <p className="text-center text-black text-lg">
                                            Follow the steps mentioned in the email to generate password
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};