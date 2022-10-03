import {useState} from 'react';
import {Section}  from 'components/Section/Section';
import {Statistics}  from 'components/Statistics/Statistics';
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions';
import {Notification} from 'components/Notification/Notification';


// class Counter extends Component{
//   state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
};

const feedbackStatus = { good, neutral, bad };

//   onLeaveFeedback = options => {
//     this.setState({ [options]: this.state[options] + 1})
// }

  const onLeaveFeedback = options => {
    switch (options) { 
      case 'good':
        setGood(good + 1);
        break;
      
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      
      case 'bad':
        setBad(bad + 1);
        break;
      
      default:
        return;
    }
}
  
countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  const total = good + neutral + bad;
  return total;
};

countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  const percentage =
    Math.round((good / this.countTotalFeedback()) * 100) || 0;
  return percentage;
};

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackStatus)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
        }
      

