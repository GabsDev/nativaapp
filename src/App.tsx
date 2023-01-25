import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Box, Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Search";
import NavBar from "./components/NavBar/NavBar";
import { Badge, Drawer, Pagination, Stack, styled } from "@mui/material";
import { Movie } from "./types";
import { getMovies } from "./services/getMovies";
import ListMovies from "./components/ListMovies/ListMovies";
import _ from "underscore";
import { AddShoppingCart } from "@mui/icons-material";
import Cart from "./components/Cart/Cart";
interface AppState {
  movies: Array<Movie>;
  searchTerm: string;
}

const MyTextField = styled(TextField, {})`
  width: 200px;
  border-radius: 50px;
`;
const MyButton = styled(Button, {})`
  color: white;
  background-color: #f48484;
  width: 175px;
  font-size: 10px;
  margin-left: 1px;
  margin-bottom: 1px;
  &:hover {
    background-color: #f55050;
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;

function App() {
  const [movies, setMovies] = useState<AppState["movies"]>([]);
  const [searchTerm, setSearchTerm] = useState<AppState["searchTerm"]>("");
  const [cartItems, setCartItems] = useState<Movie[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [page, setPage] = React.useState(1);
  const [totalResults, setTotalResults] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const handleChangePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleSetSearchTerm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchFromApi = useCallback((): void => {
    getMovies(searchTerm, page, setTotalResults).then(setMovies);
  }, [searchTerm, page, setTotalResults]);

  const handleAddToCart = (clickedItem: Movie) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find(
        (item) => item.imdbID === clickedItem.imdbID
      );

      if (isItemInCart) {
        return prev.map((item) =>
          item.imdbID === clickedItem.imdbID
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.imdbID === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as Movie[])
    );
  };

  const handleClearSelection = (): void => {
    setSearchTerm("");
    setMovies([]);
  };

  const getTotalItems = (items: Movie[]) =>
    items.reduce((acc, item) => acc + item.amount, 0);
  const makePurchase = (): void => {
    setCartItems([]);
  };

  useEffect(() => {
    handleSearchFromApi();
  }, [handleSearchFromApi, page]);

  useEffect(() => {
    setPage(1);
  }, [searchTerm.length]);

  useEffect(() => {
    setTotalPages(
      totalResults % 1 === 0
        ? (totalResults / 10) % 1 === 0
          ? totalResults / 10
          : Math.round(totalResults / 10)
        : Math.round(totalResults / 10)
    );
  }, [totalResults]);

  console.log(movies);
  console.log(totalResults);
  console.log(totalPages);
  return (
    <>
      <NavBar />
      <Box sx={{ marginTop: 15 }}>
        <Container maxWidth="xl">
          <Drawer
            anchor="right"
            open={cartOpen}
            onClose={() => setCartOpen(false)}
          >
            <Cart
              cartItems={cartItems}
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
              makePurchase={makePurchase}
            />
          </Drawer>
          <StyledButton onClick={() => setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color="error">
              <AddShoppingCart />
            </Badge>
          </StyledButton>
          <Grid container spacing={2}>
            <Grid item sm={2} md={3}></Grid>
            <Grid item sm={8} md={3}>
              <MyTextField
                id="input-with-icon-textfield"
                label="Titulo Pelicula"
                value={searchTerm}
                onChange={handleSetSearchTerm}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item sm={2} md={5}>
              <MyButton
                variant="contained"
                onClick={handleSearchFromApi}
                startIcon={<AddIcon />}
              >
                Search Movie
              </MyButton>
              <MyButton
                variant="contained"
                onClick={handleClearSelection}
                startIcon={<AddIcon />}
              >
                Clear selection
              </MyButton>
            </Grid>
          </Grid>
          {!_.isEmpty(movies) ? (
            <ListMovies movies={movies} handleAddToCart={handleAddToCart} />
          ) : (
            ""
          )}
          {!_.isEmpty(movies) && (
            <Stack spacing={2} sx={{ marginLeft: 100, marginTop: 5 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChangePagination}
              />
            </Stack>
          )}
        </Container>
      </Box>
    </>
  );
}

export default App;
