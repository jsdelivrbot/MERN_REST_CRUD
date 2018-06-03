import React from "react"
import axios from "axios";
import Style from "./style.css";

import EventEmitter from 'events';

// internal pubSub for enabling comunication between the dropdown component and the parent component
let pubSub = new EventEmitter();

// component to render the drop down menu
class HTTPDropDown extends React.Component {
    constructor(props){
        super(props);
        // default value
        this.state = {selectedValue:'GET'};
        //disable the post textarea
        pubSub.emit("postDisable","true");
        //pass on the current state of the dropdown menu
        pubSub.emit("HTTPDropDownSelected",this.state.selectedValue)


    }

 handleChange(e){
     //set the selected option as the selected value in state
     this.setState({selectedValue:e.target.value});
     // tell the parent about current selection state
     pubSub.emit("HTTPDropDownSelected",e.target.value);
    
     if(e.target.value === "GET")
        pubSub.emit("postDisable",true);
    else 
    pubSub.emit("postDisable",false);
 }; 
    render(){
        return(
<div style ={{float:"left",marginRight:"10px"}}>
            

            <select style={{fontSize:"30px"}} value={this.state.selectedValue} onChange= {this.handleChange.bind(this)}>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
 </div>    
    )
}
}


class InputFrame extends React.Component {
    constructor(props){
        super(props);
        this.state = {HTTPValue:"",location:"/album/list",postData:'',textAreaDisabled:"",
        samplePost: `
        {
            
         
             "readOnly": false,
             "name": "Master Of Puppets",
             "artist": "Metallica",
             "Songs": [
                 {
                     
                     "title": "Battery"
                 },
                 {
                     
                     "title": "Master of Puppets"
                 },
                 {
                     
                     "title": "The Thing That Should Not Be"
                 },
                 {
                     
                     "title": "Welcome Home (Sanitarium)"
                 },
                 {
                    
                     "title": "Disposable Heroes"
                 },
                 {
                     
                     "title": "Leper Messiah"
                 },
                 {
                    
                     "title": "Orion"
                 },
                 {
                    
                     "title": "Damage, Inc."
                 }
             ]
           
         }
        `
    };
        

        pubSub.on("HTTPDropDownSelected",(val)=>{
            this.setState({HTTPValue:val})
        })
        // called to diable the textarea
        pubSub.on("postDisable", (s) => {this.setState({textAreaDisabled:s})})

    };
async sendRequest(){
    // make AJAX calls

    // display loading message on the outputFrame
    this.props.clientPubSub.emit("HTTPStart","Loading...")
    // storing all required axios methods as a key value pair
    let VERBS = {GET: axios.get,
                 POST: axios.post,
                 PUT: axios.put,
                 DELETE:axios.delete
                    };
    let response  ;              
                  
try{
    // storing post data from the textarea
    let data = Object.assign({},{data:this.state.postData})
    // makng the ajax call and storing the response
     response = await VERBS[this.state.HTTPValue](this.state.location, data);
    
    
}
catch(e){
response = {data:'something went wrong with the HTTP request. Please check your reuqest parameters!'};
}
this.props.clientPubSub.emit("HTTPResponse",response)
}

    render(){
        return (
            <div className="inp"> 
                <HTTPDropDown />
                <input style ={{float:"left",fontSize:"30px", width : "60%"}} type = "text" value={this.state.location} onChange = {(e)=>{this.setState({location:e.target.value})}}/>
                <button style={{fontSize:"30px"}} onClick = {this.sendRequest.bind(this)}> SEND </button>
                <div>
                <textarea style={{width:"94%",height:"70%"}} onChange = {(e) => {this.setState({postData:e.target.value});}} disabled = {this.state.textAreaDisabled? "disabled" : ""}>
{this.state.samplePost}
</textarea>
                </div>    
            </div>
        );
    }
}


export default InputFrame;