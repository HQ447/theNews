import React from 'react'
import LandingPageLayout from './pages/landing-pages/landingPageLayout'
import Latest from './pages/landing-pages/Latest'
import Entertainment from './pages/landing-pages/Entertainment'
import Sports from './pages/landing-pages/Sports'
import Pakistan from './pages/landing-pages/Pakistan'
import World from './pages/landing-pages/World'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import DashboardLayout from './pages/admin-panel/DashboardLayout'
import Analytics from './pages/admin-panel/Analytics'
import DetailedPage from './pages/landing-pages/DetailedPage'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPageLayout />} >
          <Route index element={<Latest />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/pakistan" element={<Pakistan />} />
          <Route path="/world" element={<World />} />
          <Route path='/news/:id' element={<DetailedPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardLayout />} >
          <Route index element={<Analytics />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App