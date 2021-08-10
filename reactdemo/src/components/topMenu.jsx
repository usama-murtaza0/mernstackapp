import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import userService from '../services/UsersService';
const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    paddingRight: "1rem"
  }
}));
const TopMenu = () => {
    const classes = useStyles();    
    return ( 
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    <Link to ="/" className={classes.link}>Home</Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="/products" className={classes.link}>Products</Link>
                </Typography>
                {userService.isLoggedIn() && (
                <Typography variant="h6">
                    <Link to="/products/new" className={classes.link}>New Product</Link>
                </Typography>
                )}
                <Typography variant="h6">
                    <Link to="/contact-us" className={classes.link}>Contact Us</Link>
                </Typography>
                {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6">
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/register" className={classes.link}>
                Register
              </Link>
            </Typography>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name + userService.getLoggedInUser().role}
          </Button>
        )}
        
        </Toolbar>
        </AppBar>
        </div>
        );
}
 
export default TopMenu;