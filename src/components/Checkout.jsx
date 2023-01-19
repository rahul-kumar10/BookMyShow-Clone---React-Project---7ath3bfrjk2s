import React from "react";
import '../styles/Checkout.css';

const Checkout = () => {


    return (
        <div className="checkout-container" >
            <button type="submit" >Back</button>
            <div className="checkout-details" >
                <div className="checkout-summary" >
                    <h1>Summary</h1>
                    <h2>Movie Title</h2>
                    <div className="ticket-type" >
                        <p>Classic Ticket</p>
                        <p>&#8377; 250</p>
                    </div>
                    <div className="noOfTicket" >
                        <p>Number of tickets</p>
                        <input type="number" min="0" max="15" />
                    </div>
                    <div className="convenience" >
                        <p>Convenience Fee (1.75%)</p>
                        <p>&#8377; 8.75</p>
                    </div>
                    <hr/>
                    <div className="totalamount" >
                        <p>Sub total</p>
                        <p>&#8377; 508.75</p>
                    </div>
                </div>
                <div className="checkout" ></div>
            </div>
        </div>
    )
}

export default Checkout;