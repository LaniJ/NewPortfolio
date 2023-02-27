import styles from '../../styles/Portfolio.module.css'
import Enyata from '../../assets/images/enyata.png'
import Kafene from '../../assets/images/kafene3.png'
import Link from 'next/link';
import Image from 'next/image'

const Portfolio = () => {
  return ( 
    <div className={styles.portfolio} id="portfolio">
      <h3 className="sectionHeader">Portfolio</h3>
      <p className="body__text xs:mb-5 lg:mb-20">Some projects I have worked on <span className={styles.small__screen}>:</span></p>
      
      <div className={styles.project}>
        <div className={`${styles.project__image} ${styles.large__screen}`}>
          <Image
            src={Enyata}
            alt="Enyata" 
          />
        </div>
        <div className={styles.info_one}>
          <h3 className='text-lg font-bold'>Enyata Website</h3>
          <div className={styles['project-box']}>
            <p className={styles['project-info']}><strong>Enyata</strong> - In a world fueled by innovation, Enyata makes it easy to transform ideas to efficient software solutions for global impact.</p>
            <div className={`${styles.project__image} ${styles.small__screen}`}>
              <Image
                src={Enyata}
                alt="Enyata" 
              />
            </div>
            <Link href="https://enyata.com/"><a target="_blank" className={`${styles['project-link']} ${styles.small__screen}`}>VIEW PROJECT</a></Link>
          </div>
          <Link href="https://enyata.com/"><a target="_blank" className={`${styles['project-link']} ${styles.large__screen}`}>VIEW PROJECT</a></Link>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.info_two}>
          <h3 className='text-lg font-bold'>Kafene Website</h3>
          <div className={`${styles['project-box']} ${styles.boxFlipped}` }>
            <p className={styles['project-info']}><strong>Kafene</strong> - In a world fueled by innovation, Enyata makes it easy to transform ideas to efficient software solutions for global impact.</p>
            <div className={`${styles.project__image} ${styles.imageFlipped} ${styles.kafene} ${styles.small__screen}`}></div>
            <Link href="https://kafene.com/"><a target="_blank" className={`${styles['project-link']} ${styles.small__screen}`}>VIEW PROJECT</a></Link>
          </div>
          <Link href="https://kafene.com/"><a target="_blank" className={`${styles['project-link']} ${styles.large__screen}`}>VIEW PROJECT</a></Link>
        </div>
        <div className={`${styles.project__image} ${styles.imageFlipped} ${styles.kafene} ${styles.large__screen}`}></div>
      </div>

      <div className={styles.project}>
        <div className={`${styles.project__image} ${styles.large__screen} ${styles.volley}`}>
        </div>
        <div className={styles.info_one}>
          <h3 className='text-lg font-bold'>Volley</h3>
          <div className={styles['project-box']}>
            <p className={styles['project-info']}><strong>Volley</strong> - In a world fueled by innovation, Volley makes it easy to transform ideas to efficient software solutions for global impact.</p>
            <div className={`${styles.project__image} ${styles.small__screen} ${styles.volley}`}> </div>
            <Link href="https://volley.com/"><a target="_blank" className={`${styles['project-link']} ${styles.small__screen}`}>VIEW PROJECT</a></Link>
          </div>
          <Link href="https://volley.com/"><a target="_blank" className={`${styles['project-link']} ${styles.large__screen}`}>VIEW PROJECT</a></Link>
        </div>
      </div>
    </div>
   );
}
 
export default Portfolio;