if (module.hot) {
  module.hot.accept();
}

import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

async function getData() {

  const data = await axios.get('http://localhost:3000/api');
  return data.data;


}
class APP extends React.Component {
  constructor(props){
    super(props);

    this.state = { response: "nothing yet"}

  }
 async componentDidMount() { 
   
   this.setState({response : await getData()});
 }
  render(){
    return (
      <div>
        {this.state.response}
      </div>  
    )
  }
};


ReactDOM.render(<APP /> , document.getElementById('root'))