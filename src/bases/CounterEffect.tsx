import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CounterEffect() {
    const MAXIMUM_COUNT = 10;
    const consoleStyle = `
        color: red;
        background-color: purple;
        padding: 10px;
        border-radius: 5px;`
    const [counter, setCounter] = useState(5)
    const counterElement = useRef<HTMLHeadingElement>(null)
    const handleClick = () => {
        if (counter >= MAXIMUM_COUNT) return;
        setCounter(prev => Math.min(prev + 1, MAXIMUM_COUNT))
    }

    useEffect(() => {
        if (counter < 10) return;
        console.log('%cSe llego al valor máximo', consoleStyle);

        // gsap.to reference
        /* gsap.to('h2', { y: -10, duration: 0.2, ease: 'ease.out' }).then(() => {
            gsap.to('h2', { y: 0, duration: 1, ease: 'bounce.out' })
        }) */

        // gsap timeline reference
        const tl = gsap.timeline();
        tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
        tl.to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })

    }, [counter, consoleStyle])

    return (
        <>
            <h1>CounterEffect:</h1>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}