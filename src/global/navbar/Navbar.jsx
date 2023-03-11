import {
  Box,
  Container,
  IconButton,
  InputBase,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavbarWrapper from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const navigateTo = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <NavbarWrapper position="static">
      <Container>
        <Toolbar className="toolbar" disableGutters>
          <Box>
            <Typography
              className="brand"
              component="a"
              onClick={() => {
                navigateTo("/");
              }}
              variant="h1"
              color="white"
            >
              amazona
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <InputBase
              className="input-base"
              type="text"
              name="search"
              id="search"
              placeholder="search products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </form>
          <Box>
            <Switch className="switch" color="primary" />
            <Typography
              component="a"
              variant="h2"
              color="white"
              className="nav-link cart"
            >
              cart
            </Typography>
            <Typography
              component="a"
              variant="h2"
              color="white"
              className="nav-link"
            >
              login
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
