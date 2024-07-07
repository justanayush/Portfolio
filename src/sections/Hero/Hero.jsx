import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

import resume from '../../assets/resume.pdf';
import { useTheme } from '../../common/ThemeContext';

const Hero = () => {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


  return (
    <section id='hero' className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Ayush's Profile picture" />
        <img className={styles.colorMode} src={themeIcon} alt="theme-mode-icon" onClick={toggleTheme} />
    </div>
    <div className={styles.info}>
    <h1 className='name'>Ayush
        <br />
        Vishwakarma
    </h1>
    <h2>Frontend Developer</h2>
    <span>
        <a href="https:www.github.com/justanayush">
        <img src={githubIcon} alt="github-icon" /></a>
        <a href="https:www.linkedin.com/in/justanayush">
        <img src={linkedinIcon} alt="linkedin-icon" /></a>
    </span>
    <p className={styles.description}>
        With a passion for developing modern React web apps for commercial businesses.
    </p>
    <a href={resume} download>
    <button className='hover'>
        Resume
    </button>
    </a>
    </div>
    </section>
  )
}

export default Hero