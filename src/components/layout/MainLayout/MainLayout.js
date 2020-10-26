import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const MainLayout = ({children}) => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <PageNav />
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;
