import React    from "react";
import ReactDOM from "react-dom";
import Header   from "./componentes/Header";
//
const App = () =>{
  return (
    <div className="wrapper-body bg-light">
      <div className="container-fluid">
        <Header />
        <div className="row wp-body">
          <div className="col"></div>
          <div className="col">
            <span className="font-roboto-mono align-middle">En Construcción</span>
          </div>
          <div className="col"></div>
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