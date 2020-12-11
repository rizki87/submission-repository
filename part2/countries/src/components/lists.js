import React from 'react'

const Lists = (props) => {
  return (
    <div>
      {props.searchResults.map((item, i) =>
        <p key={i}>{item.name} <button onClick={props.buttonClick} value={item.name}>show</button></p>        
      )}
    </div>
  )
}

export default Lists