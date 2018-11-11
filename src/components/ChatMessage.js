import React, { Component } from "react";
import './Chat.css'
class ChatMessage extends Component{
    render(){
        let image="";
        let text="";
        if(this.props.messages.text.match(/\.(jpeg|jpg|png|gif)/g) !=null)
        {
            image=<img src={this.props.messages.text} className="imgMessage"/>
        }
        if(!this.props.messages.text.startsWith('https://firebasestorage.googleapis.com'))
        {
            text=this.props.messages.text
        }
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

                    {text}
                    {image}
                </div>
            </li>
        )
    }
}
export default ChatMessage;