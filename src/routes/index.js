import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import Login from '../components/SignIn'



const routes = (
    <div>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />


        </Switch>
    </div>
)

export default routes