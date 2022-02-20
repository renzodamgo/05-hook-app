import "./counter.css";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter(30);
    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />
            <button onClick={()=>decrement(2)} className='btn'>
                -1
            </button>
            <button onClick={reset} className="btn">Reset</button>
            <button onClick={()=>increment(2)} className='btn'>
                +1
            </button>

        </>
    )
}
