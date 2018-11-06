
import React, { Component } from "react";
import './Home.css';
import Header from './Header'
import PeopleList from './PeopleList'
import Chat from "./Chat";
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
    firebaseConnect
} from 'react-redux-firebase'
import { Link } from 'react-router-dom'
class Home extends Component {
    render() {

        return (
            <div>
                <Header/>
            <div className="container clearfix">
                <PeopleList/>
                <Chat/>
            </div>
                </div>
        );
    }
}

export default compose(
    firebaseConnect(), // withFirebase can also be used
    connect(({ firebase: { auth } }) => ({ auth }))
) (Home);