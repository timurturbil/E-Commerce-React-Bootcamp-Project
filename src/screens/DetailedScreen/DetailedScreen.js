import { Component } from "react";
import {

    Link
  } from "react-router-dom";
import './DetailedScreen.css';
class DetailedScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            CurrentItem: {},
            orderedList: []
        }
    }
    componentDidMount(){
        this.setState({CurrentItem: JSON.parse(localStorage.getItem('CurrentItem')), orderedList: []})
    }
    componentDidUpdate(){
    const previousOrderList = JSON.parse(localStorage.getItem('OrderList')) || []
    const stateList = this.state.orderedList
    const MyOrderList = previousOrderList.concat(stateList); 
    localStorage.setItem("OrderList", JSON.stringify(MyOrderList))
    }
    render(){
        let item = this.state.CurrentItem;
        return(
            <div>
                <div>
                    <button style={{width: "100px", height: "50px"}} onClick={() => {
                        const previousOrderList = JSON.parse(localStorage.getItem('OrderList')) || []
                        /* const stateList = this.state.orderedList
                        const MyOrderList = previousOrderList.concat(stateList); */
                        /* console.log(previousOrderList) */
                        this.props.setOrderNumber(previousOrderList.length)
                    }}>
                    <Link to="/products">Go Back</Link>
                    </button>
                </div>
               
                
                <div className="Tools">
                <img className="Image" src={`https://${item.imageUrl}`} alt="item yok" />
                <p>{item.name}</p>
                
                </div>
                <button onClick={() => {
                    this.setState({ orderedList: [...this.state.orderedList, item] })
                    }} className="myButton">Add To Cart</button>
            </div>
        )
    }
}

export default DetailedScreen;