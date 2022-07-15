import {
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MovieCard = ({ movie }) => {
  const { title, userTag, pageViews, poster } = movie;

  return (
    <Grid item md={6} sx={{ width: "100%" }}>
      <Card sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <CardContent>
            <Typography component="div" variant="h5">
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {`User Tag: ${userTag} | Page Views: ${pageViews}`}
            </Typography>
          </CardContent>
        </Box>
        {poster && (
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={poster}
            alt={title}
          />
        )}
      </Card>
    </Grid>
  );
};

export default MovieCard;
