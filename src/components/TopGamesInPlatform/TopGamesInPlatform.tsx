import { useEffect } from 'react'
import { Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { useBestsellersDispatch, useBestsellersState } from '../../context';
import { useGameDispatch, useGameState } from '../../context/Game';
import { useBestsellersService } from '../../hooks'
import { setTopGamesByPlatforms, setGameName } from '../../store/actions';

const tickFormatter = (value: string) => {
  const limit = 23;
  if (value.length < limit) return value.toLocaleString().replace(/ /g, '\u00A0');
  return `${value.toLocaleString().replace(/ /g, '\u00A0').substring(0, limit)}...`;
};

export const BestSellingGames = () => {
  const { platform, byPlatforms } = useBestsellersState();
  const { Name } = useGameState();
  const { fetchTopByPlatform, isFetching } = useBestsellersService();
  const dispatch = useBestsellersDispatch();
  const gameDispatch = useGameDispatch();

  const handleClick = ({ activeLabel = "" }: { activeLabel?: string | undefined }) => gameDispatch(setGameName(activeLabel))

  useEffect(() => {
    const fetchItem = () => {
      const res = fetchTopByPlatform({});
      dispatch(setTopGamesByPlatforms(res));
    }
    if(!byPlatforms && !isFetching) fetchItem()
  }, [isFetching, byPlatforms, dispatch])

  useEffect(() => {
    const fetchItem = () => {
      const res = fetchTopByPlatform({ platform: platform || "" });
      dispatch(setTopGamesByPlatforms(res));
    }
    if(byPlatforms && !isFetching) fetchItem()
  }, [isFetching, platform])

  if(!byPlatforms) return <LinearProgress />;

  return (
    <Grid item xs={12} md={Name ? 8 : 12}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Top 15 games for {platform ? platform : "All platforms"}
          </Typography>
          <Typography gutterBottom variant="body1">
            In millions of USD
          </Typography>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={byPlatforms} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 120 }} onClick={handleClick}>
              <Bar cursor="pointer" dataKey="value" fill={indigo[300]} label />
              <XAxis type="number" tick={false} axisLine={false} />
              <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} tickFormatter={tickFormatter} tick={{fontSize: 12}} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default BestSellingGames