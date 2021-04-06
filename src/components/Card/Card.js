import React from 'react';
import {
    Link, 
  } from "react-router-dom";
import './Card.css';
const CardItem =(props)=>{
    return(
        <div className="CardItem">
            <Link to="/detailed">
                <img onClick={() => props.storeCurrentItem(props.item)} className="CardImage" src={`https://${props.item.imageUrl}`} alt="item yok" />
            </Link>
            <p>{props.item.name} </p>
            <p>$20.99</p>
        </div>
    )
}

export default CardItem;