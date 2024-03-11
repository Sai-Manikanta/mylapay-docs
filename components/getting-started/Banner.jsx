function Banner() {
    return (
        <div className="wrapper md:grid grid-cols-2 items-center py-16">
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl text-center md:text-left font-extrabold md:text-4xl leading-[40px] xxl:text-[58px] xxl:leading-[60px] text-black">
                    Welcome to the Mylapay's Developers Platform!
                </h2>
                <p className="my-8 text-center md:text-left text-lg font-light lg:w-[90%] text-black">
                    Your gateway to unlocking the full potential of our robust and versatile API. This comprehensive documentation is your guide to understand each endpoints, experiment with our APIs and seamlessly migrate into the Live environment.
                </p>

                <div className="m-auto w-full text-center lg:text-left">
                    <a href="/contact">
                        <button className="mx-3 font-semibold px-5 w-52 text-white text-center sm:mr-2 sm:ml-0 text-sm rounded-md bg-bluedark hover:before:bg-bluelight relative h-[50px] overflow-hidden px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase btn_1">
                            <span className="relative z-10 text-[13px] py-4">Products</span>
                        </button>
                    </a>
                    <button className="mt-7 mx-3 font-semibold px-5 pr-6 w-52 text-white text-center text-sm rounded-md bg-bluelight hover:before:bg-bluedark relative h-[50px] overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase btn_2">
                        <span className="relative z-10 text-[13px] py-4 ">Login</span>
                    </button>
                </div>

            </div>
            <div>
                <img
                    src="https://mylapay.com/assets/img/banner/Profitability.jpg"
                    alt="banner pic"
                    className="w-full"
                />
            </div>
        </div>
    )
}

export default Banner