import { useEffect, useState } from 'react';
import Button from './Button';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVotes, setMostVotes] = useState(0);
  useEffect(() => {
    // Find the index of the anecdote with the most
    // votes and update the value of mostVotes.
    const maxValue = votes.reduce( (a, b) => {
      return Math.max(a,b);
    }, -Infinity);
    setMostVotes(votes.indexOf(maxValue));
  }, [votes]);

  /**
   * Sets random index value to select a random anecdote.
   * Has recursive logic to avoid displaying the same anecdote twice
   * in a row.
   */
  const selectRandomAnecdote = () => {
    if (anecdotes.length > 1)
    {
      const newSelected = Math.floor(Math.random() * anecdotes.length);
      newSelected !== selected ? setSelected(newSelected) : selectRandomAnecdote();
    }
    else
    {
      console.log('Warning: Only one anecdote defined. Please add more anecdotes.')
      setSelected(0)
    }
  }

  /**
   * Increments the vote for the currently selected anecdote.
   */
  const incrementVote = () => {
    const votesCopy = [ ...votes ];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick={incrementVote} text='vote'/>
      <Button handleClick={selectRandomAnecdote} text='next anecdote'/>
      <h1>Anecdote with the most votes</h1>
      <div>{anecdotes[mostVotes]}</div>
      <div>has {votes[mostVotes]} votes</div>
    </>
  )
}

export default App;