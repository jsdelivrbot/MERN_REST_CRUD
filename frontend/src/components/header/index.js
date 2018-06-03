import React from "react";
import Style from "./style.css"


class Header extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <div className="wrapper">
                <h1> REST API Test Site: Albums Database</h1>
                <h2>github: <a href="https://github.com/ketansrivastav/MERN_REST_CRUD"> https://github.com/ketansrivastav/MERN_REST_CRUD </a></h2>
                <div>
                    <span>
     
                </span>
                <span>
                <h4>This website is built using the <strong>M</strong>ongo <strong>E</strong>xpress <strong>R</strong>eact <strong>N</strong>odejs (MERN) Stack as a demonstation on how to buid a RESTful API server using node. GET, PUT, POST, and DELETE HTTP verbs are supported. you can send a GET request to /album/list to get list of all the albums in the database. You can then browse specific albums by their ids : /album/:id/.
                You can also PUT (update the content on a perticular resource) and DELETE (remove a resource). To post a new entry you can POST data to /album/ with the default values in the textarea below.
                <br /><br />You can use <a href="https://jsoneditoronline.org/"> https://jsoneditoronline.org/ </a> to pretify JSON response from the server.

                <br /> Note: The POST data is disabled for the GET requests.
                </h4>
                </span>
                </div>
            </div>    
        )
    }
}


export default Header;
