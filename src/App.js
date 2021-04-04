import "./App.css";
import { Component, useEffect, useState } from "react";
import fire from "./fire";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalide-email":
          case "auth/user-disable":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSingUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div>
      {user ? (
           <Logout handleLogout={handleLogout}/>
      ) : (
        <Login email={email} setEmail={setEmail} 
        password={password} setPassword={setPassword} 
        handleLogin={handleLogin} handleSingUp={handleSingUp}
        hasAccount={hasAccount} setHasAccount={setHasAccount}
        emailError={emailError} passwordError={passwordError} />
      )}
     

     
    </div>
  );
};

export default App;

// // constructor(props){
// //   super(props)
// //   this.state = {
// //     data: {}
// //   }
// // }

// // componentDidMount(){//T-shirt
// //   fetch("https://asos2.p.rapidapi.com/products/v2/list?offset=0&categoryId=4209&limit=10&store=US&country=US&priceMin=10&currency=USD&priceMax=1000&sort=freshness&lang=en-US&q=shoes&sizeSchema=US", {
// //     "method": "GET",
// //     "headers": {
// //       "x-rapidapi-key": "f1a0f880b9msh6718e6f56226525p166972jsn0a4691fbd022",
// //       "x-rapidapi-host": "asos2.p.rapidapi.com"
// //     }
// //   })
// //   .then(response => response.json()).then(response => this.setState({data: response}))
// //   .catch(err => {
// //     console.error(err);
// //   });
// // }
// render() {
//   let dataList = this.state.data.products;
//  console.log(dataList)

{
  /* {dataList && dataList.map((item, index) => {
        return (
            <div className="majorImage" data-aos="zoom-in-up" key={index}>
              <img src={`https://${item.imageUrl}`} alt="item yok"/>
              <p>{item.price.current.text} ||  {item.name}</p>
            </div>
        )
    })} */
}

/*   useEffect(() => {
      fetch('https://api.dailymotion.com/videos?channel=sport&limit=10&search=man&flags=verified')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
  
    }, [])
   */
/*  var player = ; */
