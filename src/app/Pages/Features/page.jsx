import Nav from '@/app/Components/Nav/page';
import React from 'react'
import { TiTick } from "react-icons/ti";


const Feature = () => {
    return (
        <>

            <Nav/>
            <div className='section4'>

                <div className='display'>

                    <div className='left'>

                        <div className='texts'>
                            <h1>
                                Why choose us  <br />
                                our dental care?
                            </h1>
                        </div>

                        <div className='content'>

                            <div className='acha'>

                                <div className='tick'>
                                    <TiTick />
                                </div>

                                <div className='stefan'>

                                    <h1>Advanced technology dental care</h1>

                                    <p>Lorem ipsum dolor sit amet consectetur</p>

                                </div>

                            </div>


                        </div>

                        <div className='content'>

                            <div className='acha'>

                                <div className='tick'>
                                    <TiTick />
                                </div>

                                <div className='stefan'>

                                    <h1>Our best qualified dentist team</h1>

                                    <p>Lorem ipsum dolor sit amet consectetur</p>

                                </div>

                            </div>


                        </div>

                        <div className='content'>

                            <div className='acha'>

                                <div className='tick'>
                                    <TiTick />
                                </div>

                                <div className='stefan'>

                                    <h1>Emergency dental care services</h1>

                                    <p>Lorem ipsum dolor sit amet consectetur</p>

                                </div>

                            </div>


                        </div>


                        <div className='btn1'>

                            <button>DENTAL SERVICES</button>

                        </div>


                    </div>


                    <div className='right'>

                        <div className='hassle'>
                            <h1>Hassle free <br />
                                appointment</h1>
                            <div className='lines'></div>
                        </div>


                        <div className='center'>

                            <div>
                                <div className='name'>
                                    <input type="text" placeholder='Your name' />
                                </div>

                                <div className='name'>
                                    <input type="text" placeholder='Your Email Address' />
                                </div>

                                <div className='name'>

                                    <input type="text" placeholder='Mobile number' />
                                </div>

                                <div className='name'>
                                    <input type="text" placeholder='How can we help you?' />
                                </div>

                            </div>

                        </div>

                        <div className='btn3'>
                            <button>BOOK APPOINTMENT</button>
                        </div>
                    </div>

                </div>





            </div>

        </>
    )
}

export default Feature
