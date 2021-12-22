import React, {useState, useMemo} from "react";

const Counters = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const isEven = () => {
        let i = 0;
        while (i < 2000000000) i++
        return(
            counterOne % 2 === 0
        )
    }

    // const counterMemo = useMemo(() => {
    //     let i = 0;
    //     while (i < 2000000000) i++
    //     return(
    //         counterOne % 2 === 0
    //     )
    // },[counterOne])

    return(
        <div className="btn">
            <button onClick={() => setCounterOne(counterOne + 1)}>Counter One : {counterOne}</button>
            <span>{isEven() ? 'even' : 'odd'}</span>
            {/* <span>{counterMemo ? 'even' : 'odd'}</span> */}
            <br />
            <button onClick={() => setCounterTwo(counterTwo + 1)}>Counter Two : {counterTwo}</button>
        </div>
    )
}

export default Counters;