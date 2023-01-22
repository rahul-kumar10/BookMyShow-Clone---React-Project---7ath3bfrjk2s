import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import BookingConfirmation from '../components/BookingConfirmation'
import Checkout from '../components/Checkout'
import Login from '../components/Login'
import Movies from '../components/Movies'
import PrivateRoute from '../components/PrivateRoute'
import SeatBooking from '../components/SeatBooking'
import SignUp from '../components/SignUp'
import Wishlist from '../components/Wishlist'

const AllRoutes = () => {
  
  
  return (
    <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/seatbooking' element={<PrivateRoute><SeatBooking/></PrivateRoute>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path ='/login' element={<Login  />} />
        <Route path ='/signup' element={<SignUp />} />
        <Route path ='/checkout' element={<Checkout />} />
        <Route path ='/bookingconfirmation' element={<BookingConfirmation />} />  
    </Routes>
  )
}

export default AllRoutes
