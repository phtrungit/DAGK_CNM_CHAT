import React, { Component } from "react";
import {Navbar,Nav,NavItem,MenuItem,NavDropdown} from "react-bootstrap"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
class Header extends Component{
    render(){
  return(

      <div>
          <AppBar position="static">
              <Toolbar>
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
export default Header;