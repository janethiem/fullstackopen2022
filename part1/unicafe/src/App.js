import { useState } from 'react';
import Button from './Button';

const goodString = 'Good';
const neutralString = 'Neutral';
const badString = 'Bad';
const totalString = 'Total';
const averageScoreString = 'Average Score';
const positiveFeedbackString = 'Percentage Positive Feedback';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const totalFeedbackCount = () => (good + neutral + bad);
  const averageFeedbackScore = () => {
    const divisor = totalFeedbackCount();
    return (divisor !== 0 ? ((good - bad) / divisor) : 0);
  }
  const percentagePositiveFeedback = () => {
    const divisor = totalFeedbackCount();
    return (divisor !== 0 ? (good / divisor * 100) : 0)
  };


  return(
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text={goodString}/>
      <Button handleClick={handleNeutralClick} text={neutralString}/>
      <Button handleClick={handleBadClick} text={badString}/>

      <h1>Statistics</h1>
      <div>{goodString}: {good}</div>
      <div>{neutralString}: {neutral}</div>
      <div>{badString}: {bad}</div>
      <div>{totalString}: {totalFeedbackCount()}</div>
      <div>{averageScoreString}: {averageFeedbackScore()}</div>
      <div>{positiveFeedbackString}: {percentagePositiveFeedback()}%</div>
    </>
  )
}

export default App;