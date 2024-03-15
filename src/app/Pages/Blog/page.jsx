import Nav from '@/app/Components/Nav/page';
import React from 'react'
import { IoStarSharp } from "react-icons/io5";

const Blog = () => {
    return (
        <>
            <Nav/>
            <div className='section5'>

                <div className='ptag'> PATIENT TESTIMONIALS</div>

                <div className='heading'>
                    <h1>
                        Explore our very satisfied <br />
                        clients testimonials
                    </h1>
                </div>

                < div className='main5'>


                    <div className='flexss'>

                        <div>
                            <div className='clip'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, earum. Lorem ipm dolor sit amet.</p>
                            </div>

                            <div className='inner5'>

                                <div className='imagess'>
                                    <img src="https://lithoreact.themezaa.com/assets/img/webp/avtar28.webp" alt="" />
                                </div>

                                <div className='Name'>
                                    <h1>Herman Miller</h1>
                                    <div className='star'>
                                        <IoStarSharp />
                                        <IoStarSharp />
                                        <IoStarSharp />
                                        <IoStarSharp />
                                    </div>


                                </div>
                            </div>

                        </div>


                        <div>

                            <div className='clip'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, earum. Lorem ipm dolor sit amet.</p>
                            </div>

                            <div className='inner5'>

                                <div className='imagess'>
                                    <img src="https://lithoreact.themezaa.com/assets/img/webp/avtar27.webp" alt="" />
                                </div>

                                <div className='Name'>
                                    <h1>Jeremy Girard</h1>
                                    <div className='star'>
                                        <IoStarSharp />
                                        <IoStarSharp />
                                        <IoStarSharp />
                                        <IoStarSharp />
                                    </div>


                                </div>
                            </div>

                        </div>


                        <div>
                            <div className='clip'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, earum. Lorem ipm dolor sit amet.</p>
                            </div>

                            <div className='inner5'>

                                <div className='imagess'>
                                    <img src="https://lithoreact.themezaa.com/assets/img/webp/avtar29.webp" alt="" />
                                </div>

                                <div className='Name'>
                                    <h1>    JERRYY BOYEE</h1>
                                    <div className='star'>
                                        <IoStarSharp />
                                        <IoStarSharp />
                                        <IoStarSharp />
                                        <IoStarSharp />
                                    </div>


                                </div>
                            </div>

                        </div>



                    </div>


                    <div className='imgg'>
                        <img src="https://lithoreact.themezaa.com/assets/img/webp/home-dentist-img-02.webp" alt="" />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Blog
