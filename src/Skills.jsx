import { useState } from "react";

function Skills() {
    const [skills, setSkills] = useState([]);

    const handleSkills = (event) => {
        if (event.target.checked) {
            setSkills([...skills, event.target.value]);
            console.log(skills);
        }
        else {
            setSkills(skills.filter((item) => item != event.target.value));
            console.log(skills);
        }
    }
    return (
    <div>
        <h1>Handle Checkbox in React 19</h1>
        <h2>Select your skills</h2>
        
        <input type="checkbox" name="php" id="php" value="php" onChange={handleSkills}/>
        <label htmlFor="php">PHP</label>
        <br />
        <input type="checkbox" name="js" id="js" value="js" onChange={handleSkills}/>
        <label htmlFor="js">JS</label>
        <br />
        <input type="checkbox" name="java" id="java" value="java" onChange={handleSkills}/>
        <label htmlFor="java">JAVA</label>
        <br />
        <input type="checkbox" name="node" id="node" value="node" onChange={handleSkills}/>
        <label htmlFor="node">NODE</label>
        <br />
        {/* <input type="button" value="Clear" onClick={setSkills([])} /> */}
        <br />
        <h3>{skills.toString()}</h3>
    </div>
    );
}

export default Skills;