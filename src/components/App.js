// import React, {Component} from "react";
import {useState} from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Notification from "./notification/Notification";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics ";

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = {good, neutral, bad};

  const onHandleClick = (e) => {
     switch (e.target.name) {
      case 'good':
       setGood(prevState => prevState + 1);
      break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
      break;
      case 'bad':
        setBad(prevState => prevState + 1);
      break;
       default: return;
     }
  }

  const countTotalFeedback = () => Object.values(state).reduce((a, b) => a + b)

  const countPositiveFeedbackPercentage = () => {
    const {good} = state;
    return Math.round( good / countTotalFeedback() * 100)
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={onHandleClick}/>
      </Section>
      <Section title="Please leave feedback">
        {countTotalFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}/> : <Notification message='No feedback given'/>}
      </Section>
    </>    
  );
}

export default App;