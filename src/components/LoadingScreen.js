import React, { Component } from "react";
import ReactLoading from 'react-loading';
import './LoadingScreen.css'
class LoadingScreen extends Component{

    render(){

        return(
            <div className="Loading">
                <ReactLoading type="bubbles" color="#fff" height="20%" width="20%" />
            </div>
        )
    }
}

export default LoadingScreen;