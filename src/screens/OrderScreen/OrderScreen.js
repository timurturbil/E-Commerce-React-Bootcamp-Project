import { Component } from "react";
import {
  Link
} from "react-router-dom";
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
      <div>
        <div>
          <Link to="/">Go Back</Link>
        </div>
        {orderList && orderList.map((item, index) => {
          return (
            <div className="majorImage" data-aos="zoom-in-up" key={index}>

              <img src={`https://${item.imageUrl}`} alt="item yok" />
              <button onClick={() => this.removeItem(item.id)}>Delete Item</button>
              <p>{item.price.current.text} ||  {item.name}</p>
            </div>

          )
        })}
      </div>
    )
  }
}

export default OrderScreen;