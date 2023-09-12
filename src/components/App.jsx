import { Component } from 'react';

import { Notification } from './notification/Notification';

import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './static/Static';
import { Section } from './section/Section';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  changeOneClick = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }))
  };
  
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral
  };


  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : (this.state.good / total) * 100;
  };


  render() {
    const { good, neutral, bad } = this.state;
    
    return (
      <>
        <Section title="Please leave feedback">
        <FeedbackOptions  option={Object.keys(this.state)}
            onLeaveFeedback={this.changeOneClick} />
        </Section>
        <Section title="Statistics">
        {this.countTotalFeedback() === 0 ? (
         <Notification message="There is no feedback !" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            count={this.countPositiveFeedbackPercentage()}
          />
        )}
        </Section>
      </>
    )
  };
};

