import { Inter } from "next/font/google";
import Header from '../components/layout/Header'
import Banner from '../components/getting-started/Banner'
import Steps from '../components/getting-started/Steps'
import Support from '../components/common/Support'
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
      <Support />
      <Footer />
    </div>
  )
}

export default Home