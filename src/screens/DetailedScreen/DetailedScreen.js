import { Component } from "react";
import {

    Link
} from "react-router-dom";
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
        console.log(item.imageUrl)
        return (
            <div className="mainMyItems">
                <div className='container'>
                    <div className='background-element' id='background-element'>
                    </div>
                    <div style={{
                          height: "550px",
                          width: "400px",
                          background: "#ccc",
                          background: `url(https://${item.imageUrl})`,
                          backgroundSize: "cover",
                          boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.2)",
                          zIndex: "10",
                          position:"relative",
                          backgroundPosition:"center top",
                    }} ></div>
                    <div className='window'>
                        <div className='main-content'>
                            <h2>{item.brandName}</h2>
                            <h3>{item.name}</h3>
                            <div className='divider'></div>

                            <div className='purchase-info'>
                                <div className='price'>£399.00</div>
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

export default DetailedScreen;


{/* <div>
                 <div className="GoBackButton">
                    <button style={{width: "100px", height: "50px"}} onClick={() => {
                        const previousOrderList = JSON.parse(localStorage.getItem('OrderList')) || []
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
                <button onClick={() => {
                    this.setState({ wishList: [...this.state.wishList, item] })
                    }} className="myButton">Add To Wishlist</button>
            </div> */}



