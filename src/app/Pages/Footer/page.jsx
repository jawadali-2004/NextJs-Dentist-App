import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import Nav from '@/app/Components/Nav/page';

const Footer = () => {
    return (
        <>

            <Nav/>
            <div className='section6'>

                <div className='ok'>

                    <div className='tel'>

                        <div className='icon-2'>
                            <BsFillTelephoneFill />
                        </div>

                        <div className='texts1'>
                            <h1>For appointment</h1>
                            <p>Phone : 1-800-222-000</p>
                            <p>Fax: 1-800-222-000</p>
                        </div>
                    </div>

                    <div className='tel'>

                        <div className='icon-2'>
                            <FaMapMarkerAlt />
                        </div>

                        <div className='texts1'>
                            <h1>Clinic location</h1>
                            <p>401 Broadway, 24th Floor</p>
                            <p>New York, NY 10013.</p>
                        </div>
                    </div>

                    <div className='tel'>

                        <div className='icon-2'>
                            <FaMessage />
                        </div>

                        <div className='texts1'>
                            <h1>Patient servicest</h1>
                            <p>info@yourdomain.com</p>
                            <p>hr@yourdomain.com</p>
                        </div>
                    </div>

                    <div className='tel'>

                        <div className='icon-2'>
                            <CiClock2 />
                        </div>

                        <div className='texts1'>
                            <h1>Available 24 hours</h1>
                            <p>Lorem ipsum is simply</p>
                            <p>dummy text printing</p>
                        </div>
                    </div>

                </div>

                <hr />

                <div className='last'>
                    <p>© 2024 Litho is Proudly Powered by  <span className='zar'>ThemeZaa</span></p>
                </div>



            </div>
        </>
    )
}

export default Footer
