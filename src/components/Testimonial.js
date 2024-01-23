import React from 'react'
import './testimonial.css';
import image from '../images/Contents.png'
import shopify from '../../src/images/Shopify.com svg.png'
import avatar from '../../src/images/Avatar.png'
import stars from '../../src/images/Stars.svg'
import arrow from '../../src/images/_Testiomonial carousel arrow.png'
import arrow1 from '../../src/images/_Testiomonial carousel arrow-1.png'

const Testimonial = () => {
  return (
    <div className='testimonial'>

        <aside>

            <img id='shopify' src={shopify} alt='' style={{width: '12%', marginTop: '2em'}} />
 
            <img id='stars' src={stars} alt='' style={{width: '12%', marginTop: '2em'}} />

            <h1 style={{fontWeight: '600', fontSize: '30px'}}>ClearLink has upgraded our <br /> remote meetings. High-quality <br /> 
                video, screen sharing, and <br /> top-notch security make it <br /> essential for our team.
            </h1>

            <div className='testimony'>

                <div className='testimony-reviews'>

                  <img src={avatar} alt="" style={{width: '18%'}} />

                  <div>
                    <p style={{fontWeight: 'bold'}}> Sarah Thompson </p>
                    <p style={{marginTop: '-1em', color: '#667085'}}>Project Manager, Shopify</p>
                  </div>

                </div>

                <div className='testimony-buttons'>
                    <img src={arrow} alt="" />
                    <img src={arrow1} alt="" />
                </div>
                
            </div>

        </aside>

        <img src={image} alt='' style={{width: '35%', margin: 'auto'}} />

    </div>
  )
}

export {Testimonial}