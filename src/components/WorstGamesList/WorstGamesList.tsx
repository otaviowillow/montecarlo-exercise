/*
 * This is an example of a component that requires data mutation at the component level
*/

import { useEffect, useState } from 'react'

import { useGamesListState } from '../../context';
import { useGamesListService } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { lightBlue } from '@mui/material/colors';
import { Bar, BarChart, LabelList, ResponsiveContainer } from 'recharts';

const WorstGamesList = () => {
  const navigate = useNavigate();
  const [ dataset, setDataset ] = useState<{x: string, y: number}[] | null>();
  const { results } = useGamesListState();
  const { fetchGamesList, isFetching } = useGamesListService();
  
  useEffect(() => {
    const handleDataset = async () => {
      const { results } = await fetchGamesList({ ordering: "metacritic" });
      results && setDataset(results.slice(0, 5).map(({ name }, i) => ({ x: name, y: i + 1  })))
    }
    if(!results && !isFetching) handleDataset();
  }, [results, fetchGamesList, isFetching])

  return (
    <div>
      {dataset && results && (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dataset} layout="horizontal">
            <Bar dataKey="y" fill={lightBlue[700]} onClick={(e) => navigate(`/game/${results[e.payload.y - 1].id}`)}  style={{ cursor: "pointer" }}>
              <LabelList dataKey="x" position="outside" fontSize={20} />
              <LabelList dataKey="y" position="top" fontSize={30} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default WorstGamesList
