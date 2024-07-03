import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/Swami_vivekanand_birth_anniversary.jpg';
import Blog2Img from '../../utils/images/Sankranti.jpg';
import Blog3Img from '../../utils/images/Convocation.jpg';
import Blog4Img from '../../utils/images/Annual_sports_day.jpg';
import Blog5Img from '../../utils/images/Science_day.jpg';
import Blog6Img from '../../utils/images/Induction_cum_orientation.jpg';
import Blog7Img from '../../utils/images/Environment_day.jpg';
import Blog8Img from '../../utils/images/yoga_day.jpg';
import Blog9Img from '../../utils/images/against_drug.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
       
        description: 'Swami Vivekanand - 157th Birth anniversary'
    },
    {
        id: 2,
        img: [Blog2Img],
       
        description: 'Sankranti (Pongal) celebrations'
    },
    {
        id: 3,
        img: [Blog3Img],
       
        description: 'Convocation 2024'
        
    },
    {
        id: 4,
        img: [Blog4Img],
      
        description: 'Annual Sports Day'
    },
    {
        id: 5,
        img: [Blog5Img],
        
        description: 'Science Day'
        },
    {
        id: 6,
        img: [Blog6Img],
        
        description: 'Induction Cum Orientation'
    },
    {
        id: 7,
        img: [Blog7Img],
       
        description: 'Environment Day'
    },
    {
        id: 8,
        img: [Blog8Img],
       
        description: 'Yoga day'
    },
    {
        id: 9,
        img: [Blog9Img],
        
        description: 'International Day against drug Abuse'
    },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Gallery</h1>
                {/* <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.</p> */}
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;