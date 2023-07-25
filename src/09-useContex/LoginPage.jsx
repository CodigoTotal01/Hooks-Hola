import React, {useContext} from 'react';
import {UserContext} from "./Context/UserContext.jsx";

const LoginPage = () => {
    //Va hacia arriba a cbuscarlo
    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <h1>Login App</h1>
            <hr/>

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button className="btn btn-primary" onClick={()=> setUser({id: 123, name: 'juan', email: "gatitaos@gmail.com"})}>
                Establecer Usuario
            </button>
        </>
    );
};

export default LoginPage;
