import { useEffect, useState } from 'react'
import { CountryData } from './CountryData'

/* eslint-disable react/prop-types */
export const Country = ({ countries }) => {

  const [countryToShow, setCountryToShow] = useState()

    
  useEffect(() => {
    setCountryToShow()
  }, [countries])
  

  if (countries.status === 404) {
    return null // No renderizar nada si no hay países
  }


  const handleShowCountryInfo = (country) => {
    setCountryToShow(country)
  }

  return (
    <>
      <h1>Countries</h1>
      <ul>
        {countries.length > 10 && countries.length !== 0 ? (
          <p>Too many countries. Specify another filter.</p>
        ) : (
          // eslint-disable-next-line react/jsx-key
          countries.map((country) => (
            <li style={{marginTop: '1em'}} key={country.cca2}>
              {country.name.common}
               {countries.length !== 1 && <button style={{marginLeft: '1em'}} onClick={() => handleShowCountryInfo(country)}>View info</button>}
            </li>
          ))
        )}
      </ul>

      {countries.length === 1 && <CountryData country={countries[0]} />}
      {countryToShow && countries.length !== 1 && <CountryData country={countryToShow} /> }
    </>
  )
}
