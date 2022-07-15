import { useEffect, useState } from "react";
import { Grid, Skeleton } from "@mui/material";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovieList = async () => {
    try {
      setLoading(true);
      // NOTE: https://hoblist.com/api/movieList api for post request is not working
      const response = await fetch(
        "https://hoblist.com/_next/data/2GTRJKV3TK4mAPNGOUMSR/en/favourites/list/movies.json?category=movies&language=kannada&genere=all&sort=voting"
      );
      const {
        pageProps: { result = [] },
      } = await response.json();
      setMovieList(JSON.parse(result));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  if (loading) {
    return <Skeleton variant="rectangular" width="100%" height="50vh" />;
  }

  return (
    <Grid container spacing={2}>
      {movieList.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </Grid>
  );
};

export default MovieList;
