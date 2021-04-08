import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FirstScreen from "./screens/FirstScreen/FirstScreen"
import Navbar from "./components/Navbar/Navbar"
import LoginScreen from "./screens/LoginScreen/LoginScreen"
import DetailedScreen from "./screens/DetailedScreen/DetailedScreen"
import OrderScreen from "./screens/OrderScreen/OrderScreen"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import Footer from "./components/Footer/Footer"
import React, { useState, useEffect } from 'react';
import fire from './firebase/fire';
import WishScreen from './screens/WishScreen/WishScreen';

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [OrderNumber, setOrderNumber] = useState(JSON.parse(localStorage.getItem("OrderList")).length || 0);
  const [category, setCategory] = useState("boots");
  const [fetchData, setFetchData] = useState(false);
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }
  const handleLogout = () => {
    fire.auth().signOut();
  }
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user)
      } else {
        setUser("");
      }
      console.log(user + "it is userrrrrrr")
    });
  }

  useEffect(() => {
    authListener();
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/favorites">
            <Navbar LogOut={handleLogout} setCategory={setCategory} setFetchData={setFetchData} OrderNumber={OrderNumber} />
            <WishScreen />
            <Footer />
          </Route>
          <Route path="/detailed">
            <Navbar LogOut={handleLogout} setCategory={setCategory} setFetchData={setFetchData} OrderNumber={OrderNumber} />
            <DetailedScreen setOrderNumber={setOrderNumber} />
            <Footer />
          </Route>
          <Route path="/order">
            <Navbar LogOut={handleLogout} setCategory={setCategory} setFetchData={setFetchData} OrderNumber={OrderNumber} />
            <OrderScreen setOrderNumber={setOrderNumber} />
            <Footer />
          </Route>
          <Route exact path="/" >
            <Navbar LogOut={handleLogout} setCategory={setCategory} setFetchData={setFetchData} OrderNumber={OrderNumber} />
            <FirstScreen setCategory={setCategory} />
            <Footer />
          </Route>
          <Route path="/products" >
            <Navbar LogOut={handleLogout} setCategory={setCategory} setFetchData={setFetchData} OrderNumber={OrderNumber} />
            <HomeScreen category={category} setFetchData={setFetchData} fetchData={fetchData} />
            <Footer />
          </Route>
          {/* <Route path="/loginScreen" >
            <LoginScreen email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              emailError={emailError}
              passwordError={passwordError}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
            />
          </Route> */}
          {user ?
            <>
              <Navbar LogOut={handleLogout} OrderNumber={OrderNumber} />
              <FirstScreen setCategory={setCategory} />
              <Footer />
            </> :
            <LoginScreen email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              emailError={emailError}
              passwordError={passwordError}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
            />
          }
        </Switch>
      </div>
    </Router>
  );

}

export default App;