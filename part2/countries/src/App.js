import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Lists from './components/lists'
import Detail from './components/detail'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [weather, setWeather] = useState({
    Name: '',
    temperature: '',
    weather_icons: [],
    wind_speed: '',
    wind_dir: ''
  }); 

  const handleCountriesChange = (event) => {
    setSearchTerm(event.target.value)
  }
  
  const buttonClick = (event) => {
    const filteredArray = searchResults.filter(res => res.name === event.target.value);
    setSearchResults(filteredArray)
    getWeather(event.target.value)
  }

  const getWeather = (q) => {
    console.log("getWeather");
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
      query: q
    }

    axios.get('http://api.weatherstack.com/current', {params})
      .then(response => {
        const apiResponse = response.data;
        // console.log("apiResponse ", apiResponse);
        // console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
        
        const name = apiResponse.location.name
        const temperature = apiResponse.current.temperature
        const weather_icons = apiResponse.current.weather_icons
        const wind_speed = apiResponse.current.wind_speed
        const wind_dir = apiResponse.current.wind_dir

        setWeather({
          name: name,
          temperature: temperature,
          weather_icons: weather_icons,
          wind_speed: wind_speed,
          wind_dir: wind_dir
        });

      }).catch(error => {
        console.log(error);
      });    
  }

  useEffect(() => {
    // console.log('effect')

    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        // console.log('promise fulfilled')
        const q = searchTerm

        const results = response.data.filter(country =>
          country.name.toLowerCase().includes(q)
        );        

        if(results.length === 1){
          getWeather(results[0].name)
        }

        if(!searchTerm){           
          setSearchResults([]);   
        } else {
          setSearchResults(results); 
        }

      })
  }, [searchTerm])

  let content;

  if(searchResults.length > 10){
    content = "Too many matches, specify another filter"
  } else if(searchResults.length === 1) {

    content = searchResults.map((item, i) => 
      <Detail key={i} name={item.name} capital={item.capital} population={item.population} languages={item.languages} flag={item.flag} location={weather.name} temperature={weather.temperature} weather_icons={weather.weather_icons} wind_speed={weather.wind_speed} wind_dir={weather.wind_dir} />
    )
  } else {
    content = <Lists searchResults={searchResults} buttonClick={buttonClick} />
  }
 
  return (
    <div>
      find countries <input value={searchTerm} onChange={handleCountriesChange}/>
      <div>
        {content}
      </div>
    </div>
    
  );
}

export default App;
