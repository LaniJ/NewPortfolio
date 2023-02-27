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

      <p className="text-lg max-w-full md:max-w-[53%]">I am a Front-end engineer who has spent the past three years reveling in the joy of converting UI designs to pixel-perfect applications. I'm bilingual, and I love learning new languages. So it was only inevitable that I'd eventually stumble on programming languages.</p>
    </div>
   );
}
 
export default Intro;