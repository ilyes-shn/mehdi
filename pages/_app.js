import '../styles/globals.css'
import Head from 'next/head'
import Splash from '../components/Splash'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
const [load, setLoad] = useState(true)

setTimeout(() => {
  setLoad(false)
},2000)

  return (
    <>
    <Head>
      <title>Konfigg</title>
      <link rel="icon" href="/favicon.svg"  type="image/svg" /> 
    </Head>
    {
      load ? <Splash /> : <Component {...pageProps}/>
    }
    
    </>
  )}

export default MyApp
