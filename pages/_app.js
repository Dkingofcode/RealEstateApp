import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Router from 'next/router';
import Head from 'next/head';
import Layout from '';
import { NProgress } from 'nprogress';
import Layout from '../components/Layout';
import Link from 'next/link';




export default function App({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false })
  
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  })

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  })
  
  return(
    <> 
     <Head>
      <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax" crossOrigin='anonymous' referrerPolicy="no-referrer"  /> 
     </Head>
     <ChakraProvider>
      <Layout>     
   <Component {...pageProps} />
        </Layout>   
      </ChakraProvider> 
    </>
  )
}

