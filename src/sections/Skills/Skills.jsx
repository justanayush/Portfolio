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
            skill="Python"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Numpy"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Pandas"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Matplotlib"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Seaborn"
            />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList 
            src={checkMarkIcon}
            skill="Pytorch"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Tensorflow"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="Keras"
            />
        </div>
        <hr />
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
            skill="Tailwind CSS"
            />
             <SkillList 
            src={checkMarkIcon}
            skill="React.js"
            />
        </div>
    </section>
  )
}

export default Skills