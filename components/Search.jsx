import React from 'react'

export default function Search({setQuery}) {
  // console.log(onChange);
  return (
    <div className="search-container">
        <i className="fa-solid fa-magnifying-glass" />
        <input onChange={e=> setQuery(e.target.value)} type="text" placeholder="Search for a country..." />
      </div>
  )
}
