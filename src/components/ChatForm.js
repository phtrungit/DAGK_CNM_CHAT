import React, { Component } from "react";
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
    firebaseConnect
} from 'react-redux-firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ChatForm extends Component{

    render(){

        const handleSend = () => {
            let today = new Date();
            let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() +" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();

            return this.props.firebase.push('/messages', { text: this.input.value, sender:this.props.profile, from_to:this.props.profile.email+"-"+this.props.users.email,time:date  })
                .then(() => {
                    this.input.value = ''
                })
        };
        return(
            <div className="chat-message clearfix">
                <textarea type='text' ref={ref => { this.input = ref }} />
                <i className="fa fa-file-o" /> &nbsp;&nbsp;&nbsp;
                <i className="fa fa-file-image-o" />
                <button onClick={handleSend}> <FontAwesomeIcon icon="arrow-circle-right" /> Send</button>
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
    firebaseConnect(['messages']),
    connect(mapStateToProps),
    connect(

        ({ firebase }) => ({
            profile: firebase.profile,
        })
    )
) (ChatForm);