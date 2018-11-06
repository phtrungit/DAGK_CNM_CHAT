import React, { Component } from "react";
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
    firebaseConnect,
    isLoaded,
    isEmpty
} from 'react-redux-firebase'
import UserStatus from './UsersStatus'
class PeopleList extends Component{
    render(){
        return(
            <div className="people-list" id="people-list">
                <div className="search">
                    <input type="text" placeholder="search" />
                    <i className="fa fa-search" />
                </div>
                <ul className="list">
                    {
                        !isLoaded(this.props.users)
                            ? 'Loading'
                            : isEmpty(this.props.users)
                            ? 'Todo list is empty'
                            : Object.keys(this.props.users).map((key) => {
                                if(this.props.users[key].email!==this.props.profile.email)
                                    return <UserStatus user={this.props.users[key]} key={key} />
                    })
                    }
                </ul>
            </div>
        )
    }
}
export default compose(
    firebaseConnect(['users']),
    connect(
        ({ firebase }) => ({
            users: firebase.data.users,
            profile: firebase.profile,
        })
    )
) (PeopleList);