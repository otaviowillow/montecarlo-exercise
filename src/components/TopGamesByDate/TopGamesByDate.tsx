/** 
 * 
 * This component is an example of data being mutated at a state level (specifically, where I set the fill colors)
 * I did it here instead of on the fetch request to showcase how I'd do it
 * 
*/

import { useEffect, useMemo, useState } from 'react'
import { PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';
import { blueGrey } from '@mui/material/colors';

import { useBestsellersDispatch, useBestsellersState } from '../../context';
import { useBestsellersService } from '../../hooks'
import { setTopGamesByDate, setPlatform, setTopGamesByPlatforms } from '../../store/actions';

import PieActiveShape from './PieActiveShape';
import { Card, CardContent, Grid, Link, Typography } from '@mui/material';

import colors from './colors'

export const TopGamesByDate = () => {
  const [ selected, setSelected ] = useState<{ index: number, name: string } | undefined>();
  const [ data, setData ] = useState<{ name: string; value: number; fill: string; }[] | null>();
  const { byDate } = useBestsellersState();
  const { fetchTopByDate, isFetching } = useBestsellersService();
  const dispatch = useBestsellersDispatch();

  const label = ({ name, index }: { name: string, index: number }) => selected?.index !== index ? name : ""
  const onMouseUp = ({ name }: { name: string }, index: number) => selected?.index === index ? setSelected(undefined) : setSelected({ name, index });
  
  useMemo(() => {
    const handleData = () => setData(byDate?.map((item) => ({...item, fill: colors[item.name] || blueGrey[500]})));
    if(byDate) handleData();
  }, [byDate])

  useEffect(() => {
    const fetchItem = () => {
      const res = fetchTopByDate();
      dispatch(setTopGamesByDate(res));
    }
    if(!byDate && !isFetching) fetchItem()
  }, [isFetching, byDate, dispatch, fetchTopByDate])

  useEffect(() => {
    selected?.index || selected?.index === 0 ? dispatch(setPlatform(selected.name)) : dispatch(setTopGamesByPlatforms(null));
    return () => dispatch(setPlatform(null));
  }, [selected, dispatch])

  if(!data) return null;

  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4">
            Share of all platforms from 2010 - 2016
          </Typography>
          <Typography gutterBottom variant="body1">
            Based on information from <Link href="https://www.kaggle.com/sidtwr/videogames-sales-dataset" target="_blank">Video Games Sales dataset</Link>
          </Typography>
          <ResponsiveContainer width="100%" height={500}>
            <PieChart>
            <Legend iconType="circle" payload={[
              { value: 'Microsoft', type: 'circle', id: 'ID01', color: colors.XB },
              { value: 'Sony', type: 'circle', id: 'ID01', color: colors.PS4 },
              { value: 'Nintendo', type: 'circle', id: 'ID01', color: colors.Wii },
            ]} />
              <Pie 
                dataKey="value" 
                nameKey="name" 
                data={data} 
                activeIndex={selected?.index}
                activeShape={PieActiveShape}
                label={label} 
                onMouseUp={onMouseUp}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default TopGamesByDate