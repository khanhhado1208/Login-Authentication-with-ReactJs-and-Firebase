import React from 'react'
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
    <nav className="navbar bg-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="Hoist 1 Control">Hoist 1 Control</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Hoist 2 Control">Hoist 2 Control </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="History records">History records</a>
      </li>
    </ul>
</nav>
</div>


  )
}

export default Sidebar