// "use client";

import { Inter } from "next/font/google";
import Header from '../components/layout/Header'
import Banner from '../components/signup/Banner'
import AccessSteps from '../components/signup/AccessSteps'
// import LoginForm from '../components/login/LoginForm'
// import IntegratingSteps from '../components/getting-started/IntegratingSteps'
// import AccessSteps from '../components/getting-started/AccessSteps'
// import ChooseProducts from '../components/getting-started/ChooseProducts'
// import BannerBottom from '../components/getting-started/BannerBottom'
import Footer from '../components/layout/Footer'

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <div className={`${inter.className}`}>
      <Header />
      <AccessSteps />
      {/* <Banner /> */}
        
      {/* <IntegratingSteps />
      <AccessSteps />
      <ChooseProducts />
      <BannerBottom /> */}
      <Footer />
    </div>
  )
}

export default Home