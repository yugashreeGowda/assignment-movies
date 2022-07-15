import React from "react";
import { Container } from "@mui/material";
import MovieList from "../../components/MovieList/MovieList";

const Home = () => {
  return (
    <Container
      sx={{
        paddingY: "20px",
      }}
    >
      <MovieList />
    </Container>
  );
};

export default Home;
