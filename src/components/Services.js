import React from 'react'
import Card from './Card'

const Services = () => {
    const services =[
        {
            id:1,
            title:'INDIVIDUAL SERVICES',
            content:'Offering express parcel transportation, B2B & B2C warehousing, LTL & FTL freight and more.',
            image:'https://www.awakeningcounselling.ca/wp-content/uploads/2017/03/logo-03.png',
        },
        {
            id:2,
            title:'WAREHOUSE SERVICES',
            content:'The right solutions for your complex warehouse problems.h',
            image:'https://cdn1.vectorstock.com/i/1000x1000/13/25/warehouse-services-composition-vector-19961325.jpg'
        },{
            id:3,
            title:'E-COMMERCE SERVICES',
            content:'Take your ecommerce business PAN India with us and grow your ecommerce business.',
            image:'https://www.adziv.com/wp-content/uploads/2020/10/e-commerce-1.png'
        }
    ]
    return (
        <div className='p-5'>
            <h1 className='text-center  ' style={{color:"", fontWeight:"700"}}>Services</h1>
            <div className='container d-md-flex '>
            {services.map(service=>{
               const {id,title,content,image} = service;
                return(
                    <Card key={id} title={title} content={content} image={image}/>
                )
            })}
            </div>
     
        </div>
    )
}

export default Services
