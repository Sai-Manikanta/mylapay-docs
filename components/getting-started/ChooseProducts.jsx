import Link from 'next/link'

function ChooseProducts() {
    return (
        <section className=" bg-[#F4F4F4] p-4">
            <div className=" bg-white py-20 px-4 sm:px-0">
                <div className="heading text-center max-w-4xl m-auto ">
                    <h2
                        className="mb-7 text-md font-bold text-black leading-normal text-2xl lg:leading-[50px] lg:text-4xl"
                    >
                        Choose Our Products
                    </h2>
                    <p
                        className="text-center mb-10 text-md lg:text-xl text-para"
                    >
                        Embark on a seamless payment journey with Mylapay, the pioneering integrated playform that simplifies your acquiring card payments with our full spectrum of product suites!
                    </p>
                </div>
                <div className="wrapper grid gap-5 md:gap-10 grid-cols-2 md:grid-cols-3">
                    <a href="#" className="grid gap-1 lg:gap-3 text-center py-5 shadow-md bg-white rounded-lg hover:shadow-xl transition hover:scale-110 border border-[#f1f1f1]">
                        <div className="max-w-[300px] m-auto ">
                            <div className=" bg-white rounded-md ">
                                <div className="p-3 py-3 relative w-full">
                                    <div className="">
                                        <img
                                            src="fingerprint.png"
                                            alt="project-8"
                                            className="w-16 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm font-bold text-black leading-[24px]">
                            Authentication
                        </p>
                    </a>
                    <a href="#" className="grid gap-3 text-center py-5 shadow-md bg-white rounded-lg hover:shadow-xl transition hover:scale-110 border border-[#f1f1f1]">
                        <div className="max-w-[300px] m-auto">
                            <div className=" bg-white rounded-md">
                                <div className="p-3 py-3 relative w-full">
                                    <div className="">
                                        <img
                                            src="data-security.png"
                                            alt="project-8"
                                            className="w-16 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm font-bold text-black leading-[24px]">
                            Authorization
                        </p>
                    </a>
                    {/* public\fingerprint.png */}
                    <a href="#" className="grid gap-3 text-center py-5 shadow-md bg-white rounded-lg hover:shadow-xl transition hover:scale-110 border border-[#f1f1f1]">
                        <div className="max-w-[300px] m-auto">
                            <div className=" bg-white rounded-md">
                                <div className="p-3 py-3 relative w-full">
                                    <div className="">
                                        <img
                                            src="https://mylapay.com/assets/img/icons/s2.png"
                                            alt="project-8"
                                            className="w-16 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm font-bold text-black leading-[24px]">
                            Intellengine
                        </p>
                    </a>
                </div>

                <Link href="/product-apis">
                <button className="mt-14 mx-auto block font-semibold px-5 pr-6 w-52 text-white text-center text-sm rounded-md bg-bluelight hover:before:bg-bluedark relative h-[50px] overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase btn_2">
                    <span className="relative z-10 text-[13px] py-4 ">Products</span>
                </button>
                </Link>
            </div>
        </section>

    )
}

export default ChooseProducts