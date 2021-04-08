import React, {useEffect} from 'react';
import Slider from "react-slick";
import clothes from "../../assets/clothes.jpeg"
import tshirt from "../../assets/tshirt.jpg"
import dress from "../../assets/dress.jpg";
import jean from "../../assets/jean.jpg"
import sweater from "../../assets/sweater.jpg"
import "./FirstScreen.scss"
import { useHistory } from "react-router";
import {
  Link, 
} from "react-router-dom";
const FirstScreen = (props) => {
  const {
    setCategory
  } = props;
    const history = useHistory();
    
    useEffect(() => {
      console.log("history pushhhh")
      history.push({
        pathname:  "/",
     });
    }, [])

    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };

    return (
        <>
            <Slider {...settings}>
                <div className="slider-wrapper">
                    <img src={clothes} alt=""/>
                    <div className="slider-content">
                        <h1>Spring Collection</h1>
                        <div className="slider-wrapper-buttons">
                        <button><Link style={{color: "black"}} to="/order">Explore</Link></button>
                        <button><Link style={{color: "black"}} to="/order">Shop Now</Link></button>
                          
                        </div>
                    </div>
                </div>
                <div className="slider-wrapper">
                    <img src={tshirt} alt=""/>
                    <div className="slider-content-1">
                        <h1>New Arrivals</h1>
                        <div className="slider-wrapper-buttons-1">
                        <button><Link style={{color: "white"}} to="/products">Explore</Link></button>
                          <button><Link style={{color: "white"}} to="/order">Shop Now</Link></button>
                        </div>
                    </div>
                </div>
            </Slider>

            <div className="explore-container">
        <div className="explore-wrapper">
          <div className="explore-card">
            <img
              src={sweater}
              alt=""
            />
            <div className="explore-card-content">
              <button style={{color: "black"}} onClick={() => setCategory("Sweater")}><Link style={{color: "black"}} to="/products">Sweater</Link></button>
            </div>
          </div>
          <div className="explore-card">
            <img
              src={dress}
              alt=""
            />
            <div className="explore-card-content">
            <button style={{color: "black"}} onClick={() => setCategory("Dress")}><Link style={{color: "black"}} to="/products">Dress</Link></button>
            </div>
          </div>
          <div className="explore-card">
            <img
              src={jean}
              alt=""
            />
            <div className="explore-card-content">
            <button style={{color: "black"}} onClick={() => setCategory("Jean")}><Link style={{color: "black"}} to="/products">Jean</Link></button>
            </div>
          </div>
        </div>
      </div>
     
        </>
    )
}

export default FirstScreen;
