import React from 'react';
import { withRouter } from 'react-router';
import {Button, Grid} from '@material-ui/core';
import productService from '../../services/ProductsService';
import userService from '../../services/UsersService';
const SingleProduct = (props) => {
    const {product, onDelete, history} = props;
    return (
    <Grid item xs={3}>
        <h2>{product.name} <Button variant="contained" color="primary" onClick={e=>{
            console.log("navigate to update");
            history.push("/products/update/"+ product._id);
        }}>Edit</Button>
        {userService.isLoggedIn() && (
        <Button variant="contained" color="secondary" onClick = 
        {e=>{
            productService.deleteProduct(product._id)
            .then((data)=>{
                console.log(data);
                onDelete();
            })
            .catch(err=>{
            console.log(err);
            });
        }}
        >Delete</Button>
        )}
        </h2>
        <p>{product.price}</p>
        <hr />
    </Grid>
    );
}
 
export default withRouter (SingleProduct);