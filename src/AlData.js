import Dailymotion from 'react-dailymotion';
import { Component} from 'react';

class FetchData extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch(`https://api.dailymotion.com/videos?channel=${this.props.category}&limit=${this.props.fetchedNumber}&search=${this.props.topic}&flags=verified`)
    .then(response => response.json())
    .then(data =>{ 
      
      
      this.setState({data: data})})
    .catch(error => console.log(error))
}

  render() {
    console.log(this.state.data.list)
    console.log(this.state.data.list && this.state.data.list.map(item => console.log(item)))
    return (
      <div className="App" ref={el => (this.div = el)}> 
        {this.state.data.list && this.state.data.list.map((item,index) => 
           <Dailymotion
          video={item.id}
          uiTheme="light"
          autoplay={false}
        /> 
          
        )}
      </div>
    );
  }
}

export default FetchData;