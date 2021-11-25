import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from './components/Nav'
import Video from './components/Video'
import Header from './components/Header'
import Icons from './components/Icons'
import Headline from './components/Headline'
import BelowHeadline from './components/BelowHeadline'
import ResultsBanner from './components/ResultsBanner'
import SuccessStories from './components/SuccessStories'
import SuccessHead from './components/SuccessHead'
import DonateButton from './components/DonateButton'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Urban Youth</title>
        <meta name="description" content="Urban Youth is a new not-for-profit youth organisation" />
        <link rel="icon" href="/urban.jpg" />
      </Head>
      <Header/>
      <Icons/>
     <Nav/>
    <Video/>
    <Headline/>
    <BelowHeadline/>
    <ResultsBanner/>
    <SuccessHead/>
    <SuccessStories/>
    <DonateButton/>
    <Subscribe/>
    <Footer/>
     </div>
  )
}
