import React, { Component } from "react";
import { connect } from 'react-redux'
import {selectPeople,setDefaultPeople} from '../actions'
import './PeopleList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class UsersStatus extends Component{
    componentDidMount()
    {
        const userSel=this.props.user;
        this.props.setOnDefaultPeople(userSel);
    }
    render(){

    const userSel=this.props.user;
    let classStatusIcon="";
    if(this.props.status=='online')
        classStatusIcon="statusIconOnline";
        return(
            <div>
                <li className="clearfix">
                    <img src={this.props.user.avatarUrl} alt="imgAvatar" className="imgAvatar"   />
                    <div className="about">
                        <div className="name" onClick={()=>this.props.onSelectClick(userSel)}>{this.props.user.displayName}</div>
                        <div className="status">
                            <FontAwesomeIcon className={classStatusIcon} icon="circle" /> {this.props.status}
                        </div>
                    </div>
                </li>
            </div>
        )
    }

}
const mapDispatchToProps = dispatch => {
    return {
        onSelectClick: user => {
            dispatch(selectPeople(user))
        },
        setOnDefaultPeople: user => {
            dispatch(setDefaultPeople(user))
        }
    }
}
export default connect(null,mapDispatchToProps)(UsersStatus);