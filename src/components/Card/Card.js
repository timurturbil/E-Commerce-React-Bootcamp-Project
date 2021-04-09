import React from 'react';
import {
    Link,
} from "react-router-dom";
import './Card.scss';
const CardItem = (props) => {
    return (
        <div className="card-row">
            <div className="card">
            <Link to="/detailed">
                <img  onClick={() => props.storeCurrentItem(props.item)} className="card-image" src={`https://${props.item.imageUrl}`} alt="item yok" />
                </Link>
                <div className="card-footer">
                    <p className="card-text">{props.item.brandName}</p>
                    <h3 className="card-title">{props.item.name}</h3>
                    <p className="card-text">
                        <span className="card-author">{props.item.price.current.text}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardItem;