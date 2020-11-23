import React, { useState } from 'react'
import Person from './components/person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Helas', number: '040-1234567' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((person, i) => 
          <Person key={i} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App;
