import { Component } from "react";
import {
  Link
} from "react-router-dom";
import './OrderScreen.css';
class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: []
    }
  }
  componentDidMount() {
    this.setState({ orderList: JSON.parse(localStorage.getItem("OrderList")) })
  }
  componentDidUpdate(prevProps, prevState) {
    var items = JSON.parse(localStorage.getItem("OrderList"));
    this.props.setOrderNumber(items.length)

    
    console.log(items)
    console.log(this.state.orderList)
    if (items.length !== this.state.orderList.length) {
      this.setState({ orderList: JSON.parse(localStorage.getItem("OrderList")) })
    }
  }

  removeItem(id) {
    this.setState({ orderList: [] })
    var items = JSON.parse(localStorage.getItem("OrderList"));
    items = items.filter(function (e) { return e.id !== id; });
    localStorage.setItem("OrderList", JSON.stringify(items));
  }
  render() {
    let orderList = this.state.orderList;
    return (
      <div className="mainOrderScreen">
        <div>
          <Link to="/products">Go Back</Link>
        </div>
        {orderList && orderList.length > 0 ? orderList.map((item, index) => {
          return (
            <div className="majorItem5" data-aos="zoom-in-up" key={index}>

             <img className="myImage5" style={{width: "400px", height: "300px"}} src={`https://${item.imageUrl}`} alt="item yok" />
              <button onClick={() => this.removeItem(item.id)}>Delete Item</button>
              <p> {item.name}</p>
              {/* <p>{item.price.current.text} ||  {item.name}</p> */}
            </div>

          )
        }): <div className="OrderListMessage">
          <div className="OrderListMessage2">
          <h4>Your CartList Is Empty</h4>
          </div>
        </div> }
      </div>
    )
  }
}

export default OrderScreen;