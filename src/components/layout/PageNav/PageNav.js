import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from '@material-ui/core';
import styles from './PageNav.scss';

const PageNav = () => {
  return (
    <nav className={styles.component}>
      <Button component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
      <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
      <Button component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Button>
      <Button component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
      <Button component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Button>
    </nav>
  );
};

export default PageNav;
