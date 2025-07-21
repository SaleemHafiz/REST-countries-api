import React from 'react'
import CountryCard from './CountryCard'

export default function CountryCardsShimmer() {
    const shimerWord = '&#9608;&#9608;&#9608;&#9608;'
    const emptyCards = [
        <CountryCard flag={null} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={1} cca3={shimerWord} />,
        <CountryCard flag={null} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={2} cca3={shimerWord} />,
        <CountryCard flag={null} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={3} cca3={shimerWord} />,
        <CountryCard flag={null} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={4} cca3={shimerWord} />,
        <CountryCard flag={null} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={5} cca3={shimerWord} />,
        <CountryCard flag={null} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={6} cca3={shimerWord} />,
        <CountryCard flag={null} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={7} cca3={shimerWord} />,
        <CountryCard flag={null} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={8} cca3={shimerWord} />,
        <CountryCard flag={null} name={shimerWord} population={shimerWord} region={shimerWord} capital={shimerWord} key={9} cca3={shimerWord} />
    ]
  return (
    emptyCards
  )
}
