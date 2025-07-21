import React, { useState } from 'react'
import Search from './Search';
import Filter from './Filter';
import CountriesList from './CountriesList';

export default function Home() {
  const [query, setQuery] = useState("");
  const [filteredRegion, setFilteredRegion] = useState("");
  return (
    <main>
        <div className="search-filter-container">
          <Search setQuery={setQuery} />
          <Filter setFilteredRegion={setFilteredRegion}/>
        </div>
        <CountriesList searchQuery={query} filteredRegion={filteredRegion}/>
      </main>
  )
}
