import arrowRight from '../../assets/icons/arrow-right.svg'
import styles from '../../styles/Skills.module.css'

import { skills } from "./data.js";

const Skills = () => {
  return ( 
    <div className={styles["skill-group"]}>

      {skills.map(
        (skill, index) => (
          <div className={styles.skill}  key={index}>
            {/* <img src={arrowRight} alt="arrow right icon"/> */}
            <p className="skill">{skill}</p>
          </div>
        )
      )}
    </div>
  );
}
 
export default Skills;