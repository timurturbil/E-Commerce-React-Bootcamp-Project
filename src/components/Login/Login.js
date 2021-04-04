import React from 'react'
import './Login.scss'
import mountain from "../../assets/mountain.png"

const Login = (props) => {
    const {email, setEmail,password, setPassword,handleLogin,handleSingUp,hasAccount,setHasAccount,emailError,passwordError}=props;
    return (
        <>
        <nav>
            <img src={mountain}/>
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
                <input type="text" value={email} autoFocus required onChange={(e) => setEmail(e.target.value)} placeholder="Email"  />
                <p className="errMsg">{emailError}</p>
                <label></label>
                <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <p className="errMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>SIGN IN</button>
                        <p>Don't have an account ? <span onClick = {() => setHasAccount(!hasAccount)}>Create one now.</span></p>
                        </>
                    ): (
                        <>
                        <button onClick={handleSingUp}>CREATE ACCOUNT</button>
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
