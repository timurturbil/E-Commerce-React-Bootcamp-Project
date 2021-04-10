import { Component } from "react";
import {
    Link
} from "react-router-dom";
import './WishScreen.css';
import { BiLogOutCircle, BiX } from "react-icons/bi";
/* 
import '@material/react-icon-button/dist/icon-button.css'; */
class WishScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wishList: [],
            orderedList: [],
        }
    }
    componentDidMount() {
        this.setState({ wishList: JSON.parse(localStorage.getItem("WishList")) ? JSON.parse(localStorage.getItem("WishList")) : [] })
    }
    componentDidUpdate(prevProps, prevState) {
        var items = JSON.parse(localStorage.getItem("WishList")) ? JSON.parse(localStorage.getItem("WishList")) : [];
        const previousOrderList = JSON.parse(localStorage.getItem("OrderList")) ? JSON.parse(localStorage.getItem("OrderList")) : [];
        const stateList = this.state.orderedList
        const MyOrderList = previousOrderList.concat(stateList);
        localStorage.setItem("OrderList", JSON.stringify(MyOrderList))
        if (items.length !== this.state.wishList.length) {
            this.setState({ wishList: JSON.parse(localStorage.getItem("WishList")) ? JSON.parse(localStorage.getItem("WishList")) : [] })
        }
    }

    removeItem(id) {
        this.setState({ wishList: [] })
        var items = JSON.parse(localStorage.getItem("WishList"));
        items = items.filter(function (e) { return e.id !== id; });
        localStorage.setItem("WishList", JSON.stringify(items));
    }
    render() {
        let wishList = this.state.wishList;
        return (
            <div className="mainDiv">
                <div className="GoBack">
                    <Link to="/products">
                        <BiLogOutCircle color="black" size={22} />
                    </Link>
                </div>
                <div className="mainItems8">
                    <div className="WishlistWord">
                        <div className="WishWord">
                            WISHLIST
                        </div>
                    </div>
                    <div className="WishItems">
                        {wishList && wishList.length > 0 ? wishList.map((item, index) => {
                            return (
                                <div className="majorItem4"  key={index}>
                                    <img className="myImage4" src={`https://${item.imageUrl}`} alt="item yok" />
                                    <div className="InfoProduct5">
                                        <h5> {item.name}</h5>
                                        <p>Brand Name: {item.brandName}</p>
                                        <p>{item.price.current.text}</p>
                                    </div>
                                    <button className="removeButton" onClick={() => this.removeItem(item.id)}><BiX color="black" size={40} /></button>
                                    <button onClick={() => {
                                            this.setState({ orderedList: [...this.state.orderedList, item] })
                                        }} className="myButton8">Add To Cart</button>
                                </div>
                            )
                        }) : <div className="wishlistMessage">
                            You don’t have any items in your wishlist yet.
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}

export default WishScreen;