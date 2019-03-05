import React from "react";
import { render } from "react-dom";

const App = () =>{
  return (
        <div>
            <h1>Hello Parcel</h1>
            <br/><br/><br/><br/>
            <h2>segunda linea parcel</h2>
        </div>
  )
};

render(<App />, document.getElementById("app"));