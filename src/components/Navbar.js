import React from 'react'
import logo from '/Users/devinder/Desktop/himart/src/images/20221008_194021_0000.png'
import { pages } from '../data'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pages.map((page) => {
            const { id, href, text } = page
            return (
              <li key={id}>
                <a href={href} className="nav-link">
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
        <div class="search">
          <form action="#">
            <input type="text" placeholder=" Search" name="search" />
            <button>
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
