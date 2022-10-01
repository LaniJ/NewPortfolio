import styles from '../../styles/Intro.module.css'

const Intro = () => {
  return ( 
    <div className={styles.intro} id="intro">
      <p className={styles.pre}>Hi, My name is</p>
      <h1 className={styles.name}>Lani Oluwajuyitan</h1>
      <h1 className={`${styles.name} ${styles.role}`}>I build things for the web</h1>

      <p className={styles.description}>I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered and user friendly products for the web.</p>
    </div>
   );
}
 
export default Intro;