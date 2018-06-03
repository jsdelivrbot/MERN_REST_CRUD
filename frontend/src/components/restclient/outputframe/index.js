import  React from "react"
import Style from "./style.css";

class OutputFrame extends React.Component {
    constructor(props){
        super(props);
        this.state = {msg:''}   ;

        // pubsub method invoked from inputFrame to display loading messsage
        this.props.clientPubSub.on("HTTPStart", (data) => { this.setState({"msg":data})}) ;
        // pubsub method invoked from inputFrame to display the result of ajax call
        this.props.clientPubSub.on("HTTPResponse", (data) => { this.setState({"msg":JSON.stringify(data.data)})}) ;

    };

    render(){
        return (
            <div style={{background:"white", color:"black", height:"75%",overflow:"scroll"}}>
             <span className="response">  Response: </span>
                <div style={{background:"white", color:"blue" ,margin:"2px", overflowWrap: "break-word" ,fontSize:"22px"}}>
               {this.state.msg}
                </div>
            </div>
        );
    }
}


export default OutputFrame;