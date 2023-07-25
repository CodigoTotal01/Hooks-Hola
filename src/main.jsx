import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {MainApp} from "./09-useContex/MainApp.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    // Broweser router es un compoenente de novel superior, hight order component
    <BrowserRouter>
        {/*// <React.StrictMode>*/}
        <MainApp/>
        {/*// </React.StrictMode>,*/}
    </BrowserRouter>
)
