import styles from '../../styles/Intro.module.css'
import heroImg from '../../assets/images/hero.jpg'
import heroXs from '../../assets/images/hero-xs.jpg'
import heroSm from '../../assets/images/hero-sm.jpg'
import heroMd from '../../assets/images/hero-md.jpg'
import heroLg from '../../assets/images/hero-lg.jpg'
import Image from 'next/image'
// import f from '../../assets/images/EnyataWebsite.png'


const Intro = () => {
  return ( 
    <div className={styles.intro} id="intro min-h-screen">
      <p className="text-lg text-accent mb-8">Hi, My name is</p>
      <h1 className={`${styles.name} md:text-lg`}>Lani Oluwajuyitan</h1>
      <h1 className={`${styles.name} ${styles.role}`}>I build things for the web</h1>

      <p className="text-lg max-w-full md:max-w-[53%] leading-[33px]">I am a frontend engineer who enjoys converting UI designs to pixel-perfect web applications. Coming from a background in Architecture and Interior design, I have a keen eye for the killer duo of <span className='text-accent'>functionality and aesthetics,</span> which is transferred to my work as a Front-end engineer and has made it easy to focus on user experience and ensuring that  applications have maximum accessibility.</p>
    </div>
   );
}
 
export default Intro;