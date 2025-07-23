import React, { useEffect, useState } from 'react'

import './CountryDetail.css'
import { Link, useParams } from 'react-router-dom'
import transparentImage from '../assets/images/transparent.jpg'

export default function CountryDetail() {

    const countryCca3 = useParams().country;
//   const params = useParams()
//   const countryName = params.country

  const [countryData, setCountryData] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    console.log('fetching country');
    fetch(`https://restcountries.com/v3.1/alpha/${countryCca3}?fields=flags,capital,subregion,name,currencies,languages,borders,population,region,tld`)
      .then((res) => res.json())
      .then((data) => {
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          flag: data.flags.svg,
          tld: data.tld,
          languages: Object.values(data.languages).join(', '),
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(', '),
          borders: []
        })

        if(!data.borders) {
          data.borders = []
        }

        Promise.all(data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => ({name:borderCountry.name.common, cca3:border}))
        })).then((borders) => {
          setCountryData((prevState) => ({...prevState, borders }))
        })
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true)
      })
  }, [countryCca3])

  if(notFound) {
    return <div>Country Not Found</div>
  }

  return countryData === null ? (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details shimmer">
          <img src={transparentImage} alt={`flag`} />
          <div className="details-text-container">
            <h1>&#x2588;&#x2588;&#x2588;&#x2588;</h1>
            <div className="details-text">
              <p>
                <b>Native Name: &#x2588;&#x2588;&#x2588;&#x2588;</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: &#x2588;&#x2588;&#x2588;&#x2588;
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: &#x2588;&#x2588;&#x2588;&#x2588;</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: &#x2588;&#x2588;&#x2588;&#x2588;</b>
              </p>
              <p>
                <b>Capital: &#x2588;&#x2588;&#x2588;&#x2588;</b>
              </p>
              <p>
                <b>Top Level Domain: &#x2588;&#x2588;&#x2588;&#x2588;</b>
              </p>
              <p>
                <b>Currencies: &#x2588;&#x2588;&#x2588;&#x2588;</b>
              </p>
              <p>
                <b>Languages: &#x2588;&#x2588;&#x2588;&#x2588;</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString('en-IN')}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital.join(', ')}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
            </div>
           { countryData.borders.length !== 0 && <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {
                countryData.borders.map((border) => <Link key={border.cca3} to={`/${border.cca3}`}>{border.name}</Link>)
              }
            </div>}
          </div>
        </div>
      </div>
    </main>
  )
}