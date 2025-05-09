import React from 'react'
import './styles/socials.css'
import PresentationTitle from '../Presentation/PresentationTitle'
import SocialButton from './SocialButton'
function Socials() {
  return (
    <div className='socials'>
        <div className='title'>
            <PresentationTitle text='Réseaux sociaux'/>
        </div>
        <div className='socials-buttons'>
            <SocialButton name='linkedin' link='https://www.linkedin.com/in/killian-mathias-973821316/'/>
            <SocialButton name='twitter' link='https://x.com/killian_mths?s=21'/>
            <SocialButton name='instagram' link='#'/>
            <SocialButton name='github' link='https://github.com/killianmathias'/>
        </div>
    </div>
  )
}

export default Socials