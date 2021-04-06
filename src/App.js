import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FirstScreen from "./screens/FirstScreen/FirstScreen"
import Navbar from "./components/Navbar/Navbar"
import LoginScreen from "./screens/LoginScreen/LoginScreen"
import DetailedScreen from "./screens/DetailedScreen/DetailedScreen"
import OrderScreen from "./screens/OrderScreen/OrderScreen"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/detailed">
            <DetailedScreen />
          </Route>
          <Route path="/order">
            <OrderScreen />
          </Route>
          <Route exact path="/" component={FirstScreen}>
            <Navbar />
            <FirstScreen/>
            <Footer/>
          </Route>
          <Route path="/products" component={HomeScreen}>
            <Navbar />
            <HomeScreen/>
            <Footer/>
          </Route>
          <Route path="/loginScreen" component={LoginScreen}>
            <LoginScreen/>
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;