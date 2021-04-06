import React from 'react';
import Slider from "react-slick";
import clothes from "../../assets/clothes.jpeg"
import tshirt from "../../assets/tshirt.jpg"
import dress from "../../assets/dress.jpg";
import jean from "../../assets/jean.jpg"
import sweater from "../../assets/sweater.jpg"
import "./FirstScreen.scss"

const FirstScreen = () => {

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
                            <button>Explore</button>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="slider-wrapper">
                    <img src={tshirt} alt=""/>
                    <div className="slider-content-1">
                        <h1>New Arrivals</h1>
                        <div className="slider-wrapper-buttons-1">
                            <button>Shop Now</button>
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
              <h1>Sweater</h1>
            </div>
          </div>
          <div className="explore-card">
            <img
              src={dress}
              alt=""
            />
            <div className="explore-card-content">
              <h1>Dress</h1>
            </div>
          </div>
          <div className="explore-card">
            <img
              src={jean}
              alt=""
            />
            <div className="explore-card-content">
              <h1>Jean</h1>
            </div>
          </div>
        </div>
      </div>
     
        </>
    )
}

export default FirstScreen;
