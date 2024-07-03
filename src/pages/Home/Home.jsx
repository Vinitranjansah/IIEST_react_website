import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';

function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>Indian Institute of Engineering Science and Technology, Shibpur</h1>
                <p className='d-flex flex-column flex-sm-row align-items-center'>IIEST Shibpur is a public technological university located at Shibpur, Howrah, West Bengal, India. Founded in 1856,[3] it is recognised as an Institute of National Importance under Ministry of Education by the Government of India.It is controlled by the Council of NITSER.It is the fourth oldest engineering institute in India after College of Engineering, Guindy, IIT Roorkee, College of Engineering, Pune.</p>
                
            </div>
        </header>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>Courses</h2>
                        <p>we provide all cources .... <br />
                        B.tech <br />
                        M.tech....</p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" height={700} width={700}/>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
            <FaqAccordion />
        </div>

       
    </div>
  )
}

export default Home;