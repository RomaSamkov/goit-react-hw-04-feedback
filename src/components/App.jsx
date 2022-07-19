import { useState } from 'react';
import { Container } from './App.styled';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

export const App = () => {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setgood(prev => prev + 1);
        break;
      case 'neutral':
        setneutral(prev => prev + 1);
        break;
      case 'bad':
        setbad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {!countTotalFeedback() ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </Container>
  );
};
