import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Lists from './components/lists'
import Detail from './components/detail'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleCountriesChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')

        const results = response.data.filter(country =>
          country.name.toLowerCase().includes(searchTerm)
        );        

        if(searchTerm){
          setSearchResults(results);          
        } else {
          setSearchResults([]);
        }

        // setSearchResults(results);
      })
  }, [searchTerm])

  let content;

  if(searchResults.length > 10){
    content = "Too many matches, specify another filter"
  } else if(searchResults.length === 1) {

    content = searchResults.map((item, i) => 
      <Detail key={i} name={item.name} capital={item.capital} population={item.population} languages={item.languages} flag={item.flag} />
    )
  } else {
    content = <Lists searchResults={searchResults}/>
  }

  // console.log("length ", searchResults);
  
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
