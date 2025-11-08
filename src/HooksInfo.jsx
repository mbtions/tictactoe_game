import { useEffect, useState } from "react";

function HooksInfo() {
    const [counter, setCounter] = useState(1);
    const [data, setData] = useState(0);

    // will be called only for once when setCounter(1) is assigned to onClick of Counter button
    function callOnce() {
        console.log(`function callOnce: ${counter}`);
    }

    useEffect(() => {
       callOnce()
    }, []); // will be called only for once

    useEffect(()=>{
        callOnce()
    }, [counter, data]); // will be called whenever counter or data value is changed

    // callOnce();
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
            <button onClick={() => setData(data + 1)}>Data: {data}</button>
        </div>
    );
}

export default HooksInfo;