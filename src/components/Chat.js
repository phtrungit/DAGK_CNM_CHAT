import React, { Component } from "react";
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'
import ChatForm from './ChatForm'
import {connect} from "react-redux";
import { compose } from 'redux'
import Uploader from './Uploader'
import {
    isEmpty, isLoaded,
    firebaseConnect
} from 'react-redux-firebase'

class Chat extends Component{
    render(){

        return(
            <div className="chat">
                <ChatHeader users={this.props.users}/>
                <div className="chat-history">
                    <ul>
                        {
                            !isLoaded(this.props.messages)
                                ? 'Loading'
                                : isEmpty(this.props.messages)
                                ? 'messages list is empty'
                                : Object.keys(this.props.messages).map((key) => {
                                    if((this.props.messages[key].from_to===this.props.users.email+"-"+this.props.profile.email) || (this.props.messages[key].from_to===this.props.profile.email+"-"+this.props.users.email))
                                        return <ChatMessage messages={this.props.messages[key]} key={key}/>
                                })
                        }

                    </ul>
                </div>
                <span className="label">Upload image </span>
                <Uploader/>
                <ChatForm/>
            </div>
        )
    }
}
const mapStateToProps =(state) =>{

    if(state.chat.user!==undefined)
    return{
        users: state.chat.user
    };
    else
    {
        return{
            users: state.chat.defaultuser
        };
    }
}

export default compose(
    connect(mapStateToProps),
    firebaseConnect(props => [
        { path: 'messages', queryParams: ['orderByKey'] }
    ]),
    connect(

        ({ firebase }) => ({
            profile: firebase.profile,
            messages:firebase.data.messages
        })
    )
)(Chat);