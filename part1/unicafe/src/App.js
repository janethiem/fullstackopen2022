import { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics';
import { goodString, neutralString, badString } from './Strings';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return(
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text={goodString}/>
      <Button handleClick={handleNeutralClick} text={neutralString}/>
      <Button handleClick={handleBadClick} text={badString}/>

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App;