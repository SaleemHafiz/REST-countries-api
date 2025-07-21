import React from 'react'

export default function Filter({setFilteredRegion}) {
  // console.log(filteredRegion);
  return (

    <select className="filter-by-region" onChange={e=> setFilteredRegion(e.target.value)}>
        <option hidden value="">Filter by Region</option>
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
  )
}
