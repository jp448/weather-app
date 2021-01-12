import React, { useState, useEffect } from "react";
import axios from "axios";

// handles the select input in the form
const Select = ({onChangeHandle}) => {

    // options a state that changes depending on API return data
    const [options, setOptions] = useState([]);

    // function called on re-render. Grabs the data from an API that has country names and the 2 Country Code necessary for the Weather API.
    useEffect(() => {
        async function getData() {
          let response = [];
          response = await axios.get("https://restcountries.eu/rest/v2/all");
          setOptions(response.data);
          console.log(response.data)
        }
        getData();
      }, []);
    
    return (
      <div>
        <label for="country">Select a Country: </label>
        <br></br>
        <select name="countries" id="countries" onChange={(e) => onChangeHandle(e.target.value)}>
          {options.map(d => (
            <option value={d.alpha2Code}>{d.name}</option>
          ))}
        </select>
    </div>
    );
};

export default Select;