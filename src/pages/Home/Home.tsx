import { Grid, Box, Card, CardContent, Typography } from "@mui/material";

import { TopGamesByDate, TopGamesInPlatform, GameDetailsCard } from '../../components';
import { BestsellersProvider } from "../../context";
import { GameProvider } from "../../context/Game";

const Home = (): JSX.Element => {
  return (
    <BestsellersProvider>
      <GameProvider>
        <Box padding={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <TopGamesByDate />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Top 15 games
                  </Typography>
                  <TopGamesInPlatform />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <GameDetailsCard />
            </Grid>
          </Grid>
        </Box>
      </GameProvider>
    </BestsellersProvider>
  )
}

export default Home
