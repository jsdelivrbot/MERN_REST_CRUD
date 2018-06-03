import React from "react";
import InputFrame from "./inputframe";
import OutputFrame from "./outputframe";
import Style from "./style.css";
import EventEmitter from "events";

// pubsub for enabling interaction between inputFrame and outputFrame. the refrence of this var is passed to both the components
const clientPubSub = new EventEmitter();


class RestClient extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
<div className="">
            <div style={{width:"50%", float:"left"}} > 
             <InputFrame clientPubSub = {clientPubSub}/>
             </div>

             <div style={{width:"50%", float:"right"}}>
               <OutputFrame clientPubSub = {clientPubSub}    />
            </div>        
 </div>   
        );
    }

};


export default RestClient;