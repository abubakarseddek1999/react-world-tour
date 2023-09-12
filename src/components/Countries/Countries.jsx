import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
  const [countries, setCountries] = useState([])
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  const handleVisitedCountry = (country) => {
    console.log('add this to your visited country')
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    // console.log(country);
  }
  const handleVisitedFlags = flag => {
   const newVisitedFlag =[...visitedFlags, flag];
   setVisitedFlags(newVisitedFlag)
  }

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* visited country */}
      <ul>
        {
          visitedCountries.map(country => <li key={country.length}>{country.name.common}</li>)
        }

      </ul>
      <div>
        <h3>Visited Country {visitedCountries.length}</h3>
      </div>

      <div className="flag-container">
        {
          visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
        }

      </div>
      {/* display countries */}
      <div className="country-container">
        {
          countries.map(country => <Country country={country} handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            key={country.cca3}></Country>)
        }
      </div>



    </div>
  );
};

export default Countries;