import React, { useState, useEffect } from 'react';
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
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    const { good, bad, neutral } = votes;
    const votesCount = good + bad + neutral;

    setTotalFeedback(votesCount);
    setPositivePercentage(Math.round((100 / votesCount) * good));
  }, [votes]);

  const onLeaveFeedback = feedbackType => {
    setVotes({
      ...votes,
      [feedbackType]: votes[feedbackType] + 1,
    });
  };

  return (
    <div className={s.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(votes)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!!totalFeedback ? (
          <Statistics
            votes={votes}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
