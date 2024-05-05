import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { Country } from './Country'

const URL_API = 'https://restcountries.com/v3.1/name/'

function App() {
  const [searchCountry, setSearchCountry] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    if (searchCountry === '') return
    fetch(`${URL_API}${searchCountry}`)
      .then((resp) => resp.json())
      .then((data) => {
        const newCountries = data
        setCountries(newCountries)
      })
  }, [searchCountry])

  const handleSearchCountry = (e) => {
    const countryInputSearch = e.target.value
    setSearchCountry(countryInputSearch)
  }

  return (
    <>
      <label htmlFor='country'>Find countries: </label>
      <input
        type='text'
        value={searchCountry}
        onChange={handleSearchCountry}
        placeholder='Spain....'
      />

      <Country countries={countries} />
    </>
  )
}

export default App
