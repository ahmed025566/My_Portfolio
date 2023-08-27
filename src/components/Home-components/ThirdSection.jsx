import React from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const ThirdSection = () => {
    return (
        <section className='thirdSection'>
            <div className='some-statistics' data-aos="zoom-in">
                <div className='numberDiv'>
                    <p className='number'>01</p>
                    <p className='description'>Years<br />Experience</p>
                </div>
                <div className='numberDiv'>
                    <p className='number'>+1000</p>
                    <p className='description'>Training<br />Hours</p>
                </div>
                <div className='numberDiv'>
                    <p className='number'>+10</p>
                    <p className='description'>Total<br />Projects</p>
                </div>
            </div>
            <Collaboration />
        </section>
    )
}

export const Collaboration = () => {
    return (
        <NavLink to="/contact">
                <div className='collaboration' data-aos="zoom-in">
                    <div className='line' id="togather"></div>
                    <span id="star-togather">&#10022;</span>
                    <p className='let_us_work'>Let's<br />Work <span className='together'>together</span></p>
                    <BsArrowRightCircleFill className='get-in' id="collaborate" />
                </div>
            </NavLink>
    )
}
export default ThirdSection