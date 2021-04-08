import React from 'react';
import {
    Link,
} from "react-router-dom";
import './Card.scss';
const CardItem = (props) => {
    return (
        <div class="card-row">
            <div class="card">
            <Link to="/detailed">
                <img  onClick={() => props.storeCurrentItem(props.item)} class="card-image" src={`https://${props.item.imageUrl}`} alt="item yok" />
                </Link>
                <div class="card-footer">
                    <p class="card-text">{props.item.brandName}</p>
                    <h3 class="card-title">{props.item.name}</h3>
                    <p class="card-text">
                        <span class="card-author">{props.item.price.current.text}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardItem;

{/* <div className="CardItem">
            <Link to="/detailed">
                <img onClick={() => props.storeCurrentItem(props.item)} className="CardImage" src={`https://${props.item.imageUrl}`} alt="item yok" />
            </Link>
            <div className="ItemDetails">
            <h5>{props.item.name} </h5>
            <h5>$20.99</h5>
            </div>
            
        </div> */}