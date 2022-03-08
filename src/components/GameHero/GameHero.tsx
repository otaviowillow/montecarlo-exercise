import { sanitize } from 'dompurify';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import {
  Avatar,
  Card,
  CardMedia,
  Container,
  LinearProgress,
  Typography
} from '@mui/material';
import { blue } from '@mui/material/colors';
import { Box } from '@mui/system';

import { useGameDispatch, useGameState } from '../../context/Game';
import { useGameService } from '../../hooks';
import { setGameDetails } from '../../store/actions';

const title = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '12px'
};
const metaBox = { display: 'flex', flexFlow: 'column', alignItems: 'center' };
const metaAvatar = { bgcolor: blue[300], width: 75, height: 75 };

const GameHero = (): JSX.Element => {
  const { id } = useParams();
  const { fetchRawgGame, isFetching } = useGameService();
  const { RawgGame } = useGameState();
  const dispatch = useGameDispatch();

  useMemo(() => {
    const fetchItem = async () => {
      const res = await fetchRawgGame({ id });
      dispatch(setGameDetails(res));
    };
    if (!isFetching && !RawgGame) fetchItem();
  }, [id, fetchRawgGame, isFetching, RawgGame, dispatch]);

  if (!RawgGame) return <LinearProgress />;

  return (
    <Card>
      <CardMedia
        component="img"
        height="440"
        image={RawgGame.background_image}
        alt="Game cover"
      />
      <Container sx={title}>
        <Typography variant="h2" marginRight={2}>
          {RawgGame.name}
        </Typography>
        <Box sx={metaBox}>
          <Avatar sx={metaAvatar}>{RawgGame.metacritic}</Avatar>
          <Typography variant="h6">Metacritic</Typography>
        </Box>
      </Container>
      <Container>
        {RawgGame.developers?.map((dev, i) => (
          <Typography key={i} variant="h4">
            {dev.name}
          </Typography>
        ))}
        <p
          dangerouslySetInnerHTML={{
            __html: sanitize(RawgGame.description || '')
          }}
        />
      </Container>
    </Card>
  );
};

export default GameHero;
