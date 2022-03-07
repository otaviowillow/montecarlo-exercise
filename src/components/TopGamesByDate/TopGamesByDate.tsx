/** 
 * 
 * This component is an example of data being mutated at a state level (specifically, where I set the fill colors)
 * I did it here instead of on the fetch request to showcase how I'd do it
 * 
*/

import { useEffect, useState } from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { blueGrey } from '@mui/material/colors';

import { useBestsellersDispatch, useBestsellersState } from '../../context';
import { useBestsellersService } from '../../hooks'
import { setTopGamesByDate, setPlatform } from '../../store/actions';

import colors from './colors'

export const TopGamesByDate = () => {
  const [ data, setData ] = useState<{ name: string; value: number; fill: string; }[] | null>();
  const { byDate } = useBestsellersState();
  const { fetchTopByDate, isFetching } = useBestsellersService();
  const dispatch = useBestsellersDispatch();

  const handleClick = ({ name }: { name: string }) => dispatch(setPlatform(name))
  const label = ({ name }: { name: string }) => name

  useEffect(() => {
    const fetchItem = () => {
      const res = fetchTopByDate();
      dispatch(setTopGamesByDate(res));
    }
    if(!byDate && !isFetching) fetchItem()
  }, [isFetching, byDate])

  useEffect(() => {
    const handleData = () => setData(byDate?.map((item) => ({...item, fill: colors[item.name] || blueGrey[500]})));
    if(byDate) handleData();
  }, [byDate])

  if(!data) return null;

  return (
    <>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" label={label} onClick={handleClick} />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default TopGamesByDate