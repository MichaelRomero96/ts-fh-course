import { useState, useEffect } from 'react';

export default function CounterEffect() {
    const MAXIMUM_COUNT = 10;
    const consoleStyle = `
        color: red;
        background-color: purple;
        padding: 10px;
        border-radius: 5px;`
    const [counter, setCounter] = useState(5)
    const handleClick = () => {
        if (counter >= MAXIMUM_COUNT) return;
        setCounter(prev => Math.min(prev + 1, MAXIMUM_COUNT))
    }

    useEffect(() => {
        if (counter < 10) return;
        console.log('%cSe llego al valor máximo', consoleStyle);
    }, [counter, consoleStyle])

    return (
        <>
            <h1>CounterEffect: {counter}</h1>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}