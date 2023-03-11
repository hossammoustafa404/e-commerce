import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import ProductsWrapper from "./styles";
import getProducts from "../../api/productsApi";
import { ProductCard } from "../";

const ProductsHome = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    getProducts().then((pro) => {
      setProducts(pro.filter((p) => p.category !== "women's clothing"));
      setStatus("idle");
    });
  }, []);

  console.log(products);
  const renderedProducts = products.map((pro) => (
    <Grid item key={pro.id} xs={12} md={6} lg={4}>
      <ProductCard {...pro} />
    </Grid>
  ));
  return (
    <ProductsWrapper>
      <Container>
        <Grid container spacing={6}>
          {renderedProducts}
        </Grid>
      </Container>
    </ProductsWrapper>
  );
};

export default ProductsHome;
