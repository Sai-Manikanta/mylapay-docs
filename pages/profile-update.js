import { Inter } from "next/font/google";
import Header from '../components/layout/Header'
import ProfileUpdate from '../components/profile-update/ProfileUpdate'
import Footer from '../components/layout/Footer'

const inter = Inter({ subsets: ["latin"] });

function SignupPage() {
  return (
    <div className={`${inter.className}`}>
      <Header />
      <ProfileUpdate />
      <Footer />
    </div>
  )
}

export default SignupPage