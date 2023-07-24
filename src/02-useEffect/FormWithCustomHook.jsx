import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {


    const camposFormulario = {
        username: '',
        email: '',
        password: ''

    }

    const {
        formState,
        onResetForm,
        onInputChange,
        username,
        password,
        email
    } = useForm(camposFormulario);

    // const {username, email, password} = formState;



    return (
        <>
            <h1>Formulario Co ncustom Hoooks</h1>
            <hr />

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
                placeholder="gmail@google.com"
                name='email'
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contrasenia"
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary">Borrar</button>
        </>
    )
}

//React trabaja en una sola via, si se hace cambio en el state tenemos que volver a redibujarlo :0
// (por eso no podemos cambiar el input), usa un oChange