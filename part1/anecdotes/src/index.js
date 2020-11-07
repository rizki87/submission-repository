import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const anecdotesLength = props.anecdotes.length;
  const emptyArray = Array.apply(null, new Array(anecdotesLength)).map(Number.prototype.valueOf, 0)
  
  const [points, setPoints] = useState(emptyArray)  

  const next = () => {
    const random = Math.floor(Math.random() * anecdotesLength);
    setSelected(random);
  };

  const vote = () => {
    const copy = [...points]
    // increment the property 2 value by one
    copy[selected] += 1
    setPoints(copy)
  }; 

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={next}>next anecdote</button>
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)