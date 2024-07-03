import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import Architecture_and_Planning from '../../utils/images/archi.jpg';
import cst from '../../utils/images/cst.jpg';
import Civil from '../../utils/images/civil.jpg';
import Etc from '../../utils/images/etc.jpg';
import it from '../../utils/images/it.jpg';
import mec from '../../utils/images/mec.jpg';
import math from '../../utils/images/math.jpg';
import earth from '../../utils/images/earth.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [Architecture_and_Planning],
        title: 'Architecture and Planning',
        description:'The Department of Architecture and Planning (Formarly Architecture, Town and Regional Planning) at the Indian Institute of Engineering Science and Technology, Shibpur has a long and rich history.' 
    },
    {
        id: 2,
        img: [cst],
        title: 'Computer Science and Technology',
        description: 'The Department of Computer Science and Technology (CST) was established in 1982. Since its inception, the department has played an important role in developing a vibrant and forward-looking academic environment. Currently, the department offers B.Tech, M.Tech, and PhD programs.'
    },
    {
        id: 3,
        img: [Civil],
        title: 'Civil Engineering',
        description: 'Founded in May 1856, the Department of Civil Engineering is as old as the institute. The Department was originally established as the Civil Engineering College, Calcutta with the object of imparting training to the personnel in the field of Civil Engineering for the fulfillment of the need of the Public Works Department of the Government of India.'
    },
    {
        id: 4,
        img: [Etc],
        title: 'Electronics and Telecommunication Engineering',
        description: 'The Department of Electronics and Telecommunication Engineering started its journey in July 1965 after its nucleation from the Department of Physics & Telecommunication from the erstwhile Bengal Engineering College. '
    },
    {
        id: 5,
        img: [it],
        title: 'Information Technology',
        description: 'The Department of Information Technology started its journey in 2000. It is one of the youngest departments of this 165 years old institute. The department specializes in diverse domains of research ranging from VLSI Design and Test, Hardware Security, Image and Signal Processing, Digital Geometry, Cellular Automata, Cyber Security to recently evolving areas of Wireless Networks, Cognitive Radio Networks, Internet-of-Things, and Machine Learning.'
    },
    {
        id: 6,
        img: [mec],
        title: 'Mechanical Engineering',
        description: 'The inception of the Mechanical Engineering Department may be traced back to the pre-independence era of the country. The Department of Mechanical Engineering was established in 1921 (then under erstwhile Bengal Engineering College which was upgraded to BESU, Shibpur and subsequently converted to IIEST Shibpur) with the initiation of a diploma course programme in Mechanical Engineering.'
    },
    {
        id: 7,
        img: [math],
        title: 'Mathematics',
        description: 'The Department of Mathematics was established along with the inception of this Institute. In its long journey over one hundred and fifty years it has contributed in a large way to the cause of engineering education as well as to the research in mathematics.'
    },
    {
        id: 8,
        img: [earth],
        title: 'Earth Sciences',
        description: 'Indian Institute of Engineering Science and Technology and the subject Geology possess a century-old relationship. Many eminent geoscientists have offered their teaching and research expertise in the past. Previously teaching in Geology was introduced in this Institute to meet the need of the would-be engineering graduates only in Civil Engineering, Mining Engineering and Metallurgical Engineering branches.'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>
                    <ul>
                        <li>B. Tech</li>
                        <li>B. Arch</li>
                        <li>M. Tech</li>
                        <li>M Sc</li>
                        <li>M B A</li>
                        <li>M.O.P</li>
                        <li>Ph.D</li>
                    </ul>
                    </p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;