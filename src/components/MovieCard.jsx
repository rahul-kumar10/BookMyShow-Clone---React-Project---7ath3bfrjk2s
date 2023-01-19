import React from "react";
import '../styles/MovieCard.css'

const MovieCard = ({ currentMovie, movieCardCloseHandler }) => {

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
                <p className="movie-price" >&#8377; {Math.floor(Math.random() * (300 - 250 + 1)) + 250}</p>
                <div className="card-btn" >
                    <button>Book Tickets</button>
                    <button>Wishlist</button>
                </div>
            </div>
            <div className="card-closeBtn" >
                <button onClick={movieCardCloseHandler} >X</button>
            </div>
        </div>
    )
}

export default MovieCard;