import React from 'react'
import "./LandingPage.css"

export const LandingPage = () => {
  return (
    <div className='Container'>
         <div className='leftContainer'>
            <img className='leftImage' src="image 1.jpg" alt="landingPage"/>
         </div>
         <div className='rightContainer'>
            <div className='text'>
              <span className='heading'>Imagine if</span>
              <br />
              <span className='subHeading'>Snapchat</span>
              <br />
              <span className='heading'>had events.</span>
            </div>
            <div className='paragraph text'>
              Easily host and share events with your friends <br /> across any social media.
            </div>
            <div className='button'> <img className='rightImage' src="createMyEvent.png" alt="createmyevent"/></div>
         </div>
    </div>
  )
}

