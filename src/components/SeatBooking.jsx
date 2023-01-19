import React, { useState } from "react";
import "../styles/SeatBooking.css"

const SeatBooking = () => {

    const [selectedSeat, setSelectedSeat] = useState([]);

    const onSeatClick = (index) => {
        let tempArray = [...selectedSeat];
        let seatIndex = tempArray.indexOf(index);
        if(seatIndex > -1) {
            tempArray.splice(seatIndex, 1);
        } else {
            tempArray.push(index);
        }
        setSelectedSeat(tempArray);
    };


    return (
        <div className="seatBooking-container" >
            <div>
                <h2>Book Ticket</h2>
            </div>
            <div className="booking-details" >
                <div className="cinema" >
                    <label for="cinema-name" >Cinema</label>
                    <select id="cinema-name" >
                        <option value="" >Select Cinema</option>
                        <option value="wave" >Wave Lucknow</option>
                        <option value="cinepolis" >Cinepolis One Awadh Cenetr Mall, Gomti Nagar</option>
                        <option value="singapurmall" >PVR Singapur Mall, Gomti Nagar</option>
                    </select>
                </div>
                <div className="booking-date" >
                    <label for="date" >Booking Date</label>
                    <input type="date" id="date" />
                </div>
                <div className="booking-time" >
                    <label for="cinema-time" >Time</label>
                    <select id="cinema-time" >
                        <option value="" >Select Time</option>
                        <option value="9:30" >9:30</option>
                        <option value="12:30" >12:30</option>
                        <option value="15:30">15:30</option>
                        <option value="18:30">18:30</option>
                        <option value="21:30">21:30</option>
                    </select>
                </div>
            </div>
            <div className="screen-container" >
                <div className="na" >
                    <p></p>
                    <span>N/A</span>
                </div>
                <div className="selected" >
                    <p></p>
                    <span>Selected</span>
                </div>
                <div className="occupied" >
                    <p></p>
                    <span>Occupied</span>
                </div>
            </div>
            <div className="screen" >

            </div>
            <div className="seats" >
                {[...Array(10)].map((_, i) => (
                    <div key={i}>
                        {[...Array(10)].map((_, j) => (
                            <p className={selectedSeat.indexOf(i*10+j) > -1 ? 'selected-seat' : ''}
                            onClick={() => onSeatClick(i*10+j)} key={j}>{`${i}-${j}`}</p>
                        ))}
                    </div>
                ))}
            </div>
            <div className="booking-btn" >
                <button type="submit" >Submit</button>
            </div>
        </div>
    )
}

export default SeatBooking;