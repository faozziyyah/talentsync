import React from 'react'
import './content.css';
import shopify from '../../src/images/Shopify.com svg.png'
import coinbase from '../../src/images/Coinbase svg.png'
import dropbox from '../../src/images/Dropbox svg.png'
import intercom from '../../src/images/Intercom svg.png'
import marvel from '../../src/images/Marvel svg.png'
import automatic from '../../src/images/Automattic svg.png'
import video from '../../src/images/zap.png'
import audio from '../../src/images/zap-1.png'
import calender from '../../src/images/zap-2.png'
import security from '../../src/images/zap-3.png'
import image from '../../src/images/Rectangle 1.png'
import line from '../../src/images/Hand-drawn arrow.png'

const companies = [

  {
    icon: shopify,
  },
  {
    icon: coinbase,
  },
  {
    icon: dropbox,
  },
  {
    icon: intercom,
  },
  {
    icon: marvel,
  },
  {
    icon: automatic,
  },

];

const Content = () => {
  return (

    <div className='content'>

        <section className='content-top'>

            <p>Join 1,500+ companies already video conferencing the ClearLink way</p>

            <div>
                { 
                    companies.map((object)=>{
                      return <img src={object.icon} alt='' />
                    })
                }
            </div>

        </section>

        <section className='content-bottom'>

            <div className='bottom-up'>

                <div>
                  <p style={{fontWeight: '600', color: '#175cd3'}}>The ClearLink Advantage</p>
                  <h1 style={{fontSize: '40px', marginTop: '-10px'}}>Why choose ClearLink?</h1>
                  <p style={{fontSize: '18px', marginTop: '-1em', color: '#667085', fontWeight: '500'}}>In a world where connection is everything, ClearLink takes the lead. Our <br /> cutting-edge video conferencing app offers:</p>
                </div>

                <img src={line} alt='' />
            
            </div>

            <div className='bottom-down' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3em'}}>

                <section style={{display: 'flex', flexDirection: 'column', width: '60%'}}>

                    <div className='offers'>

                        <div className='offer'>

                            <img src={video} alt='' />
                            <h3>Crystal-clear HD video</h3>
                            <p>No more pixelation or blurriness – just <br /> stunning, lifelike clarity that brings your <br /> team closer in meetings.</p>

                        </div>

                        <div className='offer'>

                            <img src={audio} alt='' />
                            <h3>Noise-canceling audio</h3>
                            <p>Say goodbye to distractions with our <br /> advanced audio tech for crisp, <br /> interruption-free conversations.</p>

                        </div>

                    </div>

                    <div className='offers'>  

                        <div className='offer'>

                            <img src={calender} alt='' />
                            <h3>Scheduling made easy</h3>
                            <p>Streamline your agenda with ClearLink's <br /> intuitive scheduling. Set up meetings, <br /> send invitations, and receive reminders in <br /> one place.</p>

                        </div>

                        <div className='offer'>

                            <img src={security} alt='' />
                            <h3>Bank-grade security</h3>
                            <p>Your privacy is our priority with bank- <br /> grade security protocols safeguarding <br /> your meetings and data from unwanted <br /> intruders.</p>

                        </div>

                    </div>

                </section>

                <img src={image} alt="" style={{width: '35%', marginTop: '2em'}} />

            </div>

        </section>

    </div>
  )
}

export {Content}