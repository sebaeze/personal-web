import React    from "react";
import ReactDOM from "react-dom";
import Header   from "./componentes/Header";
//
const App = () =>{
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row bg-light">
        <div className="wp-body mt-200">
          <br/><br/><br/><br/><br/><br/><br/>
          <h1 className="font-roboto-mono">En Construcción</h1>
        </div>
      </div>
    </div>
  )
};

//render(<App />, document.getElementById("app"));
ReactDOM.render(
  <App />,
  document.getElementById("app")
);