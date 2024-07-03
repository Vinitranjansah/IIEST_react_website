import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function Contact() {
  return (
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Contact Us</h1>
                <p className='text-center w-75 mb-5'>
                Office:
                Botanic Garden, Dist: Howrah, West Bengal, India - 711103
                <br />
                Phone No: +91 (033) 2668 4561 to 63
                <br />
                Fax: +91 (033) 2668 2916
                <br />
                Public Relation Officer: pro@iiests.ac.in
                <br />
                033-2668 8081(Direct)/ 2668 4561/62/63 Extn: 356
                <br />
                Security Consultant: (CONTROL)  +91 9354193249/8017126491
                </p>
                
            </div>
        </header>

    </div>
  )
}

export default Contact;