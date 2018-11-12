import React, { Component } from "react";
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import defaultUserImageUrl from '../static/User.png'
import '../style/Header.css'
class Header extends Component{
    render(){


  return(

      <div>
          <AppBar position="static">
              <Toolbar>
                  <img
                        className="imgAvatar"
                      src={this.props.profile.avatarUrl || defaultUserImageUrl}
                  />
                    <div className="displayName">
                        {this.props.profile.displayName}
                    </div>
                  <Button onClick={()=>this.props.firebase.logout()}>
                      Logout
                  </Button>


              </Toolbar>
          </AppBar>
      </div>
  );
};

}
export default compose(withFirebase,connect(({ firebase: { profile } }) => ({ profile })))(Header);