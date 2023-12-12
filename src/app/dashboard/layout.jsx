"use client"
import React from 'react'
import Sidebar from '../ui/Sidebar/Sidebar'
import Navbar from '../ui/Navbar/Navbar'
import "./dashboard.scss"
import Aside from '../ui/Aside/Aside'
import Notifications from '../ui/Notifications/Notifications'

function layout({ children }) {
  return (
    <div className='dashboard'>
      <div>
        <Navbar />
      </div>
      <div className='section'>
        <div>
          <Sidebar />
        </div>
        <div className='children'>
          {children}
        </div>
        <div>
          <Aside />
          <Notifications />
        </div>
      </div>
    </div>
  )
}

export default layout