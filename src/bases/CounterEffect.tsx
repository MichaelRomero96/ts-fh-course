import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

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

        gsap.to('h2', { y: -10, duration: 0.2, ease: 'ease.out' }).then(() => {
            gsap.to('h2', { y: 0, duration: 1, ease: 'bounce.out' })
        })

    }, [counter, consoleStyle])

    return (
        <>
            <h1>CounterEffect:</h1>
            <h2>{counter}</h2>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}