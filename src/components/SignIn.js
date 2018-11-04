import "./SignIn.css";
import React, { Component } from "react";
import { firebaseConnect } from 'react-redux-firebase'
import GoogleButton from 'react-google-button'
class Signin extends Component {


    render() {
        const googleLogin =() =>
        {
            this.props.firebase
                .login({ provider: 'google', type: 'popup' })
        }
        return (
            <div className="containerSignin">

                    <span className="Label">Signin with google to start chat</span>
                <div>
                    <GoogleButton onClick={googleLogin} />
                    </div>

            </div>
        );
    }
}


export default firebaseConnect()(Signin);