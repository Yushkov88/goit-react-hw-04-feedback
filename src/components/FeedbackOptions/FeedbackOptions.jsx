import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <div className="voting">
        {this.props.options.map(option => (
          <button
            onClick={() => this.props.onLeaveFeedback(option)}
            key={option}
            className={styles.votingBtn}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
