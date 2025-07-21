import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryCardsShimer from "./CountryCardsShimer";
// import flag from "../assets/images/flagPak.svg";
const flag = new URL("../assets/images/flagPak.svg", import.meta.url).href;

export default function CountriesList({searchQuery, filteredRegion}) {
  const [countries, setCountries] = useState(null)
  useEffect(() => {
      fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,cca3"
      )
        .then((res) => res.json())
        .then((data) => {
          setCountries(data)
          
          console.log(data);
        });
    }, []);

  const shimerWord = '░░░░░░'
      const emptyCards = [
        <CountryCard flag={flag} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={0} cca3={shimerWord} />,
        <CountryCard flag={flag} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={1} cca3={shimerWord} />,
        <CountryCard flag={flag} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={2} cca3={shimerWord} />,
        <CountryCard flag={flag} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={3} cca3={shimerWord} />,
        <CountryCard flag={flag} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={4} cca3={shimerWord} />,
        <CountryCard flag={flag} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={5} cca3={shimerWord} />,
        <CountryCard flag={flag} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={6} cca3={shimerWord} />,
        <CountryCard flag={flag} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={7} cca3={shimerWord} />,
        <CountryCard flag={flag} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={8} cca3={shimerWord} />,
        <CountryCard flag={flag} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={9} cca3={shimerWord} />
        
      ]

  const allCountries = 
          // <CountryCard flag={flag} name="Pakistan" population="20,00,00,000" region="Asia" capital="Islamabad" />
          countries?.filter(country => country.name.common.toLowerCase().includes(searchQuery.toLowerCase())).filter(country => country.region.toLowerCase().includes(filteredRegion.toLowerCase())).map(country => {
            return <CountryCard flag={country.flags.svg} name={country.name.common} population={country.population.toLocaleString('en-IN')} region={country.region} capital={country.capital} key={country.cca3} cca3={country.cca3} />
          })
        
  return (
    <div className="countries-container">
      {countries? allCountries : emptyCards}
    </div>
  );
}
