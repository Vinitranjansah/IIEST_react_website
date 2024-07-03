import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';



function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>IIEST, Shibpur (Earlier named "Bengal Engineering College") ranks 21A position in the revised NIRF-2018 among Engineering Institutes. It is the first college to become IIEST in 2014. However The College has a rich history. It is empowering the nation since 1856. Considering the year of establishment we are the third engineering college in India but considering the year of graduation we stands as the 2nd oldest Engineering College in India. We have 16 Departments and 8 schools. It has 300 Faculty Members and around 4000 students are instructed every year.</p>
            </div>
            
        </header>

      
    </div>
  )
}

export default About;