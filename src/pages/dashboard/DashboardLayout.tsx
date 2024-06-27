import React, { useState } from 'react'
import TopNavbar from '../../components/dashboard/TopNavbar'
import SideBar from '../../components/dashboard/SideBar'
import '../../styles/Dashboard.scss'
import { Outlet } from 'react-router-dom';

interface Props { }

function DashboardLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='dashboard-layout'>
      <TopNavbar />
      <div className='dashboard-container'>
        <SideBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <div className='dashboard'>
          <div className='dashboard-main'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout