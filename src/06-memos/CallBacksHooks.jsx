import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallBacksHooks = () => {
//state
  const [counter, setCounter] = useState(10);

  //Memoriza funciones
  const incrementFather = useCallback(
    (value) => {
      setCounter( (c)=> c + value );
    },
    [],
  )
  


  return (
    <>
      <h1>useCallBack Hooks: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  )
}
