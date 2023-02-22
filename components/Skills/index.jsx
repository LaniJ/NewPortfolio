import arrowRight from '../../assets/icons/arrow-right.svg'
import styles from '../../styles/Skills.module.css'
import Image from 'next/image'

import { skills } from "./data.js";

const Skills = () => {
  return ( 
    <ul className={styles["skill-group"]}>

      {skills.map(
        (skill, index) => (
          <li className={styles.skill}  key={index}>
            <Image
              src={arrowRight}
              alt="arrow right icon" 
            />
            <p className="skill">{skill}</p>
          </li>
        )
      )}
    </ul>
  );
}
 
export default Skills;