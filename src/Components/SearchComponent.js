import React, { useState } from 'react';
import './SearchComponent.css';
import { useNavigate } from 'react-router-dom';
const SearchComponent = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
    // Handle the search logic here
    console.log('Location:', location);
    console.log('Check-In Date:', checkInDate);
    console.log('Check-Out Date:', checkOutDate);
    console.log('Guests:', guests);
  };
  const navigate=useNavigate();
  return (
    <div className='bgse'>
    <div className="search-container">
      <h1>Houseboats in Kerala</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="City, area or property"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="date"
          placeholder="Check-In"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="Check-Out"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
        {/* <input
          type="number"
          placeholder="Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        /> */}

               <select
            value={guests}
            // onChange={(e) => setGuests(e.target.value)}
            // className={errors.guests ? 'error' : ''}
          >
            <option value="" disabled>Select Guests</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6 Guests</option>
            <option value="7">7 Guests</option>
            <option value="8">8 Guests</option>
            <option value="9">9 Guests</option>
            <option value="10">10 Guests</option>
          </select>
          {/* {errors.guests && <span className="error-message">{errors.guests}</span>} */}
      </div>
      <br></br>
      <br></br>
      <div className='searchbutton'>
        <button onClick={()=>{navigate("/Payment")}}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
