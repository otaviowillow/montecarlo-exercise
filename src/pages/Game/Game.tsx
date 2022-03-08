import { Grid } from '@mui/material';

import { GameProvider } from '../../context/Game';
import { GameHero, GamePhotos } from '../../components';

const Game = (): JSX.Element => {
  return (
    <GameProvider>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <GameHero />
        </Grid>
        <Grid item xs={12}>
          <GamePhotos />
        </Grid>
      </Grid>
    </GameProvider>
  );
};

export default Game;
