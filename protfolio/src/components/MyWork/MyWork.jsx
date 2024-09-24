import React from 'react'
import './MyWork.css'
import theme from '../../assets/theme_pattern.svg'


const MyWork = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme} alt="" />
        </div>

        <div className="mywork-container">
            
        </div>
      
    </div>
  )
}

export default MyWork
