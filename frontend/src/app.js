/*
main react app

*/
// setting up condition for hot reloading during development mode
if (module.hot) {
  module.hot.accept();
}

import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
// the header component
import Header from "./components/header";
// the main interactive component
import RestClient from "./components/restclient";


class APP extends React.Component {
  constructor(props){
    super(props);

    

  }

  render(){
// render the application
    return ( <div > <Header />
    
    <RestClient/>
    </div>  );
  }
};



ReactDOM.render(<APP /> , document.getElementById('root'))