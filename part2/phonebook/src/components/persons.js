import React from 'react'

const Persons = ({ filteredList }) => {
  return (
    <ul>
      {filteredList.map((person, i) => 
        <li key={i}>{person.name} {person.number}</li>
      )}
    </ul>
  )
}

export default Persons