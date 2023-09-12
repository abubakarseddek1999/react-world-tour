import { useState } from 'react';
import './Country.css'
const Country = ({ country,handleVisitedCountry,handleVisitedFlags}) => {
    const { name, flags, population, area, cca3 } = country;

    const [Visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!Visited);
    }

    return (
        <div className={`country ${Visited && 'visited'}`}>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population} </p>
            <p>Area:{area} </p>
            <p><small>Code:{cca3} </small></p><br />
            <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button> <br /><br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>add flag</button>
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Going'}</button>
            {Visited ? 'I have visit this country' : 'I want visit this country'}

        </div>
    );
};

export default Country;