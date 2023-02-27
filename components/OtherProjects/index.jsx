import styles from '../../styles/OtherProjects.module.css'
import Image from 'next/image'
import folderIcon from '../../assets/icons/folder-icon.svg'
import newTabIcon from '../../assets/icons/new-tab.svg'
import { projectList } from './data'


const OtherProjects = () => {
 
  return ( 
    <div>
      <h3 className="sectionHeader">Other Noteworthy Projects</h3>
      <div className={styles.project_section}>
          {projectList.map(({projectName, link, cardContent}) => (
            <div className={styles.project_card}>
              <div className={styles.project__card__icons}>
                <Image
                  src={folderIcon}
                  alt="folderIcon" 
                />
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={newTabIcon}
                    alt="newTabIcon" 
                  />
                </a>
              </div>
              <div>
                <h3 className={styles.title}>{projectName}</h3>
                <p className={styles.body}>{cardContent}</p>
              </div>
            </div>
          ))}
       
        {/* https://stagingaq.enyata.com/ */}
        {/* simple video player */}
        {/* vue image game */}
        {/* vue3 project */}
        
      </div>
      
    </div>
   );
}
 
export default OtherProjects;