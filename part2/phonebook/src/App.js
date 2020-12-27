import React, { useState, useEffect  } from 'react'
import Persons from './components/persons'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import personService from './services/persons'
import Notification from './components/notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filteredPerson, setFilteredPerson ] = useState('')
  const [ successMessage, setSuccessMessage] = useState(null)

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
    const p = persons.find(person => person.name === newName);   

    if(findPerson !== -1){
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)) {
          personService
            .replace(p.id, nameObject)
            .then(response => {
              persons[findPerson] = response;
              const editedList = persons.map(person => person);
              setPersons(editedList)

              setSuccessMessage(
                `Added ${response.name}`
              )
              setTimeout(() => {
                setSuccessMessage(null)
              }, 5000)
            })
            .catch(err => {
              console.log(err);
            });
        }
    } else {
        personService
          .create(nameObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')

            setSuccessMessage(
              `Added ${returnedPerson.name}`
            )
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
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
  
  const handleDelete = (p) => {
    if (window.confirm(`Delete ${p.name}`)) {
      personService
          .deletePerson(p.id)
          .then(response => {
            const newList = persons.filter(person => person.id !== p.id);
            setPersons(newList)
          })
          .catch(err => {
            console.log(err);
          });
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <Filter value={filteredPerson} onChange={handleSearchChange} />
      <h2>add a new</h2>
      <PersonForm onSubmitForm={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons filteredList={filteredList} handleDelete={handleDelete}/>
    </div>
  )
}

export default App;
