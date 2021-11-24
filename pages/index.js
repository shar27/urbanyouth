import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from './components/Nav'
import Video from './components/Video'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Urban Youth</title>
        <meta name="description" content="Urban Youth is a new not-for-profit youth organisation" />
        <link rel="icon" href="/urban.jpg" />
      </Head>
<Nav/>
<Video/>
     </div>
  )
}
