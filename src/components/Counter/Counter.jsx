import "./Counter.scss";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(true);
    
    const increaseCount = () => {
        setCount((prevCount) => {
            return prevCount + 1
        });
    }

    const decreaseCount = () => {
        setCount(prevCount => prevCount - 1);
    }

    const toggleDarkMode = () => { 
        setDarkMode((prevDarkMode) => {
            return !prevDarkMode
        });
    }

    console.log("Counter renders with count: ", count);

    return (
        <div className={`counter ${darkMode && "counter--dark-mode"}`}>
            <h1>{`${darkMode ? "Counter" : "Light-Mode Counter"}`}</h1>
            <h2>Count: {count}</h2>
            <button onClick={increaseCount}>
                To the moon (+)
            </button>
            <button onClick={decreaseCount}>
                Back to Earth (-)
            </button>
            <button onClick={toggleDarkMode}>
                Toggle Dark Mode
            </button>
        </div>
    )
}

export default Counter;