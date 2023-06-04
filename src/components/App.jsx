import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = item => {
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => {
      return (acc += val);
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    let positive = Object.entries(this.state).reduce((acc, [key, value]) => {
      if (key === 'good') {
        return (acc += value);
      }
      return acc;
    }, 0);
    let positivePersentage = Math.round(
      (positive * 100) / this.countTotalFeedback()
    );
    return positivePersentage;
  };
  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <Statistics
          statistics={this.state}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}
