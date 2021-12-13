import React, { useEffect , useState} from 'react';
import Countries from '../Countries/Countries';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.com/v3.1/all`
        fetch(url)
        .then(res=>res.json())
        .then(data => setCountries(data))
    },[])
    // console.log(countries);
    return (
        
        <div style={{'text-align':"center"}}>
            <h2>Total Country : {countries.length}</h2>

        {
            countries.map(cn => <Countries countries = {cn}></Countries>)
        }
        </div>


    );
};

export default Home;