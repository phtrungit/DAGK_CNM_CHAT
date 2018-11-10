import React from 'react'
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import  {UserIsNotAuthenticated} from "./UserIsAuthenticated";
import GoogleButton from 'react-google-button'
import './SignIn.css'
const Login = ({ firebase }) => (
    <div className="containerSignin">
        <span className="Label">Sign in to start chat</span>
        <GoogleButton onClick={() => firebase.login({ provider: 'google' })}>
            Google Login
        </GoogleButton>
    </div>
)

export default compose(
    UserIsNotAuthenticated, // redirects to '/' if user is logged in
    withFirebase // adds this.props.firebase
)(Login)