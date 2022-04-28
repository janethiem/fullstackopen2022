import { useState } from 'react';
import Button from './Button';

const goodString = 'Good';
const neutralString = 'Neutral';
const badString = 'Bad';

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
      <div>{goodString}: {good}</div>
      <div>{neutralString}: {neutral}</div>
      <div>{badString}: {bad}</div>
    </>
  )
}

export default App;