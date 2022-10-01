import styles from '../../styles/Portfolio.module.css'
// import EnyataWebsite from '../../assets/images/EnyataWebsite.png'
import Link from 'next/link';

const Portfolio = () => {
  return ( 
    <div className={styles.portfolio}>
      <h3 className="sectionHeader">Portfolio</h3>
      <p className={styles.text}>Some projects I have worked on</p>
      
      <div className={styles.project}>
        <div>
          <img src='/images/EnyataWebsite.png' alt=""/>
        </div>
        <div className={styles.info_one}>
          <h3>Enyata Website</h3>
          <div className={styles['project-box']}>
            <p className={styles['project-info']}><strong>Enyata</strong> - In a world fueled by innovation, Enyata makes it easy to transform ideas to efficient software solutions for global impact.</p>
          </div>
          <Link href="https://google.com"><a target="_blank">VIEW PROJECT</a></Link>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.info_two}>
          <h3>Kafene Website</h3>
          <div className={styles['project-box']}>
            <p className={styles['project-info']}><strong>Kafene</strong> - In a world fueled by innovation, Enyata makes it easy to transform ideas to efficient software solutions for global impact.</p>
          </div>
          <Link href="https://kafene.com/"><a target="_blank">VIEW PROJECT</a></Link>
        </div>
        <div>
          <img className={styles.imageFlipped} src='/images/EnyataWebsite.png' alt=""/>
        </div>
      </div>

      <div className={styles.project}>
        <div>
          <img src='/images/EnyataWebsite.png' alt=""/>
        </div>
        <div className={styles.info_one}>
          <h3>Enyata Website</h3>
          <div className={styles['project-box']}>
            <p className={styles['project-info']}><strong>Enyata</strong> - In a world fueled by innovation, Enyata makes it easy to transform ideas to efficient software solutions for global impact.</p>
          </div>
          <Link href="https://www.enyata.com/"><a target="_blank">VIEW PROJECT</a></Link>
        </div>
      </div>
    </div>
   );
}
 
export default Portfolio;