import styles from '../../styles/OtherProjects.module.css'
import Image from 'next/image'
import folderIcon from '../../assets/icons/folder-icon.svg'
import { projectList } from './data'


const OtherProjects = () => {
 
  return ( 
    <div className='mb-20 fade-up'>
      <h3 className="sectionHeader">Other Noteworthy Projects</h3>
      <div className={styles.project_section}>
        {projectList.map(({projectName, link, cardContent}, index) => (
          <div className={styles.project_card} key={index}>
            <div className={styles.project__card__icons}>
              <Image
                src={folderIcon}
                alt="folderIcon" 
              />
              <a href={link} target="_blank" rel="noopener noreferrer">
                <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" height="24" width="24" fill="none" stroke="#A8B2D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
            <div>
              <h3 className={styles.title}>{projectName}</h3>
              <p className={styles.body}>{cardContent}</p>
            </div>
          </div>
        ))}       
      </div>
    </div>
   );
}
 
export default OtherProjects;