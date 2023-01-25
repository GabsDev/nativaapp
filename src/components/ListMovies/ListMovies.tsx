import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import StyledComponents from "./styles";
import { Movie } from "../../types";
import CardMovie from "../CardMovie/CardMovie";
import { Paper } from "@mui/material";

const { MyAppBar, MyTypography } = StyledComponents;
interface Props {
  movies: Array<Movie>;
  handleAddToCart: (clickedItem: Movie) => void;
}
export default function ListMovies(props: Props) {
  const { movies, handleAddToCart } = props;
  return (
    <React.Fragment>
      <Container>
        <MyAppBar position="static">
          <Toolbar>
            <Grid container spacing={2}>
              <Grid item md={2}>
                <MyTypography variant="h6">Nombre</MyTypography>
              </Grid>
              <Grid item md={2}>
                <MyTypography variant="h6">Año</MyTypography>
              </Grid>
              <Grid item md={2}>
                <MyTypography variant="h6">Tipo</MyTypography>
              </Grid>
              <Grid item md={2}>
                <MyTypography variant="h6">Imagen</MyTypography>
              </Grid>
              <Grid item md={2}>
                <MyTypography variant="h6">Ordenar</MyTypography>
              </Grid>
            </Grid>
          </Toolbar>
        </MyAppBar>
        <Paper variant="outlined" square>
          {movies.length > 0 &&
            movies.map((movie, index) => {
              return (
                <div key={index + 1}>
                  <CardMovie movie={movie} handleAddToCart={handleAddToCart} />
                </div>
              );
            })}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
