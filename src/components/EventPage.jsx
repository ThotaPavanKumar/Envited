import React from 'react'
import "./EventPage.css"

export const EventPage = () => {
  return (
   <div className='EventContainer'>
        <div className='leftEvent'>
            <div className='content'>
                <span className='birthday'>Birthday Bash</span>
                <br />
                <span className='hosted'>Hosted by Elysia</span>
            </div>
            <div className='calendarEvent'>
                <div className='imageShadow'>
                    <img src="calendar.png" alt="calendar"/>
                </div>
                <div className='arrowImage'>
                    <div className='timeline'>
                        <span className='date'>18 August 6:00PM</span>
                        <br />
                        <span>to</span>
                        <span className='date'> 19 August 1:00PM </span>
                        <span>UTC +10</span>
                    </div>
                    <div className='arrow'>
                        <img src="arrow.png" alt="location"/>
                    </div>
                </div>
            </div>
            <div className='calendarEvent space'>
                <div className='imageShadow'>
                    <img src="location.png" alt="location"/>
                </div>
                <div className='arrowImage'>
                    <div className='timeline'>
                        <span className='date'>Street name</span>
                        <br />
                        <span>Suburb, State, Postcode</span>
                    </div>
                    <div className='arrow'>
                        <img src="arrow.png" alt="location"/>
                    </div>
                </div>
            </div>
           
        </div>
        <div className='rightEvent'>
            <img src="eventimage.png" alt="event page"/>
        </div>
   </div>
  )
}

