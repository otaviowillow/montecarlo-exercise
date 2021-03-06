import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { useBestsellersDispatch, useBestsellersState } from '../../context';
import { useGameDispatch, useGameState } from '../../context/Game';
import { useBestsellersService, useGameService } from '../../hooks';
import {
  setGameDetails,
  setGameName,
  setTopGameByPlatform
} from '../../store/actions';
import GameDetailsCardHeader from './GameDetailsCardHeader';
import GameDetailsCardContent from './GameDetailsCardContent';

export const GameDetailsCard = () => {
  const navigate = useNavigate();
  const { byPlatform, byPlatforms } = useBestsellersState();
  const dispatch = useBestsellersDispatch();
  const { fetchGameOnPlatform } = useBestsellersService();
  const { Name, RawgGame } = useGameState();
  const { searchRawgGame, isFetching } = useGameService();
  const gameDispatch = useGameDispatch();

  const goToDetails = () => RawgGame && navigate(`/game/${RawgGame.id}`);

  useEffect(() => {
    const fetchItem = () => {
      if (Name) {
        const res = fetchGameOnPlatform({ name: Name });
        dispatch(setTopGameByPlatform(res));
      }
    };
    if (Name && !byPlatform) fetchItem();
  }, [Name, byPlatform, dispatch, fetchGameOnPlatform]);

  useEffect(() => {
    const fetchItem = async () => {
      const res = await searchRawgGame({ search: Name || '' });
      gameDispatch(setGameDetails(res));
    };
    if (Name && !isFetching && !RawgGame) fetchItem();
  }, [Name, RawgGame, gameDispatch, searchRawgGame, isFetching]);

  useEffect(() => {
    dispatch(setTopGameByPlatform(null));
    return () => gameDispatch(setGameDetails(null));
  }, [Name, byPlatforms, dispatch, gameDispatch]);

  useEffect(() => {
    gameDispatch(setGameName(null));
  }, [byPlatforms, gameDispatch]);

  if (!byPlatform) {
    return null;
  }

  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardActionArea onClick={goToDetails}>
          <GameDetailsCardHeader />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {byPlatform[0].Name}
            </Typography>
            <GameDetailsCardContent />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default GameDetailsCard;
