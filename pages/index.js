import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Intro from '../components/Intro/Intro'
import Navbar from '../components/Navbar/Navbar'
import OtherProjects from '../components/OtherProjects'
import Portfolio from '../components/Portfolio/Portfolio'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div id='parallax'>
      {/* <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat maxime iusto fuga, aliquid laboriosam? Alias laudantium vero distinctio neque, nam explicabo aut eveniet dignissimos, non quia optio ipsam quod?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat maxime iusto fuga, aliquid laboriosam? Alias laudantium vero distinctio neque, nam explicabo aut eveniet dignissimos, non quia optio ipsam quod?</p>
      <button className={styles.btn}>Check</button> */}

      <Intro />
      <About />
      <Portfolio />
      {/* <OtherProjects /> */}
    </div>
  )
}
  