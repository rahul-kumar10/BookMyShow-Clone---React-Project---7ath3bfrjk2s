import React from "react";
import "../styles/Nav.css"


const Nav = ({inputHandler, handleSubmit}) => {

    return (
        <div className="navbar" >
            <img className="logo-image" src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="logo-image" />
            <div className="nav-section1">
                <div className="nav-search" >
                    <input type="text" placeholder="Search" onChange={(event) => inputHandler(event.target.value)} />
                    <button type="button" onClick={() => handleSubmit()} >Search</button>
                </div>
                <button type="button" className="wishlist" >&#9825;</button>
                <div className="nav-loginBtn" >
                    <button type="button" >
                        <span>&#128100;</span> Login !
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav;