import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";

const Wrapper = styled("div", {})`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;

const MyButton = styled(Button, {})`
  color: white;
  background-color: #f48484;
  text-decoration-line: none;
  &:hover {
    background-color: #f55050;
  }
`;

export default {
  Wrapper,
  MyButton,
};
