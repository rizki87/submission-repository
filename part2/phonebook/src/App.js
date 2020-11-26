import React, { useState } from 'react'
import Person from './components/person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filteredPerson, setFilteredPerson ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    // console.log("button clicked ", event.target);
    // console.log("newName ", newName);

    const nameObject = {
      name: newName,
      number: newNumber
    }

    const findPerson = persons.findIndex(person => person.name === newName);
    // console.log("findPerson ", findPerson);

    if(findPerson !== -1){
        alert(`${newName} is already added to phonebook`)
    } else {
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
    }    
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    // console.log(event.target.value)
    setFilteredPerson(event.target.value)    
  }

  const filteredList = !filteredPerson ? persons : persons.filter(person => 
    person.name.includes(filteredPerson) 
  );
  // console.log("filteredList ", filteredList)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      filter shown with <input onChange={handleSearchChange} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredList.map((person, i) => 
          <Person key={i} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App;
