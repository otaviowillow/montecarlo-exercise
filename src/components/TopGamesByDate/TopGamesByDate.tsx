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
import { setTopGamesByDate, setPlatform, setTopGamesByPlatforms } from '../../store/actions';

import colors from './colors'
import PieActiveShape from './PieActiveShape';

export const TopGamesByDate = () => {
  const [ selected, setSelected ] = useState<{ index: number, name: string } | undefined>();
  const [ data, setData ] = useState<{ name: string; value: number; fill: string; }[] | null>();
  const { byDate } = useBestsellersState();
  const { fetchTopByDate, isFetching } = useBestsellersService();
  const dispatch = useBestsellersDispatch();

  const label = ({ name, index }: { name: string, index: number }) => selected?.index !== index ? name : ""
  const onSelect = ({ name }: { name: string }, index: number) => selected?.index === index ? setSelected(undefined) : setSelected({ name, index });

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

  useEffect(() => {
    selected?.index || selected?.index === 0 ? dispatch(setPlatform(selected.name)) : dispatch(setTopGamesByPlatforms(null));
  }, [selected])

  if(!data) return null;

  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart>
        <Pie 
          dataKey="value" 
          nameKey="name" 
          data={data} 
          activeIndex={selected?.index}
          activeShape={PieActiveShape}
          label={label} 
          onMouseUp={onSelect}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default TopGamesByDate