import  {Component} from "react";
// const Button = () => <button>Good</button>;

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => { };
  countPositiveFeedbackPercentage = () => { };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button>Good</button>
        <button>Neutral</button>
        <button>Nad</button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Nad: {this.state.bad}</li>
        </ul>
      </>
    );

  }
}


