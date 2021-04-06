import './LoginScreen.scss'
import mountain from "../../assets/mountain.png"
import {  useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import fire from '../../firebase/fire';

const Login = () => {
    
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");



  /* const selector = useSelector((state) => state.form); */
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
  // const handleLogout = () => {
  //   fire.auth().signOut();
  // }
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user)
      } else {
        setUser("");
      }
    });
  }

  useEffect(() => {
    authListener();
  },[]);
    return (
        <>
        <nav>
            <Link exact to="/">
              <img src={mountain} />
            </Link>
        </nav>
        <section className="login">
            <div className="loginContainer">
                <div className="header">
                {hasAccount ? (
                     <h1>Sign In <i class="fas fa-lock"></i></h1>
                ) : (
                     <h1>Create Your Account <i class="fas fa-lock"></i></h1>
                )}
                </div>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                         <input type="text" value={email} autoFocus required onChange={(e) => setEmail(e.target.value)} placeholder="Email"  />
                         <p className="errMsg">{emailError}</p>
                         <label></label>
                         <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                         <p className="errMsg">{passwordError}</p>
                         <label></label>
                         {/* <Link className="nav-products mb-2" to="/products"> */}
                         <button onClick={handleLogin}>SIGN IN</button>
                        {/* </Link> */}
                      
                        <p>Don't have an account ? <span onClick = {() => setHasAccount(!hasAccount)}>Create one now.</span></p>
                        </>
                    ): (
                        <>
                         <input type="text" required onChange={(e) => setUserName(e.target.value)} placeholder="First Name"  />
                         <label></label>
                         <input type="text" required onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"  />
                         <label></label>
                         <input type="text" value={email} autoFocus required onChange={(e) => setEmail(e.target.value)} placeholder="Email"  />
                         <p className="errMsg">{emailError}</p>
                         <label></label>
                         <input type="text" required placeholder="Date of Birth (MM/DD/YYYY)"  />
                         <label></label>
                         <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                         <p className="errMsg">{passwordError}</p>
                         <label></label>
                        <button onClick={handleSignup}>CREATE ACCOUNT</button>
                        <p>Already have an account ? <span onClick= {() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
        </>
    )
}

export default Login
