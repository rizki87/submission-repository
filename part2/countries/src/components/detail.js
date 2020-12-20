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
      <h2>Weather in {props.location}</h2>
      <p>temperature: {props.temperature} Celcius</p>
      {props.weather_icons.map((img, i) => 
        <img src={img} alt="weather icon" key={i} />
      )}
      <p><b>wind:</b> {props.wind_speed} mph direction {props.wind_dir}</p>
    </div>
  )
}

export default Detail