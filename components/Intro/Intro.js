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
      <p className="text-lg max-w-full md:max-w-[53%]">I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered and user friendly products for the web.</p>
        
        {/* <Image
          sizes="(min-width: 500px) 480w, 650w, 800w, 1300w"
           srcset={`${heroXs} 480w, ${heroSm} 650w, ${heroMd} 800w, ${heroLg} 1300w`}
          className='absolute h-full w-full -z-20 object-cover object-center'
          src={heroImg}
          aria-hidden="true"
          alt="profile logo" 
        /> */}
    </div>
   );
}
 
export default Intro;