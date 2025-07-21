import React from 'react'

export default function BorderButton({ cca3 }) {
  return (
    <a href={`/country?cca3=${cca3}`} className="border-country-card">
      <img src={flag} alt={`${name} flag`} />
      <div className="card-text">
        <h3 className="card-title">
          {name}
        </h3>
        <p>
          <b>Population: </b>{population}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </a>
  );
}
