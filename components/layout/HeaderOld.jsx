function Header() {
    return (
        <header className="sticky top-0 shadow-sm bg-white z-50">
            <div className="wrapper flex justify-between items-center">
                <div>
                    <a href="#">
                        <img
                            src="https://mylapay.com/assets/img/mylapaylogo.png"
                            alt="logo"
                            className="h-12 my-2"
                        />
                    </a>
                </div>
                <div className="lg:hidden">
                    <ul className="flex gap-x-8">
                        <li className="flex items-center mr-2">
                            <button type="button" class="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden">
                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white"><path d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z" fill="currentColor"></path><path d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z" fill="currentColor"></path><path d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z" fill="currentColor"></path></svg>
                            </button>
                        </li>
                    </ul>
                </div>
                {/* <div className="hidden lg:block">
                    <ul className="flex gap-x-8">
                        <li className="flex items-center">
                            <a href="#" className="text-bluedark font-semibold">Products</a>
                        </li>
                        <li className="flex items-center">
                            <a href="#" className="text-bluedark font-semibold">Features</a>
                        </li>
                        <li className="flex items-center">
                            <a href="#" className="text-bluedark font-semibold">Authentication</a>
                        </li>
                        <li>
                            <a class="px-0 py-0 h_btn" href="/contact">
                                <button class="mr-1 w-fit my-3 mx-4 lg:my-0 lg:mx-0 lg:mr-0 text-[12px] py-2 px-3  font-bold text-white rounded-md bg-bluelight hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase">
                                    <span class="relative z-10">Get in touch</span>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a class="px-0 py-0 h_btn" href="/auth/signin">
                                <button class="w-fit my-3 mx-4 lg:my-0 lg:mx-0 lg:mr-0 text-[12px] py-2 px-3 font-bold text-white rounded-md bg-bluedark hover:before:bg-bluelight relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase">
                                    <span class="relative z-10">Login</span>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div> */}

                <div className="fixed top-0 right-0 bottom-0 h-screen lg:static bg-secondary">
                    <ul className="flex flex-col lg:flex-row gap-y-4  lg:gap-x-8">
                        <li className="flex items-start lg:items-center">
                            <a href="#" className="text-bluedark font-semibold">Products</a>
                        </li>
                        <li className="flex items-center">
                            <a href="#" className="text-bluedark font-semibold">Features</a>
                        </li>
                        <li className="flex items-center">
                            <a href="#" className="text-bluedark font-semibold">Authentication</a>
                        </li>
                        <li>
                            <a class="px-0 py-0 h_btn" href="/contact">
                                <button class="mr-1 w-fit my-3 mx-4 lg:my-0 lg:mx-0 lg:mr-0 text-[12px] py-2 px-3  font-bold text-white rounded-md bg-bluelight hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase">
                                    <span class="relative z-10">Get in touch</span>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a class="px-0 py-0 h_btn" href="/auth/signin">
                                <button class="w-fit my-3 mx-4 lg:my-0 lg:mx-0 lg:mr-0 text-[12px] py-2 px-3 font-bold text-white rounded-md bg-bluedark hover:before:bg-bluelight relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase">
                                    <span class="relative z-10">Login</span>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    )
}

export default Header