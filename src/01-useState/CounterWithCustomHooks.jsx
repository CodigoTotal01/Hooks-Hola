import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHooks = () => {

    //usando hook
    const { counter, increment, decrement, reset } = useCounter();



    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            {/*No enviar el evento */}
            <button className="btn btn-primary" onClick={() => increment(1)}>+1</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrement(1)}>-1</button>
        </>
    )

}
