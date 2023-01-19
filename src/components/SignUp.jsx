import React from "react";
import "../styles/SignUp.css"

const SignUp = () => {


    return(
        <div className="signup-container" >
            <span className="symbol" >&#x1F512;</span>
            <h2>Sign Up</h2>
            <form className="signup-form" >
                <div className="signup-name" >
                    <label for="name" >Name : <span>*</span></label>
                    <input type="text" id="name" placeholder="Name" required />
                </div>
                <div className="signup-email" >
                    <label for="email" >Email : <span>*</span></label>
                    <input type="email" id="email" placeholder="Email" required />
                </div>
                <div className="signup-password" >
                    <label for="" >Password : <span>*</span></label>
                    <input type="password" placeholder="Password" required />
                </div>
                <div>
                    <button type="submit" >Register</button>
                </div>
            </form>
            <div className="signup-account" >
                <p>Already have an account?</p>
                <p>Sign In</p>
            </div>
        </div>
    )
}

export default SignUp;