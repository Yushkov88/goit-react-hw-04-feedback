import React from 'react';
import PropTypes from 'prop-types';

const Notification = p => {
  return <div>{p.message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
