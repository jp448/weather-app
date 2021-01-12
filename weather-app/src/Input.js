import React from "react";

// handles the input field in the form
const Input = ({onChangeHandle, value}) => {
    
    return (
        <div style={{padding: "15px 0px"}}>
            <label for="city">Enter a City: </label>
            <br></br>
            <input
            type="text"
            placeholder="Search..."
            onChange={(e) => onChangeHandle(e.target.value)}
            value={value}
            />
      </div>
    );
};

export default Input;