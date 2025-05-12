import React from 'react'
import './styles/about.css'
import source from '../../assets/me.jpg'
import AboutHeader from './AboutHeader'
import { useLanguage } from '../../contexts/LanguageContext'
function About() {
  const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue
  const translations = language === "fr" ? require("../../locales/fr").default : require("../../locales/en").default;
  return (
    <div className='about'>
      <div className='about-all'>
          <div className='about-content'>
            <AboutHeader text={translations.aboutFirstTitle}/>
              <p>{translations.aboutFirstText}</p>
              <AboutHeader text={translations.aboutSecondTitle}/>
              <p>{translations.aboutSecondText}</p>
              
          </div>
          <img src={source} className='about-image'/>
        </div>
        <AboutHeader text={translations.competences}/>
        <div className='competences'>
          <div className='competences-web sub'>
            <h2>{translations.web}</h2>
            <ul>
              <li><i class="devicon-html5-plain colored"></i><p>HTML</p></li>
              <li><i class="devicon-css3-plain colored"></i><p>CSS</p></li>
              <li><i class="devicon-javascript-plain colored"></i><p>JavaScript</p></li>
              <li><i class="devicon-php-plain colored"></i><p>PHP</p></li>
              <li><i class="devicon-mysql-plain colored"></i><p>MySQL</p></li>
              <li><i class="devicon-react-plain colored"></i><p>React JS</p></li>
            </ul>
          </div>
          <div className='programmation sub'>
            <h2>{translations.prog}</h2>
            <ul>
              <li><i class="devicon-java-plain colored"></i><p>Java</p></li>
              <li><i class="devicon-c-plain colored"></i><p>C</p></li>
              <li><i class="devicon-cplusplus-plain colored"></i><p>C++</p></li>
              <li><i class="devicon-python-plain colored"></i><p>Python</p></li>
            </ul>
          </div>
          <div className='others sub'>
            <h2>{translations.other}</h2>
            <ul>
              <li><i class="devicon-swift-plain colored"></i><p>Swift</p></li>
              <li><i class="devicon-git-plain colored"></i><p>Git</p></li>
              <li><i class="devicon-photoshop-plain colored"></i><p>Photoshop</p></li>
              <li><i class="devicon-premierepro-plain colored"></i><p>Premiere Pro</p></li>
              <li><i class="devicon-latex-plain colored"></i><p>LaTex</p></li>
              <li><i class="devicon-wordpress-plain colored"></i><p>WordPress</p></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default About