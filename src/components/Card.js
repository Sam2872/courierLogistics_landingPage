import React from 'react'

const Card = ({title, image, content}) => {
    return (
      
           <div className='col-md-4 p-3 mx-3 mt-5 card'>
             <div className='card-image'>
              <img src={image} alt={`card-${title}`}/>
             </div>
             <div className='mt-3 text-center'>
              <span style={{ fontSize:'1.5em', fontWeight:'600'}}>{title}</span>
              <p  style={{ fontSize:'1em'}} className='mt-2'>{content}</p>

             </div>
             <button>Know More</button>
             
           </div>
       
    )
}

export default Card
