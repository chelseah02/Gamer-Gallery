import React from 'react'
import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  return (
      <div className="Card">
          <h2 className="title">{props.title}</h2>
          <h3 className="author">{props.speed + " mph"}</h3>
          <h3 className="color"> {props.color}</h3>
          <Link to={'edit/'+ props.id}>Edit Gamer</Link>
      </div>
  );
};

export default Card;