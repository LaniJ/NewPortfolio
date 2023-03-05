import styles from '../../styles/About.module.css'
import Skills from '../Skills/index'

const About = () => {
  return ( 
    <div className={`${styles.about} fade-up`} id="about">
      <div className={styles.textSection}>
        <h3 className="sectionHeader">About Me</h3>
        <p className={styles.text}>Hello! My name is Lani, an Architect turned software engineer, who  has spent the past three years reveling in the joy of converting UI designs to pixel-perfect applications.
        </p>
        <p className={styles.text}>I&apos;m bilingual, and I love learning new languages. My interest in programming languages piqued when I was searching for a new language to learn, and that&apos;s when I stumbled upon Python. Since then, I&apos;v been passionate about programming and continuously expanding my knowledge in the field.
        </p>
        <Skills />
      </div>
      <div>
        <div className={styles.img__container}>
          <div className={styles.about__img}>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default About;