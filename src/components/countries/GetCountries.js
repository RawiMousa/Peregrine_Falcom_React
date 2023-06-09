import React, {useState, useEffect} from "react";
import './GetCountries.css';


const GetCountries = ({onCountrySelect , selectedCountryId}) =>{
    const [countries, setCountry] = useState([])


useEffect(()=>{
    const fetchCountry = async() => {
        const response = await fetch("http://localhost:8000/api/countries/");
        const data = await response.json();
        setCountry(data);
    };

    fetchCountry();
  }, []);

  const handleCountrySelect = (event) => {
    const selectedCountry = event.target.value;
    onCountrySelect(selectedCountry);
  };

  return(
    <div>
    <label htmlFor="country-select"></label>
      <select id="country-select" value={selectedCountryId} onChange={handleCountrySelect}>
      <option value="">Select country</option>
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GetCountries