import  {Component} from "react";
import { Section } from "../Sections/Sections";
import { FeedbackOptions } from "../FeedbackOptions";
import { Statistics } from "../Statistics/Statistics";

export class App extends Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 2,
  };
  countTotalFeedback = () => { return this.state.good + this.state.neutral + this.state.bad};
  countPositiveFeedbackPercentage = () => {return Math.round(this.state.good / this.countTotalFeedback() * 100) };

  render() {
    return (
      <><Section title="Please leave feedback">
        <FeedbackOptions/></Section>
        <Section title="Statistics"><Statistics
          good={this.state.good}
          neutral={this.state.neutral} 
          bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/></Section>
      </>
    );

  }
}


