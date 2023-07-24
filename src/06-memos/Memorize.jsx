import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";
//! Dentro de neustro compoenente tenemos dos estados que hacen que cuando este cambie se vulva a redibujar y renderizar por completo 
export const Memorize = () => {

    const { counter, increment } = useCounter(10);


    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter <Small value={counter} /></h1>
            <hr />
            <button className="btn btn-primary" onClick={() => { increment() }}>
                +1
            </button>

            <button className="btn btn-outlineprimary"
            onClick={()=> setShow(!show)}> 
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
