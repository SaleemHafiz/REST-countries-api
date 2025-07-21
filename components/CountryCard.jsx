import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({ flag, name, population, region, capital, cca3 }) {
  return (
    <Link to={`/${cca3}`} className="country-card">
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
    </Link>
  );
}
