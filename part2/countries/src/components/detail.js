import React from 'react'

const Detail = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>capital {props.capital}</p>
      <p>population {props.population}</p>
      <h1>languages</h1>
      <ul>
        {props.languages.map((item, i) => 
          <li key={i}>{item.name}</li>
        )}
      </ul>
      <img src={props.flag} alt={props.name} width="10%" height="10%"/>
    </div>
  )
}

export default Detail