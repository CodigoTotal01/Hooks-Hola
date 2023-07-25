import React, {useState} from 'react';
import {UserContext} from "./UserContext.jsx";
//Childen serian como los elementos o compoenentes anidados dentro de otro componente
//EL provedor ofrece un contexto
// const user = {
//     id: 123,
//     name: 'Fernando Herrera',
//     email: 'gerbdf@gmail.com'
// }
function UserProvider({children}) {

    const [user, setUser] = useState();

    return (
        // Renderizara todos los hijos, el value indica que todos los hijos obtendran nuestro objeto hola
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;