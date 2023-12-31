import React, {useContext} from 'react';
import {UserContext} from "./Context/UserContext.jsx";

function HomePage(props) {

    const { user } =useContext(UserContext);
    return (
        <>
            <h1>Home Page App s<small>{ user?.name}</small></h1>
            <hr/>

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    );
}

export default HomePage;