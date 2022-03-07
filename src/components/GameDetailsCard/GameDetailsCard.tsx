import { Card, CardContent, Typography } from '@mui/material';
import { useEffect } from 'react'
import { useBestsellersDispatch, useBestsellersState } from '../../context';
import { useGameDispatch, useGameState } from '../../context/Game';
import { useBestsellersService } from '../../hooks'
import { setGameName, setTopGameByPlatform } from '../../store/actions';

export const GameDetailsCard = () => {
  const { Name } = useGameState();
  const { byPlatform, byPlatforms } = useBestsellersState();
  const dispatch = useBestsellersDispatch();
  const { fetchGameOnPlatform } = useBestsellersService();
  const gameDispatch = useGameDispatch();

  useEffect(() => {
    const fetchItem = () => {
      if(Name) {
        const res = fetchGameOnPlatform({ name: Name });
        dispatch(setTopGameByPlatform(res));
      }
    }
    if(Name && !byPlatform) fetchItem();
  }, [Name, byPlatform, dispatch, fetchGameOnPlatform])

  useEffect(() => {
    dispatch(setTopGameByPlatform(null));
  }, [Name, byPlatforms])
  
  useEffect(() => {
    gameDispatch(setGameName(null));
  }, [byPlatforms])

  if(!byPlatform) return null;

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Top 15 games
        </Typography>
        {byPlatform[0].Name}
      </CardContent>
    </Card>
  )
}

export default GameDetailsCard