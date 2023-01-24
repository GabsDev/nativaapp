import { styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Wrapper = styled("aside", {})`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`;

const MyAppBar = styled(AppBar, {})`
  background-color: #86a3b8;
`;

const MyToolBar = styled(Toolbar, {})`
  background-color: #86a3b8;

  display: flex;
`;
const MyTypography = styled(Typography, {})`
  color: #e8d2a6;
  font-weight: bold;
`;
const MyButton = styled(Button, {})`
  color: white;
  background-color: #f48484;
  width: 200px;
  margin: 0 auto 0 auto;
  text-decoration-line: none;
  &:hover {
    background-color: #f55050;
  }
`;
export default {
  Wrapper,
  MyAppBar,
  MyToolBar,
  MyTypography,
  MyButton,
};
