import { indigo } from '@mui/material/colors';
import { useEffect } from 'react'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useBestsellerDispatch, useBestsellerState } from '../../context';
import { useBestsellingServices } from '../../hooks'
// import { setGame } from '../../store/actions';

const tickFormatter = (value: string) => {
  const limit = 30;
  if (value.length < 30) return value.toLocaleString().replace(/ /g, '\u00A0');
  return `${value.toLocaleString().replace(/ /g, '\u00A0').substring(0, limit)}...`;
};

export const BestSellingGames = () => {
  const { platform, byGames } = useBestsellerState();
  const { fetchBestSellingGames, isFetching } = useBestsellingServices();
  const dispatch = useBestsellerDispatch();

  const handleClick = ({ name }: { name: string }) => {
    console.log("name", name)
    // dispatch(setGame(name))
  }

  useEffect(() => {
    if(!byGames && !isFetching) fetchBestSellingGames({})
  }, [isFetching, byGames, fetchBestSellingGames])

  useEffect(() => {
    if(platform) fetchBestSellingGames({ platform });
  }, [platform])

  if(!byGames) return null;

  return (
    <>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={byGames} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 200 }}>
          <Bar dataKey="value" fill={indigo[300]} label onClick={handleClick} />
          <XAxis type="number" tick={false} axisLine={false} />
          <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} tickFormatter={tickFormatter} tick={{fontSize: 12}} />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default BestSellingGames