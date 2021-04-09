import { Component } from "react";
import './DetailedScreen.css';
class DetailedScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentItem: {},
            orderedList: [],
            wishList: [],
        }
    }
    componentDidMount() {
        window.scrollTo({
            top: 0
        })
        this.setState({ CurrentItem: JSON.parse(localStorage.getItem('CurrentItem')), orderedList: [] })
    }
    componentDidUpdate() {
        const previousOrderList = JSON.parse(localStorage.getItem('OrderList')) || []
        const stateList = this.state.orderedList
        const MyOrderList = previousOrderList.concat(stateList);
        localStorage.setItem("OrderList", JSON.stringify(MyOrderList))
        const previousWishList = JSON.parse(localStorage.getItem('WishList')) || []
        const wishList = this.state.wishList
        const myWishList = previousWishList.concat(wishList);
        localStorage.setItem("WishList", JSON.stringify(myWishList))

    }
    render() {
        let item = this.state.CurrentItem;
        return (
            <div className="mainMyItems">
                <div className='container'>
                    <div className='background-element' id='background-element'>
                    </div>
                    <div style={{
                        height: "400px",
                        width: "312px",
                        background: "#ccc",
                        background: `url(https://${item.imageUrl})`,
                        backgroundSize: "cover",
                        boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.2)",
                        zIndex: "10",
                        position: "relative",
                        backgroundPosition: "center top",
                    }} ></div>
                    <div className='window'>
                        <div className='main-content'>
                            <h2>{item.brandName}</h2>
                            <h3>{item.name}</h3>
                            <div className='divider'></div>
                            <div className='purchase-info'>
                                <div className='price'>{item.price ? item.price.current.text: ""}</div>
                            </div>
                            <div className="myButtons">
                                <button onClick={() => {
                                    this.setState({ orderedList: [...this.state.orderedList, item] })
                                }} className="myButton17">Add To Cart</button>
                                <button onClick={() => {
                                    this.setState({ wishList: [...this.state.wishList, item] })
                                }} className="myButton18">Add To Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default DetailedScreen;
