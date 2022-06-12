import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <ul style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#EAEAEA'}} className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">
      <h1><b>CRUD</b></h1>
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to="/all_students">
      All students
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to="/add_students">
      Add student
    </Link>
  </li>
</ul>

  )
}

export default Header