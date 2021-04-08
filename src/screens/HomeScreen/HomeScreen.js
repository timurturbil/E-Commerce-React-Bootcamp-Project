import { Component, useEffect, useState } from 'react';
import {
  Link, withRouter
} from "react-router-dom";
import './HomeScreen.css';
import CardItem from '../../components/Card/Card';
class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      orderedList: [],
      limit: 40,
      fetchData: false,
    }
  }
  componentDidMount() {//T-shirt
    this.setState({
      orderedList: []
    })
    fetch(`https://asos2.p.rapidapi.com/products/v2/list?offset=0&categoryId=4209&limit=${this.state.limit}&store=US&country=US&currency=USD&sort=freshness&lang=en-US&q=${this.props.category}&sizeSchema=US`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "f1a0f880b9msh6718e6f56226525p166972jsn0a4691fbd022",
        "x-rapidapi-host": "asos2.p.rapidapi.com"
      }
    })
      .then(response => response.json()).then(response => {
        this.setState({ data: response })})
      .catch(err => {
        console.error(err);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.props.fetchData){
      console.log("veri çekiliyor")
      fetch(`https://asos2.p.rapidapi.com/products/v2/list?offset=0&categoryId=4209&limit=${this.state.limit}&store=US&country=US&currency=USD&sort=freshness&lang=en-US&q=${this.props.category}&sizeSchema=US`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "f1a0f880b9msh6718e6f56226525p166972jsn0a4691fbd022",
        "x-rapidapi-host": "asos2.p.rapidapi.com"
      }
    })
      .then(response => response.json()).then(response => {
        /* console.log(response); */
        this.setState({ data: response })})
      .catch(err => {
        console.error(err);
      });
      this.props.setFetchData(false);
    }
  }
  deleteLocalStorage() {
    localStorage.setItem("OrderList", [])
  }
  storeCurrentItem(item){
    localStorage.setItem('CurrentItem', JSON.stringify(item))
  }
  render() {
    console.log(this.state.data)
    let dataList = this.state.data.products;
    return (
      <div>
        <button onClick={this.props.LogOut}>LogOut</button>
        <div>
          <Link to="/order">order</Link>
        </div>
        <div>
        </div>
        <div className="Items">
          {dataList && dataList.map((item, index) => {
            return (
              <div className="majorImage" data-aos="zoom-in-up" key={index}>
                <CardItem item={item} storeCurrentItem={this.storeCurrentItem}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default HomeScreen;