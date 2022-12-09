import Router from 'next/router'
import Head from 'next/head'
import nProgress from 'nprogress'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <>  
          <Head>
              <title>Urban Residence Real Estate</title>
          </Head>
          <Navbar /> 
          <Component {...pageProps} />
    </>
  )
}

export default MyApp
