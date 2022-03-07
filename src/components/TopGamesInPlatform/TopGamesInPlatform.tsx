import { indigo } from '@mui/material/colors';
import { useEffect } from 'react'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useBestsellersDispatch, useBestsellersState } from '../../context';
import { useGameDispatch } from '../../context/Game';
import { useBestsellersService } from '../../hooks'
import { setTopGamesByPlatforms, setGameName } from '../../store/actions';

const tickFormatter = (value: string) => {
  const limit = 30;
  if (value.length < 30) return value.toLocaleString().replace(/ /g, '\u00A0');
  return `${value.toLocaleString().replace(/ /g, '\u00A0').substring(0, limit)}...`;
};

export const BestSellingGames = () => {
  const { platform, byPlatforms } = useBestsellersState();
  const { fetchTopByPlatform, isFetching } = useBestsellersService();
  const dispatch = useBestsellersDispatch();
  const gameDispatch = useGameDispatch();

  const handleClick = ({ name }: { name: string }) => gameDispatch(setGameName(name))

  useEffect(() => {
    const fetchItem = () => {
      const res = fetchTopByPlatform({});
      dispatch(setTopGamesByPlatforms(res));
    }
    if(!byPlatforms && !isFetching) fetchItem()
  }, [isFetching, byPlatforms])

  useEffect(() => {
    const fetchItem = () => {
      if(platform) {
        const res = fetchTopByPlatform({ platform });
        dispatch(setTopGamesByPlatforms(res));
      }
    }
    if(platform) fetchItem();
  }, [platform])

  if(!byPlatforms) return null;

  return (
    <>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={byPlatforms} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 200 }}>
          <Bar dataKey="value" fill={indigo[300]} label onClick={handleClick} />
          <XAxis type="number" tick={false} axisLine={false} />
          <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} tickFormatter={tickFormatter} tick={{fontSize: 12}} />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default BestSellingGames