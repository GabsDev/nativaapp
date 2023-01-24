import AppBar from "@mui/material/AppBar";
import React from "react";
import { Grid } from "@mui/material";
import StyledComponents from "./styles";

const { MyToolBar, MyTypography } = StyledComponents;
export default function NavBar() {
  return (
    <>
      <AppBar position="static">
        <MyToolBar>
          <Grid container spacing={2}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <MyTypography variant="h4" align="center">
                Nativapps Movies React app
              </MyTypography>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </MyToolBar>
      </AppBar>
    </>
  );
}
