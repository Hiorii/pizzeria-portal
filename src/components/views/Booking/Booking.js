import React from 'react';
import PropTypes from 'prop-types';

const Booking = (props) => {
  return(
    <div>
      {props.match.params.id}
    </div>
  );
};

Booking.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Booking;
