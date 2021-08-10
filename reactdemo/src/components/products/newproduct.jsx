import React from 'react';
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import productService from '../../services/ProductsService';
import Auth from '../auth/Auth';
const NewProduct = (props) => {
    const[name, setName] = React.useState("");
    const[price, setPrice] = React.useState(0);
    return ( 
    <Auth>
    <Grid container spacing={3}>
    <Grid item xs ={12} >
        <h1>Add new product</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
        <TextField  label="Name"  fullWidth value={name}  onChange = {(e)=>{
            setName(e.target.value);
        }}/>
        <br /><br />
        <TextField  label="Price" fullWidth value={price} onChange = {(e)=>{
            setPrice(e.target.value);
        }} />
        <br /><br />
        <Button variant="contained" color = "primary" onClick = {(e)=>{
            productService.addProduct({name, price}).then((data)=>{
                console.log(data);
                props.history.push("/products");
            }).catch(err=>{
                console.log(err);
            });
        }} >Add New Product</Button>
        </Grid>
        <Grid item xs={3}></Grid>    
    </Grid>
    </Auth> 
    );
}
export default NewProduct;