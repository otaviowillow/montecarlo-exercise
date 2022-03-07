/** 
 * 
 * This component is an example of data being mutated at a state level (specifically, where I set the fill colors)
 * I did it here instead of on the fetch request to showcase how I'd do it
 * 
*/

import { useEffect, useState } from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { blueGrey } from '@mui/material/colors';

import { useBestsellerDispatch, useBestsellerState } from '../../context';
import { useBestsellingServices } from '../../hooks'
import { setPlatform } from '../../store/actions';

import colors from './colors'

export const BestsellingInfo = () => {
  const [ data, setData ] = useState<{ name: string; value: number; fill: string; }[] | null>();
  const { byPlatforms } = useBestsellerState();
  const { fetchBestSellingByPlatform, isFetching } = useBestsellingServices();
  const dispatch = useBestsellerDispatch();

  const handleClick = ({ name }: { name: string }) => dispatch(setPlatform(name))

  useEffect(() => {
    if(!byPlatforms && !isFetching) fetchBestSellingByPlatform()
  }, [isFetching, byPlatforms, fetchBestSellingByPlatform])

  useEffect(() => {
    const handleData = () => setData(byPlatforms?.map((item) => ({...item, fill: colors[item.name] || blueGrey[500]})));
    if(byPlatforms) handleData();
  }, [byPlatforms])

  if(!data) return null;

  return (
    <>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" label={({ name }) => name} onClick={handleClick} />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default BestsellingInfo