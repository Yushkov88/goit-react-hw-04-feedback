import { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import styles from './App.module.css';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;

    return Math.round((100 / this.countTotalFeedback()) * good);
  }

  onLeaveFeedback(feedbackType) {
    this.setState({
      ...this.state,
      [feedbackType]: this.state[feedbackType] + 1,
    });
  }

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;

    return good + bad + neutral;
  }

  render() {
    const { good, bad, neutral } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback.bind(this)}
          />
        </Section>
        <Section title="Statistics">
          {!!totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
