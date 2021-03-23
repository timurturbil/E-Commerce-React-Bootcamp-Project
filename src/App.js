
import DashBoard from './component/DashBoard/DashBoard';
import './App.scss';
import { Component, useEffect, useState } from 'react';
import useScript from './AlData';
import { Helmet } from "react-helmet";
import Safe from "react-safe"
import ReactDOM from "react-dom";

import FetchData from './AlData';
class App extends Component {

  render() {
    return (
      <div className="App">   
        <FetchData category="sport" topic="man" fetchedNumber={3}/>
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