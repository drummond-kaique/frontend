import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import countries from "../../utils/countries";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function AutorForm() {
  const [country, setCountry] = React.useState("");
  const [value, setValue] = React.useState("female");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleCountryChange = event => {
    setCountry(event.target.value);
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="Nome"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="E-mail"
                name="E-mail"
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="date"
                label="Data de nascimento"
                name="Data"
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <FormLabel component="legend">Sexo</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Masculino"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Feminino"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Outro"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={5}>
              <InputLabel id="demo-simple-select-helper-label">País</InputLabel>
              <Select
                required
                labelId="country"
                id="country"
                inputProps={{
                  id: 'country-native-required',
                }}
                value={country}
                onChange={handleCountryChange}
              >
                <MenuItem value="">
                  <em>Nada</em>
                </MenuItem>
                {countries.map(item => {
                  return (
                    <MenuItem key={item.iso} value={item.nome}>
                      {item.nome}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>


            

            <Grid item xs={12} sm={7}>
              <TextField
                variant="outlined"
                fullWidth
                name="cpf"
                label="CPF"
                type="text"
                id="cpf"
                helperText="Caso o autor more no Brasil"
                inputProps={{ maxLength: 14 }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </Container>
  );
}
