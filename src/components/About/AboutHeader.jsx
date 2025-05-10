import React from 'react'
import PresentationTitle from '../Presentation/PresentationTitle'

function AboutHeader({text}) {
  return (
    <div className='aboutHeader'>
        <PresentationTitle text={text}/>
    </div>
  )
}

export default AboutHeader