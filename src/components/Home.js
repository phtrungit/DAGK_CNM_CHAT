
import React, { Component } from "react";
import '../style/Home.css';
import Header from './Header'
import PeopleList from './PeopleList'
import Chat from "./Chat";

import {UserIsAuthenticated} from './UserIsAuthenticated'
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

export default UserIsAuthenticated(Home);