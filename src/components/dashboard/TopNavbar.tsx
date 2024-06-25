import React from 'react'

const TopNavbar: React.FC = () => {
  return (
    <nav className='top-navbar'>
      <img src="/images/logo.svg" alt="logo" className="logo" />
      <div className='search-bar'>
        <input type='text' placeholder='Search for anything' />
        <button>
          <img src="/icons/search.svg" alt="search" />
        </button>
      </div>
      <div className='user-info'>
        <span className='docs'>Docs</span>
        <img src="/icons/alert.svg" alt="alert" className="alert" />
        <img src='/images/avatar.svg' alt='User Avatar' className='user-avatar' />
        <div className='user-dropdown'>
          <span className='user'>Samuel</span>
          <img src='/icons/dropdown.svg' alt='Dropdown' className='dropdown'/>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar