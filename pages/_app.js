import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Router from 'next/router';
import Head from 'next/head';
import Layout from '';
import { NProgress } from 'nprogress';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

