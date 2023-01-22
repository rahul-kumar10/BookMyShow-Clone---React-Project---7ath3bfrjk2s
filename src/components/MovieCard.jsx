import React, { useEffect, useState } from "react";
import '../styles/MovieCard.css'
import { Link } from 'react-router-dom'


const MovieCard = ({ currentMovie, movieCardCloseHandler }) => {

    const [price, setPrice] = useState(0);

    useEffect(() => {
        const moviePrice = Math.floor(Math.random() * (300 - 250 + 1)) + 250;
        setPrice(moviePrice);
    }, []);
    localStorage.setItem('moviePrice', JSON.stringify(price));

    const wishlistHandler = () => {
        let wishlistArr = JSON.parse(localStorage.getItem('wishlistMovie')) || [];
        wishlistArr.push(currentMovie);
        localStorage.setItem('wishlistMovie', JSON.stringify(wishlistArr));
        alert(`${currentMovie.title} added to wishlist`)
    }

    const bookingButtonHandler = () => {
        let movieBooking = currentMovie;
        localStorage.setItem('currentMovieBooking', JSON.stringify(movieBooking));
    }

    return (
        <div className="movie-card" >
            <div className="card-image">
                <img src={`https://image.tmdb.org/t/p/original${currentMovie.poster_path}`} alt="Poster Image" />
            </div>
            <div className="movie-details" >
                <h2>{currentMovie.title}</h2>
                <h2>&#9733; {currentMovie.vote_average} /10</h2>
                <p>{currentMovie.original_language}</p>
                <p className="movie-runtime" >{Math.floor(Math.random() * (150 - 100 + 1)) + 100} minutes</p>
                <p>{currentMovie.overview}</p>
                <p className="movie-price" >&#8377; <span>{price}</span></p>
                <div className="card-btn" >
                    <Link to='/seatbooking' style={{ textDecoration: 'none', color: 'black' }} ><button className="card-btn1" onClick={bookingButtonHandler} >Book Tickets</button></Link>
                    <button onClick={wishlistHandler} >Wishlist</button>
                </div>
            </div>
            <div className="card-closeBtn" >
                <button onClick={movieCardCloseHandler} >X</button>
            </div>
        </div>
    )
}

export default MovieCard;