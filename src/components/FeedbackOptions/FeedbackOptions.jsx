import PropTypes from 'prop-types';
import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = p => {
  return (
    <div className="voting">
      {p.options.map(option => (
        <button
          onClick={() => p.onLeaveFeedback(option)}
          key={option}
          className={s.votingBtn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
