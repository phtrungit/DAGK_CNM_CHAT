import React, { Component } from "react";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import requireAuth from "./components/auth/requireAuth";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";


class App extends Component {
    componentWillMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">

                    <Route exact path="/" component={SignIn} />
                    <Route path="/app" component={requireAuth(Home)} />
                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, { fetchUser })(App);