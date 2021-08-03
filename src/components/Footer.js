import React from 'react'
import {FaInstagram,FaTwitter,FaRegEnvelope, FaYoutube, FaLinkedinIn ,FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer mt-5'>
            <div className='container p-3 d-md-flex align-items-center justify-content-between'>
                <div className='px-5 mx-5'>
                   <p style={{fontSize:'20px'}}>Contact:<br/>
                      <FaRegEnvelope/>: abcdef@mail.com 
                   </p>
                </div>
                <div className='px-5 mx-5'>
                    <p style={{fontSize:'25px'}}>shippers&copy;2021</p>
                </div>
                <div className='social-media'>
                    <ul>
                        <li><FaInstagram/></li>
                        <li><FaFacebook/></li>
                        <li><FaLinkedinIn/></li>
                        <li><FaTwitter/></li>
                        <li><FaYoutube/></li>
                    </ul>
                </div>
                <section>
                    <p></p>
                </section>
            </div>
        </div>
    )
}

export default Footer
