import Header from '../components/layout/Header'
import Banner from '../components/getting-started/Banner'
import Steps from '../components/getting-started/Steps'
import Support from '../components/common/Support'
import ProductsTabs from '../components/getting-started/ProductsTabs'
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <div>
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