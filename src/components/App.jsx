import React, { Component } from 'react';
import { Container } from './App.styled';
import { Title } from './Title/Title';
import { StatisticButtons } from './StatisticButtons/StatisticButtons';
import { StatisticResults } from './StatisticResults/StatisticResults';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  statisticsCounter = item => {
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
      <Container>
        <Title />
        <StatisticButtons
          buttons={Object.keys(this.state)}
          statisticsCounter={this.statisticsCounter}
        />
        <StatisticResults
          statistics={this.state}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </Container>
    );
  }
}
