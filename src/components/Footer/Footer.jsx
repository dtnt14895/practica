import React from 'react'

function Footer() {
  return (
    <footer>
        <div className='footer-menu'>
          <img src={footerLogo} alt='sunnyside-logo' />

          <div className='footer-links'>
            <ul>
              <li>
                <a href='#' className='footer-link'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='footer-link'>
                  Services
                </a>
              </li>
              <li>
                <a href='#' className='footer-link'>
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-socials'>
            <ul>
              <li>
                <a href='facebook.com' className='footer-social-icons'>
                  <img src={facebook} alt='facebook' />
                </a>
              </li>
              <li>
                <a href='instagram.com' className='footer-social-icons'>
                  <img src={instagram} alt='instagram' />
                </a>
              </li>
              <li>
                <a href='twitter.com' className='footer-social-icons'>
                  <img src={twitter} alt='twitter' />
                </a>
              </li>
              <li>
                <a href='pinterest.com' className='footer-social-icons'>
                  <img src={pinterest} alt='pinterest' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default Footer