import styles from '../../styles/OtherProjects.module.css'

const OtherProjects = () => {
  return ( 
    <div>
      <h3 className="sectionHeader">Other Noteworthy Projects</h3>
      <div className={styles.project_section}>
        <div className={styles.project_card}>
          <div>icons</div>
          <div>
            <h3 className={styles.title}>Building RIch accessible web applications</h3>
            <p className={styles.body}>A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.</p>
          </div>
          <div>
            <ul>
              <li>Vue</li>
              <li>chart.js</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>

        <div className={styles.project_card}>
          <div>icons</div>
          <div>
            <h3 className={styles.title}>Building RIch accessible web applications</h3>
            <p className={styles.body}>A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.</p>
          </div>
          <div>
            <ul>
              <li>Vue</li>
              <li>chart.js</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>

        <div className={styles.project_card}>
          <div>icons</div>
          <div>
            <h3 className={styles.title}>Building RIch accessible web applications</h3>
            <p className={styles.body}>A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.</p>
          </div>
          <div>
            <ul>
              <li>Vue</li>
              <li>chart.js</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
        {/* https://stagingaq.enyata.com/ */}
        {/* simple video player */}
        {/* vue image game */}
        {/* vue3 project */}
        {/* todo app */}
        {/* calculator */}
      </div>
      
    </div>
   );
}
 
export default OtherProjects;