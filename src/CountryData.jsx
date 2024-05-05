/* eslint-disable react/prop-types */

export const CountryData = ({ country }) => {
  const { capital, area, languages, flags } = country
  const keysArray = Object.keys(languages)

  const mappedLanguages = keysArray.map((key) => ({
    key: key,
    value: languages[key],
  }))

  return (
    <>
      <hr />
      <h2>Capital: {capital}</h2>
      <h2>Area: {area}</h2>
      <p>
        <b>Languages</b>:{' '}
        {mappedLanguages.map((language) => language.value).join(', ')}
      </p>
      <img src={flags.png} alt='flag' />
    </>
  )
}
