import { Component } from "react";
import {

    Link
  } from "react-router-dom";
class DetailedScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            CurrentItem: {}
        }
    }
    componentDidMount(){
        this.setState({CurrentItem: JSON.parse(localStorage.getItem('CurrentItem'))})
    }
    render(){
        let item = this.state.CurrentItem;
        return(
            <div>
                <div>
                    <Link to="/">Go Back</Link>
                </div>
                
                <img src={`https://${item.imageUrl}`} alt="item yok" />
                <p>{item.brandName}</p>
            </div>
        )
    }
}

export default DetailedScreen;