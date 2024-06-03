import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Inter } from "next/font/google";
import Header from '../../components/layout/Header'
import Banner from '../../components/reset-password/Banner'
// import AccessSteps from '../components/login/AccessSteps'
// import LoginForm from '../components/login/LoginForm'
// import IntegratingSteps from '../components/getting-started/IntegratingSteps'
// import AccessSteps from '../components/getting-started/AccessSteps'
// import ChooseProducts from '../components/getting-started/ChooseProducts'
// import BannerBottom from '../components/getting-started/BannerBottom'
import Footer from '../../components/layout/Footer'

const inter = Inter({ subsets: ["latin"] });

function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/sandbox?api=API-Authentication');
    }
  }, [router]);

  return (
    <div className={`${inter.className}`}>
      <Header />
      {/* <AccessSteps /> */}
      <Banner />

      {/* <IntegratingSteps />
      <AccessSteps />
      <ChooseProducts />
      <BannerBottom /> */}
      <Footer />
    </div>
  )
}

export default LoginPage