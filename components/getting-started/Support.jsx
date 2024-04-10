function Support() {

    return (
        <div className='p-4 pt-0 bg-bggray'>
            <div className=' '>
                <div className="wrapper xxl:mx-[-30px]">
                    <div className="mx-auto py-20 px-4 sm:px-0">
                        {/* <div className="mb-10 md:mb-14">
                            <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-4xl text-center mb-8 px-2">
                                Benefits
                            </h2>

                            <p className="text-center mb-6 text-lg text-para mx-auto px-2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                            </p>
                        </div> */}

                        <div className=" mx-auto bg-bluedark py-12 px-5 rounded-xl shadow">
                            <div className="grid gap-5 items-center text-center lg:grid-cols-2 xl:grid-cols-2">
                                <div>
                                    <div
                                        className="text-xl leading-[40px] lg:text-3xl mt-3 text-white aos-init aos-animate"
                                    >
                                        {/* Need support? */}
                                        Need{" "}
                                        <span className="text-bluelight font-bold text-3xl ">
                                            support?
                                        </span>
                                        {" "}with Mylapay.
                                        {/* now. */}
                                    </div>
                                    <p className="mt-4 text-white text-lg">We are here to guide you.</p>
                                </div>
                                <div className="item-right">
                                    <a href="#">
                                        <button className="mb-5 mr-1 sm:mr-5 xl:mr-5 xl:my-2 font-semibold px-5 w-52 text-white text-sm rounded-md bg-bluelight hover:before:bg-white hover:text-black relative h-[50px]  overflow-hidden px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full uppercase">
                                            <span className="relative z-10">
                                                API Endpoints & Specifications 
                                            </span>
                                        </button>
                                    </a>
                                    <a href="#" className="sm:relative top-2">
                                        <button
                                            className="my-2 font-semibold px-5 w-52 mr-1 lg:mx-0 text-white text-sm rounded-md bg-bluelight hover:before:bg-white hover:text-black relative h-[50px] overflow-hidden px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full uppercase aos-init aos-animate"
                                        >
                                            <span className="relative z-10"> 
                                            Test on Sandbox
                                             </span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support