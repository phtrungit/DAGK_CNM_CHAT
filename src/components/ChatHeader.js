import React, { Component } from "react";
import '../style/Chat.css';

class ChatHeader extends Component{
    render(){
        let url="https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png";
        let name ="No one";

        if(typeof this.props.users !== 'undefined')
        {
            url=this.props.users.avatarUrl;
            name=this.props.users.displayName;
        }
        return(
            <div className="chat-header clearfix">
                <img src={url} alt="imgAvatar" className="imgAvatar" />
                <div className="chat-about">
                    <div className="chat-with">Chat with {name}</div>
                </div>
                <i className="fa fa-star" />
            </div>
        )
    }
}



export default (ChatHeader);