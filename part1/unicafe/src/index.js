import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = (props) => {
  return (<div><p>{props.text} {props.value}</p></div>)
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>        
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <Statistic text="good" value ={props.good} />
      <Statistic text="neutral" value ={props.neutral} />
      <Statistic text="bad" value ={props.bad} />
      <Statistic text="all" value ={props.all} />
      <Statistic text="average" value ={props.average} />
      <Statistic text="positive" value ={props.positive} />
    </div>
  );
};

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;

  return (
    <div>
      <h1>give feedback</h1>      
      <Button onClick={handleGoodClick} text="good"/>
      <Button onClick={handleNeutralClick} text="neutral"/>
      <Button onClick={handleBadClick} text="bad"/>
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
