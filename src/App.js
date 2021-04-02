

import './App.css';
import { Component, useEffect, useState } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: {}
    }
  }
  componentDidMount(){//T-shirt
    fetch("https://asos2.p.rapidapi.com/products/v2/list?offset=0&categoryId=4209&limit=10&store=US&country=US&priceMin=10&currency=USD&priceMax=1000&sort=freshness&lang=en-US&q=shoes&sizeSchema=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "f1a0f880b9msh6718e6f56226525p166972jsn0a4691fbd022",
        "x-rapidapi-host": "asos2.p.rapidapi.com"
      }
    })
    .then(response => response.json()).then(response => this.setState({data: response}))
    .catch(err => {
      console.error(err);
    });
  }
  render() {
    let dataList = this.state.data.products;
   console.log(dataList)
    return (
      <div>
        {dataList && dataList.map((item, index) => {
        return (
            <div className="majorImage" data-aos="zoom-in-up" key={index}>
              <img src={`https://${item.imageUrl}`} alt="item yok"/>
              <p>{item.price.current.text} ||  {item.name}</p>
            </div>
        )
    })}
      </div>
    );
  }
}

export default App;



  /*   useEffect(() => {
      fetch('https://api.dailymotion.com/videos?channel=sport&limit=10&search=man&flags=verified')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
  
    }, [])
   */
  /*  var player = ; */