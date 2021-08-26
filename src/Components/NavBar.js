import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/UserList">Users</Link>
          </li>
        </ul>
        {props.user ? (<><span>{props.user}</span><Link className="nav-link mr-2" to="/Login">Logout</Link></>) : <Link className="nav-link mr-2" to="/Login">Login</Link>}
      </div>
    </nav>
  )
}
export default NavBar
