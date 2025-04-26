import React, { useRef, useState } from 'react'
import { Button, Grid, TextField, InputAdornment, IconButton, Container, Box, Typography, Divider, FilledInput, InputLabel, FormControl } from "@mui/material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Send from '@mui/icons-material/Send';

import { postData } from '../API/apiCalls';
import CustomAlert from "./CustomAlert";
import { useAuth } from "../provider/AuthProvider";

const Form = ({ title, formType = "register" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState('');
  const { logIn } = useAuth();

  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateFormData()) {
      const username = userNameRef.current.value;
      const password = passwordRef.current.value;
      const formData = {
        username,
        password
      }
      postData(formType, formData)
        .then((data) => {
          if (formType === "register") {
            setAlert({ message: `${username} felhasználó sikeresen hozzáadva! `, severity: "success" })
          } else {
            setAlert({ message: `${username} felhasználó sikeresen bejelentkezve! `, severity: "success" })
            logIn(data)
          }
        })
        .then(() => {
          userNameRef.current.value = "";
          passwordRef.current.value = "";
        })
        .catch((e) => {
          setAlert({ message: e.message || "Hiba történt!", severity: "error" })
        })
    }
  }

  const validateFormData = () => {
    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    const validationErrors = {};

    if (!username) {
      validationErrors.username = 'A felhasználónév megadása kötelező!';
    }

    if (!password) {
      validationErrors.password = 'A jelszó megadása kötelező!';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return (
    <form data-aos="fade-up">
      <Container maxWidth="sm">
        <Box sx={{ border: '2px solid #a97142', borderRadius: "25px", mt: 5, mb: 10, p: 3 }} >
          <Grid size={12} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                my: 5,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Italianno, cursive",
                }}
                className="title"
                data-aos="fade-up"
              >
                {title}
              </Typography>
              <Divider
                data-aos="fade-down"
                data-aos-duration="400"
                sx={{
                  width: { xs: "8%", sm: "7%", md: "4%" },
                  border: "2px solid #1e8449 ",
                  marginTop: { xs: -1, md: -1.5, lg: -2 },
                }}
              />
            </Box>
          </Grid>

          <Grid size={12} sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <TextField
              label="Felhasználónév"
              inputRef={userNameRef}
              variant="filled"
              required
              error={!!errors?.username}
              helperText={errors?.username}
            />

            <FormControl variant="filled">
              <InputLabel htmlFor="filled-adornment-password">Jelszó</InputLabel>
              <FilledInput
                required
                id="filled-adornment-password"
                inputRef={passwordRef}
                type={showPassword ? 'text' : 'password'}
                error={!!errors?.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? 'hide the password' : 'display the password'
                      }
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <Typography variant='caption' sx={{ color: "red" }}>{errors?.password}</Typography>
            </FormControl>
            <Button variant='contained' startIcon={<Send />}
              sx={{
                "&:hover": {
                  background: 'white',
                  color: "#a97142",
                }
              }}
              onClick={handleSubmit}
            >Küldés</Button>
          </Grid>
        </Box>
      </Container>
      <CustomAlert alert={alert} setAlert={setAlert} />
    </form>
  )
}

export default Form;