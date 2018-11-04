import React, { Component } from "react";
import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import defaultUserImageUrl from '../static/User.png'
import './Header.css'
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
                  <Typography
                      type="title"
                      color="inherit"
                      >
                  </Typography>

              </Toolbar>
          </AppBar>
      </div>
  );
};

}
export default connect(({ firebase: { profile } }) => ({ profile }))(Header);