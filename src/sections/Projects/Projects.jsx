import React from 'react'
import styles from './ProjectStyles.module.css';
import eren from '../../assets/eren.png'
import passwordGenerator from '../../assets/passwordGenerator.png';
import todo from '../../assets/Todo.png'
import weather from '../../assets/weather.png'
import ProjectCard from '../../common/ProjectCard';

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={eren}
            link="https://github.com/justanayush/Attack-On-Titan---Quiz-"
            h3='AOT Quiz'
            p='Quiz App'
            
            />
        <ProjectCard 
            src={passwordGenerator}
            link="https://github.com/justanayush/passwordGenerator"
            h3='Password Generator'
            p='React Hooks Project'
            
            />
            
            <ProjectCard 
            src={todo}
            link="https://github.com/justanayush/Todo-App"
            h3='Todo App'
            p='CRUD App'
            
            />
            
            <ProjectCard 
            src={weather}
            link="https://github.com/justanayush/Weatherrr"
            h3='Weather App'
            p='OpenWeatherMap API App'
            
            />
            
        </div>
    </section>
  );
}

export default Projects