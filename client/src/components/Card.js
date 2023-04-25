import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  return (
      <div className="Card">
          
          <h2 className="title">{props.title}</h2>
          <h3 className="author">{props.author}</h3>
          <p className="desciption">{props.created_at}</p>
          <p className='description'>Upvotes {props.upvotes}</p>
          <Link to={'view/'+ props.id}>View Details</Link>
        
      </div>
  );
};

export default Card;