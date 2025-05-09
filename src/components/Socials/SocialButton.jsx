import { Icon, Instagram } from 'lucide-react'
import React from 'react'

function SocialButton({name,link}) {
  return (
    <a href={link} className='social-btn' target='_blank'>
        
        {name==='instagram' ? 
        <Instagram className="social-btn-icon" color='black'/> :
        <i className={`devicon-${name}-plain`}/>}
    </a>
  )
}

export default SocialButton