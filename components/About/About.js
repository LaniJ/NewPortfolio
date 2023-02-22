import styles from '../../styles/About.module.css'
import Skills from '../Skills/index'
import Image from 'next/image'
// import LaniPic from '../../assets/images/lanlan.png'
import LaniPic from '../../assets/images/cropped_lan.png'
// import skills from '../Skills/index'
// import arrow-right from ''
// import arrowRight from "../../assets/icons/arrow-right.svg";


const About = () => {
  return ( 
    <div className={styles.about} id="about">
      <div className={styles.textSection}>
        <h3 className="sectionHeader">About Me</h3>
        <p className={styles.text}>Hello! My name is Lani and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
        <p className={styles.text}>Hello! My name is Lani and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
        <Skills />
      </div>
      <div>
        <div className={styles.img__container}>
          <div className={styles.about__img}>

          </div>
        </div>
      </div>
      {/* <div className="profile__image">
        <Image
          src={LaniPic}
          alt="Lani's Pic" 
        /> */}
        {/* <Image
          src={LaniPic}
          alt="Lani's Pic" 
        /> */}
      {/* </div> */}
    </div>
   );
}
 
export default About;