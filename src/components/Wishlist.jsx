import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import '../styles/Wishlist.css'


const Wishlist = () => {

    const [wishlistData, setWIshlistData] = useState([]);

    const getData = () => {
        const wishlistMovie = JSON.parse(localStorage.getItem('wishlistMovie')) || [];
        setWIshlistData(wishlistMovie);
    }
    useEffect(() => {
        getData();
    }, [])

    const bookingButtonHandler = () => {
        let movieBooking = currentMovie;
        localStorage.setItem('currentMovieBooking', JSON.stringify(movieBooking));
    }

    const wishlistRemoveHandler = (movie, index) => {
        wishlistData.splice(index, 1);
        localStorage.setItem('wishlistMovie', JSON.stringify(wishlistData));
        alert(`${movie.title} removed from wishlist`);
        getData();
    }

    return (
        <div>
            <Nav />
            <div className="myWishlist">
                <h1>My Wishlist</h1>
                <div className="wishlist-section" >
                    {wishlistData.map((movie, index) => (
                        <div className="wishlist-container" key={movie.id} >
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt="Movie Poster"
                            />
                            <h2>{movie.title}</h2>
                            <div className="wishlist-langBtn" >
                                <p>{movie.original_language}</p>
                                <p>{movie.vote_average}</p>
                            </div>
                            <div className="wishlist-btn" >
                                <button className="btn1" onClick={bookingButtonHandler} ><Link to='/seatbooking' style={{ textDecoration: 'none', color: 'black' }} >Book Tickets</Link></button>
                                <button className="btn2" onClick={() => wishlistRemoveHandler(movie, index)} >Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Wishlist;