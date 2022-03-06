import { Card, CardActionArea, CardContent, CardMedia, LinearProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGamesListState } from "../../context";
import { useGamesListService } from "../../hooks";

const LeastPopularGame = ({ platform }: { platform: "nintendo" | "playstation" | "xbox" | "pc" }): JSX.Element => {
  const navigate = useNavigate();
  const { results } = useGamesListState();
  const { fetchGamesList, isFetching } = useGamesListService();
  
  const gotoDetails = () => results && navigate(`/game/${results[0].id}`)

  useEffect(() => {
    const platforms = { nintendo: "7", playstation: "3", xbox: "2", pc: "1" } // RAWG services uses integer for platforms
    if(!results && !isFetching) fetchGamesList({ ordering: "metacritic", parent_platforms: platforms[platform] });
  }, [results, fetchGamesList, isFetching, platform])
  
  if(!results) return (
    <Card>
      <LinearProgress />
    </Card>
  );

  return (
    <Card>
      <CardActionArea onClick={gotoDetails}>
        <CardMedia
          component="img"
          height="240"
          image={results[0].background_image}
          alt="Game cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {results[0].name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The worst game for {platform} on metacritic
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default LeastPopularGame