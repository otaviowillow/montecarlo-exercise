import { CardMedia, LinearProgress } from '@mui/material';
import { useGameState } from '../../context/Game';

const GameDetailsCardHeader = () => {
  const { RawgGame } = useGameState();

  if (!RawgGame) return <LinearProgress />;

  return (
    <CardMedia
      component="img"
      height="140"
      image={RawgGame.background_image}
      alt="Game cover"
      sx={{ objectPosition: 'top' }}
    />
  );
};

export default GameDetailsCardHeader;
