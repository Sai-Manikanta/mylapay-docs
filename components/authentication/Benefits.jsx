import Image from 'next/image'
import switch1 from '../../public/switch1.png'

function Benefits() {
    return (
        <div className='p-4 bg-bggray'>
            <div className='bg-[#fff] '>
                <div className="wrapper xxl:mx-[-30px]">
                    <div className="mx-auto py-20 px-4 sm:px-0">
                        <div className="mb-10 md:mb-14">
                            <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-4xl text-center mb-8 px-2">
                                Benefits
                            </h2>

                            <p className="text-center mb-6 text-lg text-para mx-auto px-2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                            </p>
                        </div>

                        <div className="grid gap-x-10 gap-y-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                            <div
                                className="grid gap-1 text-left transition ease-in-out delay-150 content-start aos-init aos-animate"
                            >
                                <div className="items-left justify-left overflow-hidden">
                                    <Image
                                        src={switch1}
                                        alt=""
                                        className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                    />
                                </div>
                                <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                    <span className="font-bold text-bluelight">Flexible Integration</span><br />
                                    Seamlessly integrate into your existing payment system with our APIs
                                </h3>
                            </div>

                            <div
                                className="grid gap-1 text-left transition ease-in-out delay-150 content-start aos-init aos-animate"
                            >
                                <div className="items-left justify-left overflow-hidden">
                                    <Image
                                        src={switch1}
                                        alt=""
                                        className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                    />
                                </div>
                                <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                    <span className="font-bold text-bluelight">Enhanced Fraud Protection</span><br />
                                    Reduces the risk of fraudulent transactions by leveraging additional verification
                                </h3>
                            </div>

                            <div
                                className="grid gap-1 text-left transition ease-in-out delay-150 content-start aos-init aos-animate"
                            >
                                <div className="items-left justify-left overflow-hidden">
                                    <Image
                                        src={switch1}
                                        alt=""
                                        className="max-w-[60px] opacity-70 hover:opacity-100 hover:duration-100"
                                    />
                                </div>
                                <h3 className="text-md text-black mt-2 hover:text-bluedark">
                                    <span className="font-bold text-bluelight">Increased Transaction Approvals</span><br />
                                    Legitimate transactions are approved, leading to fewer transactions to decline
                                </h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits