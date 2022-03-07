import { Grid, Box, Card, CardContent, Typography } from "@mui/material";

import { BestSellingByPlatform, BestSellingGames, GameOnPlatform } from '../../components';
import { BestsellerProvider } from "../../context";
import { GameProvider } from "../../context/Game";

const Home = (): JSX.Element => {
  return (
    <BestsellerProvider>
      <Box padding={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <BestSellingByPlatform />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Top 15 games
                </Typography>
                <BestSellingGames />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Top 15 games
                </Typography>
                <GameProvider>
                  <GameOnPlatform />
                </GameProvider>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </BestsellerProvider>
  )
}

export default Home
