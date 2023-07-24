import {useEffect, useState} from "react";
import {Message} from "./Message.jsx";

export const SimpleForm = () => {

    //Matener estados
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    })

    const {username, email} = formState;


    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState, //mantener el estado,
            //segun el campo modificaremos su valor correspondiente
            [name]: value
        })

    }


    //use effect sirve para disparar eventos secundarios,
    // si no teniene dependencias se llama a buscar cada que el simpleFOrm se redibuje

    //2. Dependencias: Condiciones para que el useEffect se vuelva a disparar
    // [] una sola vez el montado
    //3. Crear un efecto espefcifico
    let numero = 1;
    useEffect(() => {
        // console.log('useEffect called!')
    }, [] );

    useEffect(()=>{
        // console.log('useEffect called! fror formstate')
    }, [formState]); //cada que halla cambio en el estado

    useEffect(()=>{
        // console.log('useEffect called! fror email')
    }, [email]); //cada que halla cambio en el email


    //Use efect partes:
    //1. callback o funcion de retorno, 2. clean up (limpiar o cancelar obserbables) 3. dependencias
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr/>

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name='username'
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name='email'
                value={email}
                onChange={onInputChange}
            />

            {
                <Message className="hidden"/>
            }
        </>
    )
}

//React trabaja en una sola via, si se hace cambio en el state tenemos que volver a redibujarlo :0
// (por eso no podemos cambiar el input), usa un oChange