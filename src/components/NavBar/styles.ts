import { styled } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const MyToolBar = styled(Toolbar, {})`
  background-color: #86a3b8;

  display: flex;
`;
const MyTypography = styled(Typography, {})`
  color: #e8d2a6;
  font-weight: bold;
`;
export default {
  MyToolBar,
  MyTypography,
};
