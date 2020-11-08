import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const AnecdoteOfTheDay = (props) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdote}</p>
      <p>has {props.point} votes</p> 
      <ButtonVote vote={props.vote} text="vote" />
      <ButtonNext next={props.next} text="next anecdote" />
    </div>
  )
}

const AnecdoteWithMostVotes = (props) => {
  if(props.mostVoted !== -1){ 
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{props.IndexMostVoted}</p>      
    </div>
  )
  }
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>~</p>      
    </div>
  )
}

const ButtonNext = (props) => {
  return (
    <button onClick={props.next}>{props.text}</button>
  )
}
const ButtonVote = (props) => {
  return (
    <button onClick={props.vote}>{props.text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const anecdotesLength = props.anecdotes.length;
  const emptyArray = Array.apply(null, new Array(anecdotesLength)).map(Number.prototype.valueOf, 0)

  const [points, setPoints] = useState(emptyArray)  
  const [mostVoted, setMostVoted] = useState(-1)    

  const next = () => {
    const random = Math.floor(Math.random() * anecdotesLength);
    setSelected(random);
  };

  const vote = () => {
    const copy = [...points]
    // increment the property 2 value by one
    copy[selected] += 1
    setPoints(copy)

    const maxIndex = copy.indexOf(Math.max(...copy))
    setMostVoted(maxIndex) 
  }; 

  return (
    <div>      
      <AnecdoteOfTheDay anecdote={props.anecdotes[selected]} point={points[selected]} vote={vote} next={next} />    
      <AnecdoteWithMostVotes mostVoted={mostVoted} IndexMostVoted={props.anecdotes[mostVoted]}  />      
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
