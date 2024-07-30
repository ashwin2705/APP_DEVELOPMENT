// import React from 'react'
// export default function Browse() {
    //   return (
        //     <div>
        //         <Navbar/>
        //       <SearchComponent/>
        
        //     </div>
        //   )
        // }
import React from 'react';
import './Browse.css';
import SearchComponent from './SearchComponent'
import Navbar from './Navbar'
const boathouses = [
  {
    id: 1,
    name: 'Serenity Boathouse',
    location: 'Alleppey, Kerala',
    checkInTime: '12:00 PM',
    checkOutTime: '10:00 AM',
    facilities: ['WiFi', 'Air Conditioning', 'Meals Included']
  },
  {
    id: 2,
    name: 'Tranquil Waters Boathouse',
    location: 'Kumarakom, Kerala',
    checkInTime: '1:00 PM',
    checkOutTime: '11:00 AM',
    facilities: ['WiFi', 'Fishing Gear', 'Meals Included']
  },
  {
    id: 2,
    name: 'Tranquil Waters Boathouse',
    location: 'Kumarakom, Kerala',
    checkInTime: '1:00 PM',
    checkOutTime: '11:00 AM',
    facilities: ['WiFi', 'Fishing Gear', 'Meals Included']
  },
  {
    id: 2,
    name: 'Tranquil Waters Boathouse',
    location: 'Kumarakom, Kerala',
    checkInTime: '1:00 PM',
    checkOutTime: '11:00 AM',
    facilities: ['WiFi', 'Fishing Gear', 'Meals Included']
  },
  {
    id: 2,
    name: 'Tranquil Waters Boathouse',
    location: 'Kumarakom, Kerala',
    checkInTime: '1:00 PM',
    checkOutTime: '11:00 AM',
    facilities: ['WiFi', 'Fishing Gear', 'Meals Included']
  },
  {
    id: 2,
    name: 'Tranquil Waters Boathouse',
    location: 'Kumarakom, Kerala',
    checkInTime: '1:00 PM',
    checkOutTime: '11:00 AM',
    facilities: ['WiFi', 'Fishing Gear', 'Meals Included']
  },
  {
    id: 2,
    name: 'Tranquil Waters Boathouse',
    location: 'Kumarakom, Kerala',
    checkInTime: '1:00 PM',
    checkOutTime: '11:00 AM',
    facilities: ['WiFi', 'Fishing Gear', 'Meals Included']
  },
  // Add more boathouses as needed
];

const Browse = () => {
  return (
    <div>
    <Navbar/>
    <div  className='hfd'>
    <SearchComponent/> 
    <div className="boathouse-list">
      {boathouses.map(boathouse => (
        <div key={boathouse.id} className="boathouse-card">
          <h2 className="boathouse-name">{boathouse.name}</h2>
          <p className="boathouse-location"><strong>Location:</strong> {boathouse.location}</p>
          <p className="boathouse-time">
            <strong>Check-In:</strong> {boathouse.checkInTime} | <strong>Check-Out:</strong> {boathouse.checkOutTime}
          </p>
          <p className="boathouse-facilities"><strong>Facilities:</strong> {boathouse.facilities.join(', ')}</p>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default Browse;

