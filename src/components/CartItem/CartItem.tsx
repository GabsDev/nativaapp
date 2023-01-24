import Button from "@mui/material/Button";
import StyledComponents from "./styles";
import { Movie } from "../../types";
const { Wrapper, MyButton } = StyledComponents;

type Props = {
  item: Movie;
  addToCart: (clickedItem: Movie) => void;
  removeFromCart: (id: string) => void;
};

const CartItem = ({ item, addToCart, removeFromCart }: Props) => {
  return (
    <>
      <Wrapper>
        <div>
          <h3>{item.nombre}</h3>
          <div className="information">
            <p>Precio: ${item.price}</p>
            <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
          </div>
          <div className="buttons">
            <MyButton
              size="small"
              disableElevation
              variant="contained"
              onClick={() => removeFromCart(item.imdbID)}
            >
              -
            </MyButton>
            <p>{item.amount}</p>
            <MyButton
              size="small"
              disableElevation
              variant="contained"
              onClick={() => addToCart(item)}
            >
              +
            </MyButton>
          </div>
        </div>
        <img src={item.imagen} alt={item.nombre} />
      </Wrapper>
    </>
  );
};

export default CartItem;
