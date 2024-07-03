import ForgotPasswordForm from './ForgotPasswordForm'

function Banner() {
    return (
        <div className='bg-bggray'>
        <div className="wrapper md:grid grid-cols-2 items-center py-4 bg-bggray">
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl text-center md:text-left font-extrabold md:text-3xl leading-[40px] md:leading-[45px] xxl:text-3xl xxl:leading-[50px] text-black">
                Mention your registered user email address to receive the password reset link
                </h2>
            </div>
            <div>
                <ForgotPasswordForm />
            </div>
        </div>
        </div>
    )
}

export default Banner