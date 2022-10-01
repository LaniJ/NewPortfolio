import styles from '../../styles/About.module.css'
import Skills from '../Skills/index'
// import skills from '../Skills/index'
// import arrow-right from ''
// import arrowRight from "../../assets/icons/arrow-right.svg";


const About = () => {
  return ( 
    <div className={styles.about}>
      <div className={styles.textSection}>
        <h3 className="sectionHeader">About Me</h3>
        <p className={styles.text}>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
        <p className={styles.text}>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>

        <Skills />
      </div>
      <div className="image">
        <h3>image</h3>
      </div>
    </div>
   );
}
 
export default About;