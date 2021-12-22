import React, {useRef} from "react";

const Reference = () => {
    const inputRef = useRef();

    const handleInput = () =>{
        return(
            inputRef.current.style.color = "red"
        )
    }

    return(
        <div>
            <input ref={inputRef}/>
            <button onClick={handleInput}>Click me</button>
        </div>
    )
}

export default Reference;