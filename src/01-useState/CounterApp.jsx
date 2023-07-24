//UseState

import { useState } from "react";

export const CounterApp = () => {

    //Los objetos e nmi use state denemos preservar los valors anteriores
    const [state, setcounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
    });

    const {counter1, counter2, counter3} = state;

    return (
        //Fragmento
        <>
            <h1>Counter: {counter1}</h1>
            <h1>Counter: {counter2}</h1>
            <h1>Counter: {counter3}</h1>
            <hr />

            <button className="btn" onClick={()=> setcounter(
                {
                    ...state,
                    counter1:counter1 + 1,
                }
            )}>+1</button>
        </>
    )
}
/*
* Notas:
*
* */