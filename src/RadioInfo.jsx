import { useState } from "react";

function RadioInfo() {
    const [gender, setGender] = useState("female")
    const [city, setCity] = useState("new delhi");
    return (
        <div>
            <h1>Handle Radio Buttons in React 19</h1>
            <h2>Select your Gender:</h2>
            <input type="radio" name="gender" id="male" value="male" onChange={(event) => {setGender(event.target.value)}} checked={gender == "male"}/>
            <label htmlFor="male">Male</label>
            <br />
            <input type="radio" name="gender" id="female" value="female" onChange={(event) => {setGender(event.target.value)}} checked={gender == "female"}/>
            <label htmlFor="female">Female</label>
            <br />
            <h3>Selected Gender: {gender}</h3>
            <br />
            <h2>Select your city:</h2>
            <select name="city" id="cities" onChange={(event) => {setCity(event.target.value)}} defaultValue={city}>
                <option value="new delhi" selected={city == "new delhi"}>New Delhi</option>
                <option value="mumbai" selected={city == "mumbai"}>Mumbai</option>
                <option htmlFor="city" value="bangalore" selected={city == "bangalore"}>Bangalore</option>
            </select>
            <h3>Selected City: {city}</h3>            
        </div>
    );
}

export default RadioInfo;