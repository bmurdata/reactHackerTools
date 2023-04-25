import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const CommentCard = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  return (
      <div className="Card">          
          
          <p className="author">{props.Author}</p>
          <p className="content">{props.Content}</p>
          <p  className="description">{props.created_at}</p>
      </div>
  );
};

export default CommentCard;