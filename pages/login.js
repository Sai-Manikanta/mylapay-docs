import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Inter } from "next/font/google";
import Header from '../components/layout/Header'
import Banner from '../components/login/Banner'
import Footer from '../components/layout/Footer'

const inter = Inter({ subsets: ["latin"] });

function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/product-management');
    }
  }, [router]);

  return (
    <div className={`${inter.className}`}>
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}

export default LoginPage