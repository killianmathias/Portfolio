import React from 'react'
import './styles/about.css'
import source from '../../assets/me.jpg'
import AboutHeader from './AboutHeader'
function About() {
  return (
    <div className='about'>
        <AboutHeader text='À propos de moi'/>
        <div className='about-content'>
            <p>Je m'appelle Killian Mathias, étudiant en L2 CMI Informatique à l'Université de Marie et Louis Pasteur de Besançon. Passionné d'informatique, j'adore me plonger dans des projets toujours plus fascinants les uns que les autres. </p>
            <img src={source} className='about-image'/>
        </div>
        <AboutHeader text='Un peu plus sur moi'/>
        <div className='about-more'>
          <p>Je m'appelle Killian Mathias, étudiant en L2 CMI Informatique à l'Université de Marie et Louis Pasteur de Besançon. Passionné d'informatique, j'adore me plonger dans des projets toujours plus fascinants les uns que les autres. </p>
        </div>
    </div>
  )
}

export default About