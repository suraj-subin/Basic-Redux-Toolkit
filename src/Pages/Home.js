import React, { useEffect } from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductData } from "../Redux/Reducer/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
  const baseURL = "https://fakestoreapi.com/products?limit=5";

  const fetchProduct = async () => {
    const response = await axios.get(baseURL);
    console.log("Api response is ", response);
    dispatch(
      setProductData({
        producted: response.data,
      })
    );
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  const item = useSelector((state) => state.abc.products);
  console.log("Redux item is", item);
  return (
    <div>
      <Grid container spacing={12} sx={{ py: 8 }}>
        {item.map((product) => (
          <Grid item key={product.id}>
            <Card sx={{ maxWidth: 300, height: 500, p: 2, boxShadow: 8 }}>
              <Link to={`product/${product.id}`}>
                <CardMedia
                  component="img"
                  height="300"
                  width="400"
                  image={product.image}
                />
              </Link>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {product.title}
                </Typography>
                <Typography>
                  <span>रू</span>
                  {product.price}
                </Typography>
                <Typography>{product.rating.rate}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
