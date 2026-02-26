import React from 'react'
import { Link } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <h1>Welcome to fetch API</h1>
      <nav>
        <Link style={{fontSize:'30px', color:'red', marginLeft:'200px'}} to='/login'>Login</Link>
        <Link style={{fontSize:'30px', color:'red', marginLeft:'250px'}} to='/register'>Register</Link>
      </nav>
    </div>
  )
}

export default MainLayout