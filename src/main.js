import React from "react";
import { render } from "react-dom";

const App = () =>{
  return (
    <div>
      <h1>Personal web para Sebastian Andreoletti</h1>
      <h2>Test de react con Parcel</h2>
      <br/>
      <p>nose que haremos ahora</p>
    </div>
  )
};

render(<App />, document.getElementById("app"));