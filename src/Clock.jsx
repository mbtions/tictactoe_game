import { useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(0);
    const [color, setColor] = useState("white");
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);
    return (
        <div>
            <h1>Digital Clock in React 19</h1>
            <select name="color" id="color" onChange={(event) => setColor(event.target.value)}>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="white">White</option>
                <option value="green">Green</option>
                <option value="cyan">Cyan</option>
                <option value="teal">Teal</option>
            </select>
            <h1 style={{color: color, backgroundColor: "black", width: "auto", borderRadius: "10px", padding: "5px"}}
            >{time}</h1>

        </div>
    );
}

export default Clock;