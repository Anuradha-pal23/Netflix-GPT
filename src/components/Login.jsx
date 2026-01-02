
import { useState } from "react";
import Header from "./Header";

function Login(){
    let[isSignedInForm,setIsSignedInForm]=useState(true);

    function toggleSignIn(){
        setIsSignedInForm(!isSignedInForm);
    }
    return(
        <>
        <Header/>
        <div className="background-img">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg" alt="Background Image" className="netflix-background"/>
        </div>
        <form className="form">
            <h2 className="sign-text">{isSignedInForm?"Sign In":"Sign Up"}</h2>
            <input type="email" placeholder="enter email" className="email-input"/>
           { isSignedInForm ? null : <input type="text" placeholder="enter Name" className="name-input"/>}
            <input type="password" placeholder="enter password" className="password-input"/>
            <button className="sign-in">{isSignedInForm?"Sign In":"Sign Up"}</button>
            <span className="check">
            <input type="checkbox" className="Remember me"/> <span className="Remember-text">Remember Me</span></span>
             <p className="p" onClick={toggleSignIn}>{isSignedInForm?"New to Netflix ?: Sign Up Now":"Already Registered?Sign In Now"}</p>
        </form>
        </>
    )
}
export default Login;