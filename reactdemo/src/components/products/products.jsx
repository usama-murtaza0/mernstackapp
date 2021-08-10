import React from 'react';
import SingleProduct from './singleproduct';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import productService from '../../services/ProductsService';
import userService from '../../services/UsersService';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2), 
 },
}));

const Product = (props) => {
  const [products, setProducts] = React.useState([]);
  const classes = useStyles();
  const [page, setPage] = React.useState(props.match.params.page ? props.match.params.page : 1);
  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
    const getData = () =>{
      productService.getProducts(page, perPage)
      .then((data) => {
        console.log("page number: "+page);
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
    } 
    React.useEffect(getData, [page, perPage]);
   
   const handleNewProductClick = () =>{
    props.history.push("/products/new");    
   }
   return (
    <div>
        <h1>Products</h1>
        <select value = {perPage} onChange={(e) => setPerPage(e.target.value)}
        style = {{width: "50px", height: "50px"}}>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        {userService.isLoggedIn() && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.addBtn}
          onClick={handleNewProductClick}
        >
          <AddIcon />
        </Fab>
      )}
        { 
        products.length === 0? 
        <p>There are no products in array</p>: 
        <Grid
        container spacing={25}
        direction="row"
        justifyContent="center"
        alignItems="center" >
        {
        products.map((product, index) =>
        <SingleProduct key={index} product = {product} onDelete={getData}/>
        )
        }
        </Grid> 
        }
         <Grid item xs={12}>
        <Pagination
          count={Math.ceil(total / perPage)}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            setPage(value);
            props.history.push("/products/" + page);
          }}
        />{" "}
        Total: {total} Showing {(page - 1) * perPage} to{" "}
        {(page - 1) * perPage + products.length}
      </Grid>
    </div>);
}
 
export default Product;
