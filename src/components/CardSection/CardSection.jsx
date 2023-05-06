import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import "./CardSection.scss"

const CardSection = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((json) => setData([...json]));
    },[])
  return (
    <div className='cardsection'>
        <h3>PREMIUM BOUTIQUES</h3>
        <div className="cardsection__cards">
        {data.map((productCard)=>(
            <Card key={productCard.id} data={productCard}/>
        ))}
        </div>
    </div>
  )
}

export default CardSection