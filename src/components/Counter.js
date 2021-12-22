import React, { useState } from "react";

const Counter = () =>{

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    // const isEven = () =>{
    //     return(
    //         setCounterOne
    //     )
    // }
    return(
        <div>
            <button onClick={setCounterOne(counterOne + 1)}>Counter One</button>
            <button onClick={setCounterTwo(counterTwo + 2)}>Counter One</button>
        </div>
    )
}


export default Counter;