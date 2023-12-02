//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from './component/home.jsx'
// include your styles into the webpack bundle
import "../styles/index.css";






let counter = 0;

setInterval(() =>  {

    if (counter < 1000000) {
        counter++;
    }else{
        counter = 0;
    }

ReactDOM.render(<Home seconds={counter}  />, document.querySelector("#app"));

}, 1000);