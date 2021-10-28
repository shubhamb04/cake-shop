import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Stack,
  Box,
  Toolbar,
  Container,
  Link,
} from "@mui/material";
import CakeSharpIcon from "@mui/icons-material/CakeSharp";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CakeSharpIcon />
          <Typography variant="h6">Cake House</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Cake Gallery
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            All our cakes are home-made and every ingredient is chosen carefully
            by keeping your health in mind!
          </Typography>
        </Container>
      </main>
    </>
  );
};

export default App;
