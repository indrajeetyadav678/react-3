import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contextcontroller from './Contextcontroller';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <Contextcontroller>
        <App />
    </Contextcontroller>

);