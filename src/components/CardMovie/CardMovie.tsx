import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DatePicker from "react-date-picker";
import {
  Avatar,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Movie } from "../../types";
import StyledComponents from "./styles";
import { SyntheticEvent, useEffect, useState } from "react";

const { MyButton, MyTypography } = StyledComponents;
interface Props {
  movie: Movie;
  handleAddToCart: (clickedItem: Movie) => void;
}
export default function CardMovie(props: Props) {
  const { movie, handleAddToCart } = props;
  const [displayEsRenta, setDisplayesInvitado] = useState("none");
  const [fechaRenta, setFechaRenta] = useState(new Date());
  const [esRenta, setEsRenta] = React.useState<string>("");
  console.log(movie);
  const navigate = useNavigate();
  /*const handleEditVehiculo = () => {
    localStorage.setItem("placaSeleccionada", vehiculo.placa);
    let path = `/servicio-administrador-automotor`;
    navigate(path);
  };*/

  const handleEsRenta = (event: SyntheticEvent<Element, Event>) => {
    console.log(event);
    const checkValue = event.target as HTMLInputElement;
    setEsRenta(checkValue.value);
  };

  useEffect(() => {
    if (esRenta === "1") {
      setDisplayesInvitado("block");
    } else {
      setDisplayesInvitado("none");
    }
  }, [esRenta]);

  return (
    <Box sx={{}}>
      <Grid container spacing={2}>
        <Grid item md={2}>
          <MyTypography variant="subtitle1">{movie.nombre}</MyTypography>
        </Grid>
        <Grid item md={2}>
          <MyTypography variant="subtitle1">{movie.anno}</MyTypography>
        </Grid>
        <Grid item md={2}>
          <MyTypography variant="subtitle1">{movie.tipo}</MyTypography>
        </Grid>
        <Grid item md={2}>
          <Avatar
            alt="Remy Sharp"
            src={movie.imagen}
            sx={{ width: 100, height: 100 }}
          />
        </Grid>
        <Grid item md={2}>
          <MyButton onClick={() => handleAddToCart(movie)} variant="contained">
            Obtener pelicula
          </MyButton>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Es renta
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                checked={esRenta === "1"}
                value="1"
                control={<Radio color="warning" />}
                label="Si"
                name="conduceFuncionario"
                onChange={handleEsRenta}
              />
              <FormControlLabel
                checked={esRenta === "0"}
                value="0"
                control={<Radio color="warning" />}
                label="No"
                name="conduceFuncionario"
                onChange={handleEsRenta}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item md={2}>
          <Box sx={{ display: `${displayEsRenta}`, marginTop: 6 }}>
            <DatePicker
              name="fechaRenta"
              onChange={setFechaRenta}
              value={fechaRenta}
            />
          </Box>
        </Grid>
      </Grid>
      <hr />
    </Box>
  );
}
