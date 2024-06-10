import { Inter } from "next/font/google";
import Header from '../components/layout/Header'
import ProductsTabs from '../components/api-reference/ProductsTabs'
import Support from '../components/common/Support'
import Footer from '../components/layout/Footer'

const inter = Inter({ subsets: ["latin"] });

function ApiReferencePage() {
    return (
        <div className={`${inter.className}`}>
            <Header />
            <ProductsTabs />
            <Support />
            <Footer />
        </div>
    )
}

export default ApiReferencePage