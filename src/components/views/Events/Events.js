import React from 'react';
import PropTypes from 'prop-types';
import styles from './Events.module.scss';

const Events = (props) => (
  <div className={styles.component}>
    <h2>Order views</h2>
    <span>{props.match.params.id}</span>
  </div>
);

Events.propTypes = {
  match: PropTypes.shape({
    params:PropTypes.shape({
      id:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default Events;
