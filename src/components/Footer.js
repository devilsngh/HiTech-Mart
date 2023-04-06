import React from 'react'
import { footer, footerIcon } from '../data'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footer.map((foot) => {
          const { id, link, name } = foot
          return (
            <li key={id}>
              <a href={link} className="footer-link">
                {name}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="footer-icons">
        {footerIcon.map((foot) => {
          const { id, icon, url } = foot
          return (
            <li key={id}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; HiTecMart
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
