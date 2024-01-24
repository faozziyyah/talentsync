import React, { useState } from 'react'
import logo from '../../src/images/Frame 18.png'
import avatar from '../../src/images/Avatar group.png'
import stars from '../../src/images/Stars.svg'
import image from '../../src/images/Frame 25.png'
import image1 from '../../src/images/Frame 10.png'
import arrow from '../../src/images/chevron-down.png'
import close from '../../src/images/Frame.png'
import hamburger from '../../src/images/hamdark.png'

const Header = () => {
  
  const [nav, setNav] = useState(false);

  return (

    <header className="App-header">

        <nav>

          <img src={logo} alt="" id='navlogo' />

          <div className="navbar">

            <a href="http">Products <img src={arrow} alt="" /> </a>
            <a href="http">Solutions <img src={arrow} alt="" /></a>
            <a href="http">Resources <img src={arrow} alt="" /></a>
            <a href="http">Pricing</a>

          </div>

          <div className="actions">

            <button id='btn1'>Talk to sales</button>
            <button id='btn2'>Sign up for free</button>

          </div>

          <div onClick={() => setNav(!nav)} className="toggler">

            {nav ? <img src={close} alt='logo' width='50' height='50'/> : 
              <img src={hamburger} alt='logo' width='30' height='30'/>
            }
          
          </div>

        </nav>

      {nav && (

        <div className="mobilenav">

            <div className='mobilebar'>

              <a href="http" onClick={() => setNav(!nav)}>Products <img src={arrow} alt="" /> </a>
              <a href="http">Solutions <img src={arrow} alt="" /></a>
              <a href="http">Resources <img src={arrow} alt="" /></a>
              <a href="http">Pricing</a>

            </div>

            <div className="actions1">
        
              <button id='btn1'>Talk to sales</button>
              <button id='btn2'>Sign up for free</button>
        
            </div>

        </div>

      )}

        <section className='hero'>

          <aside>

            <h1>Uniting the world, <br /> one video call at a time</h1>
            <p>Experience the future of communication with ClearLink – <br /> where crystal-clear video conferencing meets <br /> unparalleled simplicity.</p>    

            <div className="header-actions">

              <button id='btn3'>Start your free trial</button>
              <button id='btn4'> <img src={image1} alt="" /> Discover AI assistant</button>

            </div>

            <div className='reviews'>

              <img src={avatar} alt="" />

              <div>
                <span style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%'}}> <img src={stars} alt="" /> 5.0</span>
                <p style={{marginTop: '5px'}}>from 3,000+ reviews</p>
              </div>

            </div>

          </aside>

          <img src={image} alt="" />

        </section>

    </header>

  )
}

export {Header}