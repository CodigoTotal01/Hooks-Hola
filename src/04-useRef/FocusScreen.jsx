import { useRef } from "react"

export const FocusScreen = () => {

    //Permite mantener uan referencia, cuando cvambia no se re-renderizara el componente, algo que se mantenga
    //APuntar al grml
    const inputRef = useRef();
    //current

    const onClick = () => {
            inputRef.current.select();
    }

    return (

        <>
            <h1>FocuesScreen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control" />

            <button onClick={onClick} className="btn btn-primarymt-2">
                Set Focus
            </button>
        </>
    )
}
