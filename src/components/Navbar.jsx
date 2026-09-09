import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  let navigate = useNavigate()
  return (
    <header>
        <h1>DoctorApp</h1>
        <div>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/addnewdoctor')}>Add doctor</button>
        </div>
    </header>
  )
}

export default Navbar