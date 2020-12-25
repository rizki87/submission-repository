import React, { useState, useEffect  } from 'react'
import Persons from './components/persons'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filteredPerson, setFilteredPerson ] = useState('')

  useEffect(() => {
    console.log("effect");
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }

    const findPerson = persons.findIndex(person => person.name === newName);

    if(findPerson !== -1){
        alert(`${newName} is already added to phonebook`)
    } else {
        personService
          .create(nameObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
          })
    }   
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setFilteredPerson(event.target.value)    
  }

  const filteredList = !filteredPerson ? persons : persons.filter(person => 
    person.name.includes(filteredPerson) 
  );
  // console.log("filteredList ", filteredList)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filteredPerson} onChange={handleSearchChange} />
      <h2>add a new</h2>
      <PersonForm onSubmitForm={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons filteredList={filteredList}/>
    </div>
  )
}

export default App;
