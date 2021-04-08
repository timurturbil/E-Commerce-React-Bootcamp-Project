import './LoginScreen.scss'
import mountain from "../../assets/mountain.png"
import { Link } from "react-router-dom";
import React, {useEffect} from 'react';
import { useHistory } from "react-router";
const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    emailError,
    passwordError,
    hasAccount,
    setHasAccount,
  
  } = props;
  const history = useHistory();

  useEffect(() => {
    console.log("history pushhhhhhhh5555555")
    history.push({
      pathname:  "/loginScreen",
   });
  }, [])
  return (
    <>
      <nav>
        <Link to="/">
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
                <input type="text" value={email} autoFocus required onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <p className="errMsg">{emailError}</p>
                <label></label>
                <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <p className="errMsg">{passwordError}</p>
                <label></label>
               {/*  <Link to="/"> */}
                <button onClick={handleLogin}>SIGN IN</button>
                {/* </Link> */}

                <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Create one now.</span></p>
              </>
            ) : (
              <>
                <input type="text" /* required onChange={(e) => setUserName(e.target.value)} */ placeholder="First Name" />
                <label></label>
                {/* <input type="text" required onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"  />
                         <label></label> */}
                <input type="text" value={email} autoFocus required onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <p className="errMsg">{emailError}</p>
                <label></label>
                <input type="text" required placeholder="Date of Birth (MM/DD/YYYY)" />
                <label></label>
                <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <p className="errMsg">{passwordError}</p>
                <label></label>
                <button onClick={handleSignup}>CREATE ACCOUNT</button>
                <p>Already have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
