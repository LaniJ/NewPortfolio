import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // add overflow-hidden
    document.body.className = "selection:bg-muted selection:text-bkg ";
  })
  return (
    <Layout>
      <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;700&display=swap" rel="stylesheet"></link>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
