import { useState } from 'react';

interface Props {
    initialValue?: number;
}

interface CounterState {
    counter: number;
    clicks: number;
}

function CounterBy({ initialValue = 5 }: Props) {
    const [counterState, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    });

    const handleClick = (count: number) => {
        setCounterState(({ clicks, counter }) => {
            return {
                counter: counter + count,
                clicks: clicks + 1
            }
        });
    }

    return (
        <>
            <h1>counterState: {counterState.counter}</h1>
            <h1>Clicks: {counterState.clicks}</h1>
            <button onClick={() => handleClick(1)}>
                +1
            </button>
            <button onClick={() => handleClick(5)}>
                +5
            </button>
        </>
    )
}

export default CounterBy