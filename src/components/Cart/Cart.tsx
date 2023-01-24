import CartItem from "../CartItem/CartItem";
import { Movie } from "../../types";
import StyledComponents from "./styles";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import * as React from "react";
const { Wrapper, MyAppBar, MyToolBar, MyTypography, MyButton } =
  StyledComponents;
type Props = {
  cartItems: Movie[];
  addToCart: (clickedItem: Movie) => void;
  removeFromCart: (id: string) => void;
  makePurchase: () => void;
};

const Cart = ({
  cartItems,
  addToCart,
  removeFromCart,
  makePurchase,
}: Props) => {
  const calculateTotal = (items: Movie[]) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  return (
    <>
      <MyAppBar position="static">
        <MyToolBar>
          <Grid container spacing={2}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <MyTypography variant="h4" align="center">
                Carrito
              </MyTypography>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </MyToolBar>
      </MyAppBar>
      <Wrapper>
        {cartItems.length === 0 ? (
          <p>No hay articulos en el carrito aun, seleccione alguna pelicula</p>
        ) : null}
        {cartItems.map((item) => (
          <CartItem
            key={item.imdbID}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
        <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      </Wrapper>
      <MyButton
        size="small"
        disableElevation
        variant="contained"
        onClick={makePurchase}
      >
        Realizar compra
      </MyButton>
    </>
  );
};

export default Cart;
