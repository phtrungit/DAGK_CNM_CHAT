import React, { Component } from "react";
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
    firebaseConnect,
    isLoaded,
    isEmpty,
    populate
} from 'react-redux-firebase'
import UserStatus from './UsersStatus'
const populates = [
    { child: 'presence', root: 'users' }
]
class PeopleList extends Component{
    render(){
        const presentUser = () =>
        {
            if(isLoaded(this.props.presence))
               if(!isEmpty(this.props.presence))
                    console.log(this.props.presence)
        }
        presentUser();
        return(
            <div className="people-list" id="people-list">
                <div className="search">
                    <input type="text" placeholder="search" />
                    <i className="fa fa-search" />
                </div>
                <ul className="list">
                    Contacts
                    {
                        !isLoaded(this.props.users)
                            ? 'Loading'
                            : isEmpty(this.props.users)
                            ? 'Todo list is empty'
                            :!isLoaded(this.props.presence)
                                ? 'Loading'
                                : isEmpty(this.props.presence)
                                    ? 'Todo list is empty'
                                    : Object.keys(this.props.users).map((key) => {
                                if(this.props.users[key].email!==this.props.profile.email)
                                    if(this.props.presence[key])
                                        return <UserStatus user={this.props.users[key]} key={key} status="online" />
                                else
                                        return <UserStatus user={this.props.users[key]} key={key} status="offline" />
                            })
                    }
                </ul>

            </div>
        )
    }
}
export default compose(
    firebaseConnect(['users',{path:'presence',populates}]),
    connect(
        ({ firebase }) => ({
            presence:populate(firebase, 'presence', populates),
            users: firebase.data.users,
            profile: firebase.profile,
        })
    )
) (PeopleList);