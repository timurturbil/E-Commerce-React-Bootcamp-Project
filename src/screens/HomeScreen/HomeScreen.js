import { Component, useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import './HomeScreen.css';
class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      orderedList: [],
      limit: 3,
      priceMin: 10,
      priceMax: 100,
      category: "",
      fetchData: false,
    }
  }
  componentDidMount() {//T-shirt
    this.setState({
      orderedList: []
    })
    fetch("https://asos2.p.rapidapi.com/products/v2/list?offset=0&categoryId=4209&limit=10&store=US&country=US&priceMin=10&currency=USD&priceMax=100&sort=freshness&lang=en-US&q=shoes&sizeSchema=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "f1a0f880b9msh6718e6f56226525p166972jsn0a4691fbd022",
        "x-rapidapi-host": "asos2.p.rapidapi.com"
      }
    })
      .then(response => response.json()).then(response => {
        console.log(response);
        this.setState({ data: response })})
      .catch(err => {
        console.error(err);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const previousOrderList = JSON.parse(localStorage.getItem('OrderList')) || []
    const stateList = this.state.orderedList
    const MyOrderList = previousOrderList.concat(stateList); 
    localStorage.setItem("OrderList", JSON.stringify(MyOrderList))
    if(this.state.fetchData){
      console.log("veri çekiliyor")
      fetch(`https://asos2.p.rapidapi.com/products/v2/list?offset=0&categoryId=4209&limit=${this.state.limit}&store=US&country=US&priceMin=${this.state.priceMin}&currency=USD&priceMax=${this.state.priceMax}&sort=freshness&lang=en-US&q=${this.state.category}&sizeSchema=US`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "f1a0f880b9msh6718e6f56226525p166972jsn0a4691fbd022",
        "x-rapidapi-host": "asos2.p.rapidapi.com"
      }
    })
      .then(response => response.json()).then(response => {
        console.log(response);
        this.setState({ data: response })})
      .catch(err => {
        console.error(err);
      });
      this.setState({fetchData: false})
    }
  }
  deleteLocalStorage() {
    localStorage.setItem("OrderList", [])
  }
  storeCurrentItem(item){
    localStorage.setItem('CurrentItem', JSON.stringify(item))
  }
  render() {
    let dataList = this.state.data.products;
    console.log(dataList)
    return (
      <div>
        <button onClick={this.props.LogOut}>LogOut</button>
        <div>
          <Link to="/order">order</Link>
        </div>
        <div>
          <input type="number" onChange={(event)=> this.setState({limit: event.target.value})} placeholder="Limit"/>
          <input type="number" onChange={(event)=> this.setState({priceMin: event.target.value})} placeholder="priceMin"/>
          <input type="number" onChange={(event)=> this.setState({priceMax: event.target.value})} placeholder="priceMax"/>
          <input type="text" onChange={(event)=> this.setState({category: event.target.value})} placeholder="Category"/>
          <button onClick={() => this.setState({fetchData: true})}>Bas</button>
        </div>
        <div>
          {dataList && dataList.map((item, index) => {
            return (

              <div className="majorImage" data-aos="zoom-in-up" key={index}>
                <Link to="/detailed">
                  <button onClick={() => this.storeCurrentItem(item)}><img src={`http://${item.imageUrl}`} alt="item yok" /></button>
                </Link>
                <button onClick={() => this.setState({ orderedList: [...this.state.orderedList, item] })} className="myButton">Order</button>
                <p>{item.price.current.text} ||  {item.name}</p>
              </div>

            )
          })}
        </div>
      </div>
    );
  }
}

export default HomeScreen;