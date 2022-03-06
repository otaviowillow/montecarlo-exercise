/*
 * This is an example of a component that requires data mutation at the component level
*/

import { ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { lightBlue } from '@mui/material/colors';
import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { useGamesListDispatch, useGamesListState } from '../../context';
import { useGamesListService } from '../../hooks';
import { Bar, BarChart, LabelList, ResponsiveContainer } from 'recharts';
import { resetGamesList } from '../../store/actions';

const WorstGamesList = (): JSX.Element | null => {
  const [ dataset, setDataset ] = useState<{x: string, y: number}[] | null>();
  const [ dates, setDates ] = useState("2019-01-01,2021-12-31");
  const [ parent_platforms, setPlatforms ] = useState("1,2,3,7");
  const navigate = useNavigate();
  const { results } = useGamesListState();
  const { fetchGamesList, isFetching } = useGamesListService();
  const dispatch = useGamesListDispatch();

  const handleDates = (e: SelectChangeEvent, child: ReactNode) => setDates(e.target.value);
  const handlePlatforms = (e: SelectChangeEvent, child: ReactNode) => setPlatforms(e.target.value);
  
  useEffect(() => {
    const handleDataset = async () => {
      const { results } = await fetchGamesList({ ordering: "metacritic", dates, parent_platforms });
      results && setDataset(results.slice(0, 5).map(({ name, metacritic, id }, i) => ({ x: name, y: metacritic, id  })))
    }
    if(!results && !isFetching) handleDataset();
  }, [results, fetchGamesList, isFetching, dates, parent_platforms])

  useEffect(() => {
    if(dates || parent_platforms) dispatch(resetGamesList());
  }, [dates, parent_platforms, dispatch])

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Typography variant="h2" marginRight={2}>Top 5 Worst games from</Typography>
        <Select value={dates} label="Age" onChange={handleDates}>
          <MenuItem value={"2019-01-01,2021-12-31"}>All Time</MenuItem>
          <MenuItem value={"2019-01-01,2019-12-31"}>2019</MenuItem>
          <MenuItem value={"2020-01-01,2020-12-31"}>2020</MenuItem>
          <MenuItem value={"2021-01-01,2021-12-31"}>2021</MenuItem>
        </Select>
        <Typography variant="h2" marginLeft={2} marginRight={2}>on</Typography>
        <Select value={parent_platforms} label="Platforms" onChange={handlePlatforms}>
          <MenuItem value={"1,2,3,7"}>All platforms</MenuItem>
          <MenuItem value={"1"}>PC</MenuItem>
          <MenuItem value={"2"}>Playstation</MenuItem>
          <MenuItem value={"3"}>Xbox</MenuItem>
          <MenuItem value={"7"}>Nintendo</MenuItem>
        </Select>
      </Box>
      <Typography variant="h5" marginRight={2}>Numbers are from Metacritic</Typography>
        <ResponsiveContainer width="100%" minHeight={500}>
        <BarChart data={dataset || []} layout="horizontal">
          <Bar dataKey="y" fill={lightBlue[700]} onClick={(e) => results && navigate(`/game/${e.payload.id}`)}  style={{ cursor: "pointer" }}>
            <LabelList dataKey="x" position="outside" fontSize={20} />
            <LabelList dataKey="y" position="top" fontSize={30} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default WorstGamesList
