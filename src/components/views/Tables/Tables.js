import React from 'react';
import {Link} from 'react-router-dom';
import './Tables.module.scss';

const Tables = () => {
  return (
    <div className='.component'>
      <h2>Tables view</h2>
      <Link to='/tables/booking/:id'>Reservated Table</Link>
      <Link to='/tables/booking/new'>New Reservation</Link>
      <Link to='/tables/event/:id'>Event Booked Table</Link>
      <Link to='/tables/event/new'>Event New Reservation</Link>
    </div>
  );
};

export default Tables;
