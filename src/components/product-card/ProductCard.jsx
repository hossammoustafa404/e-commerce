import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import ProductWrapper from "./styles";

const ProductCard = ({ image, title, rating, price }) => {
  return (
    <ProductWrapper>
      <CardMedia className="card-media">
        <img src={image} alt={title} />
      </CardMedia>
      <CardHeader title={title} className="card-title" />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <CardContent>
          <Rating value={rating.rate} readOnly />
          <Typography>${price}</Typography>
        </CardContent>
        <CardActions>
          <Button>add to cart</Button>
        </CardActions>
      </Box>
    </ProductWrapper>
  );
};

export default ProductCard;
