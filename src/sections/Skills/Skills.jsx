import React from 'react'
import styles from './SkillsStyles.module.css'; 
import SkillList from '../../common/SkillList';
import checkMarkDark from '../../assets/checkmark-dark.svg'
import checkMarkLight from '../../assets/checkmark-light.svg'
import { useTheme } from '../../common/ThemeContext';
const Skills = () => {
  const { theme, toggleTheme } = useTheme();
  const checkMarkIcon = theme === 'light' ?  checkMarkLight: checkMarkDark;
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList 
            src={checkMarkIcon}
            skill="HTML"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="CSS"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Javascript"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Typescript"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Node.js"
            />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList 
            src={checkMarkIcon}
            skill="React.js"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Angular.js"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Vue.js"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Tailwind CSS"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Node.js"
            />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList 
            src={checkMarkIcon}
            skill="Redux"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Webpack"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Git"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Jest"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Bootstrap"
            />
        </div>
    </section>
  )
}

export default Skills