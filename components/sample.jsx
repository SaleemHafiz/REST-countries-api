import React, { useEffect, useState } from "react";
// import flag from "./assets/images/flagPak.svg";
const flagPak = new URL("../assets/images/flagPak.svg", import.meta.url).href;
import "./CountryDetail.css";
import { Link, useParams } from "react-router-dom";

export default function CountryDetail2() {
  const countryCca3 = useParams().country;
  const [country, setCountry] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [borders, setBorders] = useState(null)

  useEffect(() => {
    console.log("fetching");
    fetch(
      `https://restcountries.com/v3.1/alpha/${countryCca3}?fields=flags,capital,subregion,name,currencies,languages,borders,population,region,tld`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryCca3]);

//   useEffect(() => {
//     console.log("fetching border country name");
//     fetch(
//       `https://restcountries.com/v3.1/alpha/pak?fields=name`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setBorders(data);
//         console.log(data);
//       })
//   }, [countryCca3]);

  if (notFound) {
    return <div>This country is feeling shy and refused to appear.</div>;
  }
  return notFound ? (
    <div>This country is feeling shy and refused to appear.</div>
  ) : country === null ? (
    "Loading"
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left" />
          &nbsp; Back
        </span>
        <div className="country-details">
          <img src={country?.flags?.svg} alt="" />
          <div className="details-text-container">
            <h1>{country?.name?.common}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                {Object?.values(country?.name?.nativeName || {})[0]?.common ||
                  ""}
              </p>
              <p>
                <b>Population: </b>
                {country.population?.toLocaleString("en-IN")}
              </p>
              <p>
                <b>Region: </b>
                {country.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {country.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {country.capital?.[0]}
              </p>
              <p>
                <b>Top Level Domain: </b>
                {country.tld?.join(", ")}
              </p>
              <p>
                <b>Currencies: </b>
                {Object.values(country?.currencies || [])
                  .map((currency) => currency?.name)
                  .join(", ")}
              </p>
              <p>
                <b>Languages: </b>
                {Object.values(country?.languages || []).join(", ")}
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {/* {console.log(country.borders)} */}
              {country.borders.map((cca3) => (
                <Link key={cca3} to={`/${cca3}`}>
                  {cca3}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
