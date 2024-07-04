import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/layout/Header'
import Banner from '../../components/reset-password/Banner'
import Footer from '../../components/layout/Footer'

function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/sandbox?api=3DSS-v2.2');
    }
  }, [router]);

  return (
    <div>
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}

export default LoginPage