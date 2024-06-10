import LoginForm from './LoginForm'
import Link from 'next/link'

function Banner() {
    return (
        <div className='bg-bggray'>
        <div className="wrapper md:grid grid-cols-2 items-center py-4 bg-bggray">
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl text-center md:text-left font-extrabold md:text-4xl leading-[40px] xxl:text-[58px] xxl:leading-[60px] text-black">
                Welcome to Mylapay!
                </h2>
                <p className="mt-8 text-center md:text-left text-lg font-light lg:w-[90%] text-black">
                Enter your login credentials and start using our sandbox environment to test our APIs.
                </p>

                <p className="my-4 text-center md:text-left text-lg font-light lg:w-[90%] text-black">
                For further information about our APIs, please check the <Link href="/developer-guides">Developer Guides</Link> page.
                </p>
            </div>
            <div>
                <LoginForm />
            </div>
        </div>
        </div>
    )
}

export default Banner