import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { CreateEvent } from '../components/createEvent'
import { EventPage } from '../components/EventPage'
import {LandingPage} from "../components/LandingPage"


export const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/form" element={<CreateEvent />} />
      </Routes>
    </div>
  )
}

