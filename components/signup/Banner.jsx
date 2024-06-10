import SignupForm from './SignupForm'

function Banner() {
    return (
        <div className='bg-bggray'>
            <div className="wrapper md:grid grid-cols-2 items-center py-4 bg-bggray">
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl text-center md:text-left font-extrabold md:text-4xl leading-[40px] xxl:text-[58px] xxl:leading-[60px] text-black">
                        Create your<br /> Mylapay  account,<br /> its easy!
                    </h2>
                    <p className="mt-8 text-center md:text-left text-lg font-light lg:w-[90%] text-black">
                        After completing registration, you will be able to test transactions.
                    </p>
                    <p className="my-4 text-center md:text-left text-lg font-light lg:w-[90%] text-black">
                        Your information will not be disclosed to third parties.
                    </p>
                </div>
                <div>
                    <SignupForm />
                </div>
            </div>
        </div>
    )
}

export default Banner