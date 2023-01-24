import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

const MyAppBar = styled(AppBar, {})`
  background-color: #86a3b8;
  margin-top: 10px;
`;

const MyTypography = styled(Typography, {})`
  flex-grow: 1;
  color: #ececec;
  font-weight: bold;
`;

export default {
  MyAppBar,
  MyTypography,
};
