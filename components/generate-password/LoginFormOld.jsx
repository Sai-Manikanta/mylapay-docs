function LoginForm() {
    return (
        <div className="relative z-10 bg-white rounded-xl border border-gray/20 ">
            <form
                action=""
                className="rounded-3xl bg-white px-4 py-8 dark:bg-[#101626] lg:px-8"
            >
                {/* <h3 className="text-2xl font-bold text-black text-center pb-10">
                    New User Sign Up
                </h3> */}

                {/* Company Name: */}

                <div className="grid gap-10 md:grid-cols-1 mb-10">
                    <div className="relative">
                        <input
                            type="text"
                            name="Company Name"
                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                        />
                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                            Company Name
                        </label>
                    </div>
                </div>

                <div className="grid gap-10 md:grid-cols-2 mb-10">
                    <div className="relative">
                        <input
                            type="text"
                            name="First Name"
                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal  text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                        />
                        <label className="absolute -top-3 bg-white px-2 font-normal left-3   text-sm text-para">
                            First Name
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            name="Last Name"
                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal  text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                        />
                        <label className="absolute -top-3 bg-white px-2 font-normal left-3  text-sm text-para">
                            Last Name
                        </label>
                    </div>
                </div>

                <div className="grid gap-10 md:grid-cols-2 mb-10">
                    <div className="relative">
                        <input
                            type="text"
                            name="Country"
                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal  text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                        />
                        <label className="absolute -top-3 bg-white px-2 font-normal left-3  text-sm text-para">
                            Country
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            name="City"
                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal  text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                        />
                        <label className="absolute -top-3 bg-white px-2 font-normal left-3  text-sm text-para">
                            City
                        </label>
                    </div>
                </div>
                
                <div className="grid gap-10 md:grid-cols-2 mb-10">
                    <div className="relative">
                        <input
                            type="number"
                            name="Pincode"
                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal  text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                        />
                        <label className="absolute -top-3 bg-white px-2 font-normal left-3   text-sm text-para">
                            Pincode
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal  text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                        />
                        <label className="absolute -top-3 bg-white px-2 font-normal left-3  text-sm text-para">
                            Email ID
                        </label>
                    </div>
                </div>
                <div className="grid gap-10 md:grid-cols-2">
                    <div className="relative">
                        <input
                            type="text"
                            name="Mobile Number"
                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal  text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                        />
                        <label className="absolute -top-3 bg-white px-2 font-normal left-3  text-sm text-para">
                            Mobile Number
                        </label>
                    </div>

                    <div className="relative">
                        <select
                            id="country"
                            name="Product of Interest"
                            autoComplete="country-name"
                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal  text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                        >
                            <option>Authentication</option>
                            <option>Authorization</option>
                            <option>Intellengine</option>
                        </select>
                        <label className="absolute -top-3 bg-white px-2 font-normal left-3  text-sm text-para">
                        Product of Interest
                        </label>
                    </div>
                </div>
                <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                    <button
                        type="button"
                        className="w-full btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white"
                    >
                        Create Account
                    </button>
                </div>
                {/* <div className="mt-3 text-center font-normal">
                    <span className="mr-2">By signing up, you agree to our </span>
                    <a className="blue2 mt-5 hover:text-bluedark" href="/">
                        Terms of Use &amp; Privacy Policy.
                    </a>
                </div>
                <div className="mt-3 text-center font-normal">
                    <span className="mr-2">Already have an account?</span>
                    <a className="blue2 mt-5 hover:text-bluedark" href="#">
                        Sign In
                    </a>
                </div> */}
            </form>
        </div>
    )
}

export default LoginForm