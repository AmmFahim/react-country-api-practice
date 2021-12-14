import React, { useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css'

const CountryDetail = () => {
    const {id} = useParams();
    const [country, setCountry] = useState([]);

    useEffect(()=>{
        const countryUrl = `https://restcountries.com/v3.1/name/${id}`
        fetch(countryUrl)
        .then(res=>res.json())
        .then(data=> setCountry(data[0]))
    },[])
    if(country){
        console.log(country,null);
        console.log(country.area,null);
    }
    

 
    return (
        <div  className="singleCountryBox">
            <h3>country detail page:{id}</h3>
             {/* <h4>Area: {JSON.stringify(country)}</h4> */}
             {/* <img src={country.flags.png} alt="" /> */}
             <p>Area:{country.area}</p>
             <p>Population:{country.population}</p>
             <h3>Capital:{country.capital}</h3>

        </div>
    );
};

export default CountryDetail;