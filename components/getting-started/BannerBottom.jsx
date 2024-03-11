function BannerBottom() {
    // <section className="bg-[#F4F4F4] p-4">
    return (
        <section className="bg-[#F4F4F4] p-4">
            <div className="wrapper md:grid grid-cols-2 items-center py-16 bg-white">
                <div>
                    <img
                        src="https://mylapay.com/assets/img/banner/FRM.jpg"
                        alt="banner pic"
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl text-center md:text-left font-extrabold md:text-4xl leading-[40px] xxl:text-[58px] xxl:leading-[60px] text-black">
                        Test our APIs
                    </h2>
                    <p className="mt-8 text-center md:text-left text-lg font-light lg:w-[90%] text-black">
                        Once you have the login credentials, you can use them to authenticate request to our sandbox test environment. you can send request and receive response directly.
                    </p>

                    <p className="mt-4 mb-4 text-center md:text-left text-lg font-light lg:w-[90%] text-black">
                        Check out our Developer Guides page for more information on our APIs.
                    </p>

                    <div className="m-auto w-full text-center lg:text-left">
                        {/* <a href="/contact">
                        <button className="mx-3 font-semibold px-5 w-52 text-white text-center sm:mr-2 sm:ml-0 text-sm rounded-md bg-bluedark hover:before:bg-bluelight relative h-[50px] overflow-hidden px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase btn_1">
                            <span className="relative z-10 text-[13px] py-4">Products</span>
                        </button>
                    </a> */}
                        <button className="mt-4 font-semibold px-5 pr-6 w-52 text-white text-center text-sm rounded-md bg-bluelight hover:before:bg-bluedark relative h-[50px] overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase btn_2">
                            <span className="relative z-10 text-[13px] py-4 ">Developer Guides</span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BannerBottom