import { Inter } from "next/font/google";

import Header from '../components/layout/Header'
import Banner from '../components/getting-started/Banner'
import IntegratingSteps from '../components/getting-started/IntegratingSteps'
import Steps from '../components/mylapay-products-apis/Steps'
import Support from '../components/getting-started/Support'
// import AccessSteps from '../components/getting-started/AccessSteps'
import ChooseProducts from '../components/getting-started/ChooseProducts'
import BannerBottom from '../components/getting-started/BannerBottom'
import ProductsTabs from '../components/getting-started/ProductsTabs'
import Footer from '../components/layout/Footer'

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <div className={`${inter.className}`}>
      <Header />
      <Banner />
      <Steps />

      <ProductsTabs />
      
      {/* <ChooseProducts /> */}
      {/* <IntegratingSteps /> */}
      {/* <AccessSteps /> */}
      {/* <BannerBottom /> */}
      <Support />
      <Footer />
    </div>
  )
}

export default Home