import React    from "react";
import ReactDOM from "react-dom";
import Header   from "./componentes/Header";
import Footer   from "./componentes/Footer";
//
const App = () =>{
  return (
    <section id="body" className="wrapper-body bg-light">
      <div className="container-fluid">
        <Header />
        <div className="row wp-body">
          <span className="font-roboto-mono align-middle span-en-construccion">En Construcción</span>
        </div>
        <Footer />
      </div>
    </section>
  )
};
//
ReactDOM.render(
  <App />,
  document.getElementById("app")
);