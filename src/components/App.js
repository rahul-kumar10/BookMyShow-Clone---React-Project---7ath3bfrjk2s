import React from 'react'
import '../styles/App.css';
import Nav from "./Nav";
import Movies from './Movies';
import Genres from './Genres';
import MovieCard from './MovieCard';
import SignUp from './SignUp';
import SeatBooking from './SeatBooking';
import Checkout from './Checkout';

const App = () => {


  return (
    <div id="main">
        <Movies />
        {/* <MovieCard /> */}
        {/* <SignUp/> */}
        {/* <SeatBooking /> */}
        {/* <Checkout /> */}
    </div>
  )
}


export default App;
