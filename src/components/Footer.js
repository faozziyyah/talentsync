import React from 'react'
import './footer.css'
import logo from '../../src/images/Frame 18.png'
import apple from '../../src/images/Mobile app store badge.png'
import andriod from '../../src/images/Mobile app store badge-1.png'
import linkedin from '../../src/images/Social icon.png'
import twitter from '../../src/images/Social icon-1.png'
import facebook from '../../src/images/Social icon-2.png'
import instagram from '../../src/images/Social icon-3.png'
import github from '../../src/images/Social icon-4.png'
import youtube from '../../src/images/Social icon-5.png'

const Footer = () => {
  return (
    <footer>

      <section className='footer-top'>

        <div className='about'>  

          <img src={logo} alt="" />

          <p style={{color: '#667085', fontWeight: '500'}}>ClearLink is your gateway to effortless, high- <br /> quality video conferencing. Join us in shaping <br /> the future of communication!</p>
        
        </div>

        <div className='link-container'>

          <div className='footlink'>

            <p>Product</p>

            <a href="http">Overview</a>
            <a href="http">Features</a>
            <a href="http">Solutions</a>
            <a href="http">Tutorials</a>
            <a href="http">Pricing</a>

          </div>

          <div className='footlink'>

            <p>Company</p>

            <a href="http">About us</a>
            <a href="http">Careers</a>
            <a href="http">Press</a>
            <a href="http">News</a>
            <a href="http">Contact</a>

          </div>

        </div>

        <div className='link-container'>

          <div className='footlink'>

            <p>Resources</p>

            <a href="http">Blog</a>
            <a href="http">Events</a>
            <a href="http">Help centre</a>
            <a href="http">Tutorials</a>
            <a href="http">Support</a>

          </div>

          <div className='footlink'>

            <p>Legal</p>

            <a href="http">Terms</a>
            <a href="http">Privacy</a>
            <a href="http">Cookies</a>
            <a href="http">Licenses</a>
            <a href="http">Contact</a>

          </div>

        </div>

        <div className='app'>
          <p style={{color: '#175cd3', fontSize: '15px', fontWeight: '500'}}>Get the app</p>
          <img src={apple} alt='' />
          <img src={andriod} alt='' style={{marginTop: '1em'}} />
        </div>

      </section>

      <section className='footer-bottom'>

        <div>

          <p style={{color: '#667085', fontWeight: '500', fontSize: '15px'}}>© 2023 ClearLink. All rights reserved.</p>

          <div className='icons'>

            <a href="http"> <img src={linkedin} alt='' /> </a>
            <a href="http"> <img src={twitter} alt='' /> </a>
            <a href="http"> <img src={facebook} alt='' /> </a>
            <a href="http"> <img src={instagram} alt='' /> </a>
            <a href="http"> <img src={github} alt='' /> </a>
            <a href="http"> <img src={youtube} alt='' /> </a>

          </div>

        </div>

      </section>

    </footer>
  )
}

export {Footer}