import React from 'react'
import TopNavbar from '../components/dashboard/TopNavbar'
import '../styles/Dashboard.scss'

function DashboardLayout() {
  return (
    <div className='dashboard-layout'>
      <TopNavbar/>
      <div>
        <div>
          {/* User's Table */}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout