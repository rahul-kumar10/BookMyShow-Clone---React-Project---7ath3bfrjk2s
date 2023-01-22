import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/BookingConfirmation.css"
import Nav from './Nav';


const BookingConfirmation = () => {

    const [loading, setLoading] = useState(true);

    const bookingData = JSON.parse(localStorage.getItem('bookingDataValue'))
    const movieSelected = JSON.parse(localStorage.getItem('currentMovieBooking'));
    const navigate = useNavigate();

    const homeButtonHandler = () => {
        navigate('/');
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    if (loading) {
        return <div className="loading">
            <img src="https://cdn.discordapp.com/attachments/707486765136740384/1013180271715160144/loading-gif.gif" width={300} alt="" />
            <h2>Payment Proccessing...</h2>
        </div>
    }
    else {
        return (
            <>
                <Nav />
                <div className='confirmation-container'>
                    <h2>Your Ticket has been Successfully Booked</h2>
                    <div className="container">
                        <h2 id='txt'>Your Movie Ticket Details Are..</h2>
                        <h3>Movie Name :- <span>{movieSelected.title}</span></h3>
                        <h3>Cinema     :- <span>{bookingData.cinema}</span></h3>
                        <h3>Date       :- <span>{bookingData.date}</span></h3>
                        <h3>Time       :- <span>{bookingData.time}</span></h3>
                        <h3>No of seats       :- <span>{bookingData.seat.length}</span></h3>
                        <h3 className="seats-container" >
                            {bookingData.seat.map((seat, index) => {
                                <div className="seats" key={index} >
                                    <span>{seat}</span>
                                    {/* <span>-</span>
                                <span>{seat[1]}</span> */}
                                </div>
                            })}
                        </h3>
                    </div>
                    <button onClick={homeButtonHandler} className='btn'>Go To Homepage</button>
                </div>
            </>
        )
    }
}

export default BookingConfirmation;