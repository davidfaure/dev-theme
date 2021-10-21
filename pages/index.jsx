import Head from 'next/head'

import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import Projects from '../components/Projects'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { metaData } from '../data'

export default function Home() {
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta property='og:title' content={metaData.title} />
        <meta name='description' content={metaData.description} />
        <meta property='og:description' content={metaData.description} />
        <meta property='og:image' content={metaData.ogImage} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <ToastContainer autoClose={false} /> */}
    </>
  )
}
