import React, { useState } from 'react'
import Person from './components/person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Helas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    // console.log("button clicked ", event.target);

    const nameObject = {
      name: newName
    }

    const findPerson = persons.findIndex(person => person.name === nameObject.name);
    // console.log("findPerson ", findPerson);

    if(findPerson !== -1){
        alert(`${nameObject.name} is already added to phonebook`)
    } else {
        setPersons(persons.concat(nameObject))
        setNewName('')
    }    
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
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
