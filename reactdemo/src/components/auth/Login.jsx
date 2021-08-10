import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import userService from '../../services/UsersService';
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
  },
  child: {
    width: "40%",
  }
}));

const Login = (props) => {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return ( <div className = {classes.container} >
        <div className = {classes.child}>

        <TextField  label="email" fullWidth value= {email} onChange = {(e)=>{
            setEmail(e.target.value);
        }} />
        <br /><br />
        <TextField  label="password" type = "password" fullWidth value= {password} 
            onChange = {(e)=>{
            setPassword(e.target.value);
        }}/>
        <br /><br />
        <Button variant = "contained" color = "primary" onClick = {e => {
          userService.login(email, password).then((data)=>{
                console.log(data);
                window.location.href= "/";
            }).catch(err=>{
                console.log(err);
            });
        }}>
          Login
          </Button>
        </div>
    </div> );
}
 
export default Login;