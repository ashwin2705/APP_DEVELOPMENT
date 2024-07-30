import React from 'react';

function ReservationList({ reservations }) {
  return (
    <div className="reservation-list">
      <h2>Booked Reservations</h2>
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>
            <div className="reservation-item">
              <span>Name:</span> {reservation.name}
            </div>
            <div className="reservation-item">
              <span>Email:</span> {reservation.email}
            </div>
            <div className="reservation-item">
              <span>Date:</span> {reservation.date}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationList;
