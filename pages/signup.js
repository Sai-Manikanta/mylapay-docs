import { Inter } from "next/font/google";
import Header from '../components/layout/Header'
import AccessSteps from '../components/signup/AccessSteps'
import Footer from '../components/layout/Footer'

const inter = Inter({ subsets: ["latin"] });

function SignupPage() {
  return (
    <div className={`${inter.className}`}>
      <Header />
      <AccessSteps />
      <Footer />
    </div>
  )
}

export default SignupPage