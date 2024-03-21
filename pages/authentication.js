import { Inter } from "next/font/google";

import Header from '../components/layout/Header'
import Benefits from '../components/authentication/Benefits'
import Support from '../components/authentication/Support'
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

function Authentications() {
    return (
        <div className={`${inter.className}`}>
            <Header />

            <div className='p-4 bg-bggray pb-0'>
                <div className='bg-[#fff] '>
                    <div className="wrapper xxl:mx-[-30px]">
                        <div className="mx-auto py-20 px-4 sm:px-0">
                            <div>
                                <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-4xl text-center mb-8">
                                    What is Mylapay Secure?
                                </h2>

                                <p className="mb-6 text-lg text-para mx-auto">
                                Mylapay 3-D Secure Authentication 2.3.1.1 powered by EMVCo empowers both cardholders and merchants with an additional layer of protection while mitigating fraudulent activity. It seamlessly redirects users to provide additional secured information to complete the transaction.
                                </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <Benefits />

            <Support />

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

export default Authentications