import { Inter } from "next/font/google";

import Header from '../components/layout/Header'
import Benefits from '../components/authorization/Benefits'
// import Banner from '../components/authorization/Banner'
// import ProductsTabs from '../components/authorization/ProductsTabs'
// import Steps from '../components/authorization/Steps'

// import LoginForm from '../components/login/LoginForm'
// import IntegratingSteps from '../components/getting-started/IntegratingSteps'
// import AccessSteps from '../components/getting-started/AccessSteps'
// import ChooseProducts from '../components/getting-started/ChooseProducts'
// import BannerBottom from '../components/getting-started/BannerBottom'
import Footer from '../components/layout/Footer'

const inter = Inter({ subsets: ["latin"] });

function Authorization() {
    return (
        <div className={`${inter.className}`}>
            <Header />

            <div className='p-4 bg-bggray'>
                <div className='bg-[#fff] '>
                    <div className="wrapper xxl:mx-[-30px]">
                        <div className="max-w-4xl mx-auto py-20 px-4 sm:px-0">
                            <div className="mb-10 md:mb-14">
                                <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-4xl text-center mb-8 px-2">
                                    What is Mylapay Switch?
                                </h2>

                                <p className="mb-6 text-lg text-para max-w-4xl mx-auto px-2">
                                    Mylapay Switch empowers global aggregators, gateways, and banks with a robust and secure payment authorization solution. It seamlessly facilitates both online and offline transactions, ensuring compatibility with major card networks like Visa, Mastercard, and Rupay.
                                </p>


                                <p className="mb-6 text-lg text-para max-w-4xl mx-auto px-2">
                                    Embedded with comprehensive risk management tools, Mylapay Switch safeguards every transaction against fraud, while its intelligent algorithms optimize approval rates. This synergy of security and efficiency makes it the ideal choice for modernizing payment infrastructure.
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <Benefits />

            {/* <Banner /> */}

            {/* <ProductsTabs /> */}

            {/* <Steps /> */}



            {/* <IntegratingSteps />
      <AccessSteps />
      <ChooseProducts />
      <BannerBottom /> */}
            <Footer />
        </div>
    )
}

export default Authorization