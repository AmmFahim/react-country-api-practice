import React, { useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {id} = useParams();
    const [country, setCountry] = useState({});

    useEffect(()=>{
        const countryUrl = `https://restcountries.com/v3.1/name/${id}`
        fetch(countryUrl)
        .then(res=>res.json())
        .then(data=> setCountry(data))
    },[])
    console.log(country,null);
    // const {area, population} = country
    return (
        <div>
            <h3>country detail page:{id}</h3>
             <h4>Area: {country.area}</h4>
            {/* <p>{population}</p> */}
        </div>
    );
};

export default CountryDetail;