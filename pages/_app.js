import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const {locale}=useRouter();
  return<Layout className={locale==='en'?'direction':''}>
 <Component {...pageProps} />
  </Layout>
 
}

export default MyApp
