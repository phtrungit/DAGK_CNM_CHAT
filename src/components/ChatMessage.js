import React, { Component } from "react";
import './Chat.css'
class ChatMessage extends Component{
    render(){
        const clf="clearfix";
        const alir="align-right";
        return(
            <li className={clf}>
                <div className={"message-data " }>
                    <span className="message-data-time">{this.props.messages.time}</span>
                    <span className="message-data-name">{this.props.messages.sender.displayName}</span>
                    <span><img src={this.props.messages.sender.avatarUrl} className="iconchat" /></span>
                </div>
                <div className="message other-message float-right">
                    {this.props.messages.text}
                </div>
            </li>
        )
    }
}
export default ChatMessage;