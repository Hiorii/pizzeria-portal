import React from 'react';
import Kitchen from '../Kitchen/Kitchen';
import Waiter from '../Waiter/Waiter';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <>
      <h1>dashboard</h1>
      <h3>kitchen</h3>
      <Kitchen />
      <h3>waiter</h3>
      <Waiter />
    </>
  );
};

export default Dashboard;
