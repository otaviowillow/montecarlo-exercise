import { Grid, Box } from "@mui/material";

import { TopGamesByDate, TopGamesInPlatform, GameDetailsCard } from '../../components';
import { BestsellersProvider } from "../../context";
import { GameProvider } from "../../context/Game";

const Home = (): JSX.Element => {
  return (
    <BestsellersProvider>
      <GameProvider>
        <Box padding={2}>
          <Grid container spacing={2}>
            <TopGamesByDate />
            <TopGamesInPlatform />
            <GameDetailsCard />
          </Grid>
        </Box>
      </GameProvider>
    </BestsellersProvider>
  )
}

export default Home
