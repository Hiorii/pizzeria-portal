import React from 'react';
import {Link} from 'react-router-dom';
import './Waiter.module.scss';

const Waiter = () => {
  return (
    <div className='.component'>
      <h2>Waiter view</h2>
      <Link to='/waiter/order/new'>New Order</Link>
      <Link to='/waiter/order/:id'>Current Order</Link>
    </div>
  );
};

export default Waiter;
