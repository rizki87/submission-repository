import React from 'react'

const Lists = (props) => {
  return (
    <div>
      {props.searchResults.map((item, i) =>
        <p key={i}>{item.name}</p>        
      )}
    </div>
  )
}

export default Lists