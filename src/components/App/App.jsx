import React, { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import s from './App.module.css';

export const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = feedbackType => {
    setVotes({
      ...votes,
      [feedbackType]: votes[feedbackType] + 1,
    });
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = votes;

    return Math.round((100 / countTotalFeedback()) * good);
  };

  const countTotalFeedback = () => {
    const { good, bad, neutral } = votes;

    return good + bad + neutral;
  };

  const { good, bad, neutral } = votes;
  const totalFeedback = countTotalFeedback();

  return (
    <div className={s.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!!totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
