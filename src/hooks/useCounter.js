//Use es un standar en react antes del nombre para indicar que es un hook

import {useState} from "react";

//Es una simple funcion, no necesariamente debe ser una objeto lo que retorne 
export const useCounter = (inicialValue = 10) => {
    //Puede tener hooks propios pero casi siempre uno de react

    const [counter, setcounter] = useState(inicialValue);

    //Exponer metodos hooks, recivimos el evento directamente
    const increment = (value = 1) => {
        setcounter((current) => current + value);
    }

    const decrement = (value = 1) => {
        if (counter === 0) return;
        ///El set value siemrpre tiene el tultimo valor en este caso del estado
        setcounter((current) => current - value);
    }

    const reset = () => {
        setcounter((current) => inicialValue);
    }
    return {
        counter,
        increment,
        decrement,
        reset,
    }
}