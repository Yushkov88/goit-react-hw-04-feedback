import PropTypes from 'prop-types';
import React from 'react';

const Statistics = p => {
  return (
    <>
      <p>Good: {p.good}</p>
      <p>Neutral: {p.neutral}</p>
      <p>Bad: {p.bad}</p>
      <p>Total: {p.total}</p>
      <p>Positive feedback: {p.positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
