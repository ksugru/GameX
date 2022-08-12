import { useState } from "react";

const FunctionalComp = (props) => {
    const [counter, setCounter] = useState(0)
    const incCounter = () => {
        setCounter(counter + 1)
    }
    
    return (
        <div className="shopping-list">
            {counter}
            <button onClick={incCounter}> Up </button>
        </div>
    );
}