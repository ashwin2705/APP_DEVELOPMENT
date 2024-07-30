
import React from 'react'
import Navbar from './Navbar'

import SearchComponent from './SearchComponent'
export default function Home() {
  return (
    <div>
        {/* <div className='homepage'>
      <div className='book'>
      Book
      </div>
    </div> */}
    <Navbar/>
    <SearchComponent/>
    </div>
  )
}



// import React, { useState } from 'react';
// import Navbar from './Navbar'
// import './Home.css'

// function BookingForm({ addReservation }) {
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [date, setDate] = useState('');
  
  //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newReservation = { name, email, date };
    //     addReservation(newReservation);
    //     setName('');
    //     setEmail('');
    //     setDate('');
    //   };
    
    //   return (
      //     <div>
      // <Navbar/>
      //      <div className='homepage'>
      //         <div className='hom'>
      //            <img src="https://promos.makemytrip.com/altaccoimages/listing/houseboat_dt.jpeg" alt="houseboat"/>
      //          </div>
      //     {/* <form className="booking-form" onSubmit={handleSubmit}>
      //       <div>
      //         <label>Name:</label>
      //         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      //       </div>
      //       <div>
      //         <label>Email:</label>
      //         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      //       </div>
      //       <div>
//         <label>Date:</label>
//         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//       </div>
//       <button type="submit">Book</button>
//     </form> */}
//     </div>
//     </div>
//   );
// }

// export default BookingForm;