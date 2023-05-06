import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Card.scss"
const Card = (props) => {
    const {data} = props;
    const {id,title,image}=data;
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate(`product/${id}`)
    }
  return (
    <div className='card' onClick={handleNavigate}>
        <img src={image} alt={title} />
        <div className="card__description">
            <h6>{title}</h6>
            <div className="card__description__buttons">
                <span>SHOP NOW</span>
                <span>NEW TODAY</span>
            </div>
        </div>
        <div className="card__footer">
            <p>Boutique ends in 6 days & 17 hours</p>
        </div>
    </div>
  )
}

export default Card