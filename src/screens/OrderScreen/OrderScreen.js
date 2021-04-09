import { Component } from "react";
import './OrderScreen.scss';
class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [],
      totalPrice: 0,
    }
  }
  componentDidMount() {
    let myOrderList = JSON.parse(localStorage.getItem("OrderList")) ? JSON.parse(localStorage.getItem("OrderList")) : [];
    let myTotalPrice = 0;
    console.log(myOrderList)
    myOrderList.length > 0 ? myOrderList.map((item, index) => {
      myTotalPrice += item.price.current.value
    }) : myTotalPrice = 0;
    this.setState({ orderList: myOrderList, totalPrice: myTotalPrice })

  }
  componentDidUpdate(prevProps, prevState) {
    let myOrderList = JSON.parse(localStorage.getItem("OrderList")) ? JSON.parse(localStorage.getItem("OrderList")) : [];
    console.log(myOrderList)
    let myTotalPrice = 0;
    myOrderList.map((item, index) => {
      myTotalPrice += item.price.current.value
    })
    var items = myOrderList;
    this.props.setOrderNumber(items.length)
    if (items.length !== this.state.orderList.length) {
      this.setState({ orderList: myOrderList, totalPrice: myTotalPrice })
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
      <main>
        {orderList.length > 0 ? <div className="mainDiv70">
          <div className="shoppingCard">
            {orderList && orderList.map((item, index) => {
              return (
                <div className="basket-product" data-aos="zoom-in-up" key={index}>
                  <div className="item">
                    <div className="product-image">
                      <img className="product-frame" src={`https://${item.imageUrl}`} alt="item yok" />
                    </div>
                    <div className="product-name">
                      <p>Brand Name: {item.brandName}</p>
                      <p>Name: {item.name}</p>
                      <p>Price: {item.price.current.text}</p>
                      <p>Product Code: {item.productCode}</p>
                    </div>
                    <div className="remove">
                      <button onClick={() => this.removeItem(item.id)}>Remove Product</button>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
          <aside>
            <div className="summary">
              <div className="summary-total">
                <div className="total-title">Total</div>
                <div className="total-value final-value" id="basket-total">{this.state.totalPrice}.00</div>
              </div>
              <div className="summary-checkout">
                <button className="checkout-cta">Go to Secure Checkout</button>
              </div>
            </div>
          </aside>
        </div> : <div className="Empty">Your Order List Is Empty</div>}
      </main>
    )
  }
}



export default OrderScreen;