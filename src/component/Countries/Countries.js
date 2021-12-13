import React from 'react';
import { useNavigate} from 'react-router-dom';
import './Countries.css'

const Countries = (props) => {
    const {area} = props.countries;
    const {common} = props.countries.name;
    // console.log(name.common);
    const history = useNavigate();
    const handleCountryButton = (countryName) =>{
        const countryUrl = `/countryDetail/${countryName}`;
        history(countryUrl);
    }
    return (
        <div className="countryBox">
            <h3>Country Name: {common}</h3>
            <p>Area:{area}</p>
            <button onClick={() =>handleCountryButton(common)}>See Details about {common}</button>
        </div>
    );
};

export default Countries;