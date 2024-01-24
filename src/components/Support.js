import React from 'react'
import './testimonial.css';
import minus from '../images/Icon wrap.png'
import plus from '../images/Icon wrap (1).png'
import tick from '../images/Check icon.png'
import image from '../images/3_2 screen mockup.png'

const Support = () => {
  return (
    <div className='support-container'>

        <section className='support'>

            <div>
                <p style={{color: '#175cd3', fontWeight: 'bold'}}>Support</p>
                <h1 style={{fontSize: '40px', marginTop: '-10px'}}>FAQs</h1>
                <p style={{color: '#667085', marginTop: '-1em', fontSize: '18px', fontWeight: '500'}}>Everything you need to know about the product <br /> and billing. Can’t find the answer you’re looking <br /> for? Please chat to our friendly team.</p>
            </div>

            <article>

                <div className='faq1'>

                    <div className='' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold'}}>
                        <p>How many participants can join a ClearLink video conference?</p>
                        <img src={minus} alt='' />
                    </div>

                    <p style={{color: '#667085', marginTop: '-10px', fontSize: '14px', fontWeight: '500'}}>ClearLink offers flexible meeting options. Depending on your subscription <br /> 
                        plan, you can host meetings with varying numbers of participants. Our plans <br /> 
                        are designed to accommodate small team collaborations and large-scale <br /> 
                        webinars, ensuring you have the right fit for your needs.
                    </p>

                </div>

                <div className='faq'>
                    <p>Can I use ClearLink on multiple devices?</p>
                    <img src={plus} alt='' />
                </div>

                <hr className='hr' />

                <div className='faq'>
                    <p>Is ClearLink compatible with other video conferencing platforms?</p>
                    <img src={plus} alt='' />
                </div>

                <hr className='hr' />

                <div className='faq'>
                    <p>How does ClearLink ensure the security of my video conferences?</p>
                    <img src={plus} alt='' />
                </div>

                <hr className='hr' />

                <div className='faq'>
                    <p>Do I need to download any software to use ClearLink?</p>
                    <img src={plus} alt='' />
                </div>

                <hr className='hr' />

                <div className='faq'>
                    <p>What kind of customer support does ClearLink provide?</p>
                    <img src={plus} alt='' />
                </div>

            </article>

        </section>

        <section className='trial'>

            <aside>

                <h1 style={{fontSize: '40px', fontWeight: '700', marginBottom: '10px', marginTop: '-1em'}}>Ready to clear the path to <br /> perfect communication?</h1>

                <div className='options'>
                    <img src={tick} alt='' />
                    <p>30 days free trial</p>
                </div>

                <div className='options'>
                    <img src={tick} alt='' />
                    <p>Cancel at any time</p>
                </div>

                <div className='options'>
                    <img src={tick} alt='' />
                    <p>Access to all features</p>
                </div>

                <div className='options'>
                    <img src={tick} alt='' />
                    <p>Peronalized onboarding</p>
                </div>

                <div className='options-btn'>       
                    <button id='btn1'>Talk to sales</button>
                    <button id='btn2'>Start your free trial</button>
                </div>

            </aside>
            
            <img src={image} alt='' />

        </section>

    </div>
  )
}

export {Support}