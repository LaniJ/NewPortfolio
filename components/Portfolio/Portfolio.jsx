import styles from '../../styles/Portfolio.module.css'
import Enyata from '../../assets/images/enyata.png'
import Link from 'next/link';
import Image from 'next/image'

const Portfolio = () => {
  return ( 
    <div className={styles.portfolio} id="portfolio">
      <h3 className="sectionHeader">Portfolio</h3>
      <p className="body__text xs:mb-5 lg:mb-20">Some projects I have worked on <span className={styles.small__screen}>:</span></p>
      
      <div className={styles.project}>
        <div className={`${styles.project__image} ${styles.large__screen} ${styles.enyata}`}>
        </div>
        <div className={styles.info_one}>
          <h3 className='text-lg font-bold'>Enyata Website</h3>
          <div className={styles['project-box']}>
            <p className={styles['project-info']}>In a world fueled by innovation, Enyata makes it easy to transform ideas to efficient software solutions for global impact. Enyata is a technology company providing engineering-as-a-service solutions at scale to organizations across multiple industries.
            </p>
            <div className={`${styles.project__image} ${styles.small__screen}`}>
              <Image
                src={Enyata}
                alt="Enyata" 
              />
            </div>
            <Link href="https://enyata.com/"><a target="_blank" rel="noreferrer" className={`${styles['project-link']} ${styles.small__screen}`}>VIEW PROJECT</a></Link>
          </div>
          <Link href="https://enyata.com/"><a target="_blank" rel="noreferrer" className={`${styles['project-link']} ${styles.large__screen}`}>VIEW PROJECT</a></Link>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.info_two}>
          <h3 className='text-lg font-bold'>Kafene</h3>
          <div className={`${styles['project-box']} ${styles.boxFlipped}` }>
            <p className={styles['project-info']}>Lease-to-own platform that helps customers make quick and easy purchases. They can buy products now, and pay by instalments.</p>
            <div className={`${styles.project__image} ${styles.imageFlipped} ${styles.kafene} ${styles.small__screen}`}></div>
            <Link href="https://kafene.com/"><a target="_blank" rel="noreferrer" className={`${styles['project-link']} ${styles.small__screen}`}>VIEW PROJECT</a></Link>
          </div>
          <Link href="https://kafene.com/"><a target="_blank" rel="noreferrer" className={`${styles['project-link']} ${styles.large__screen}`}>VIEW PROJECT</a></Link>
        </div>
        <div className={`${styles.project__image} ${styles.imageFlipped} ${styles.kafene} ${styles.large__screen} `}></div>
      </div>
      <div className={styles.project}>
        <div className={`${styles.project__image} ${styles.large__screen} ${styles.volley}`}>
        </div>
        <div className={styles.info_one}>
          <h3 className='text-lg font-bold'>Volley</h3>
          <div className={styles['project-box']}>
            <p className={styles['project-info']}>Volley is a research solution which is aimed at helping B2B companies connect with  their prospective clients. Volley helps companies stand out from the crowd and convert more leads using research, personalization, intent signals and data.</p>
            <div className={`${styles.project__image} ${styles.small__screen} ${styles.volley}`}> </div>
            <Link href="https://volley.com/"><a target="_blank" rel="noreferrer" className={`${styles['project-link']} ${styles.small__screen}`}>VIEW PROJECT</a></Link>
          </div>
          <Link href="https://volley.com/"><a target="_blank" rel="noreferrer" className={`${styles['project-link']} ${styles.large__screen}`}>VIEW PROJECT</a></Link>
        </div>
      </div>
      {/* [@media(hover:hover)]:grayscale placeholder:hover:grayscale-0 */}
    </div>
   );
}
 
export default Portfolio;