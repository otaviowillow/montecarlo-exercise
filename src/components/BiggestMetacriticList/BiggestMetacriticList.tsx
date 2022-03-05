/*
 * This is an example of a component that requires data mutation at the component level
*/

import { useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useGamesListState } from '../../context';
import { useGamesListService } from '../../hooks';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryTheme } from 'victory';

const BiggestMetacriticList = () => {
  const [ dataset, setDataset ] = useState<{x: string, y: number}[] | null>();
  const { results } = useGamesListState();
  const { fetchGamesList, isFetching } = useGamesListService();
  
  useEffect(() => {
    const handleDataset = async () => {
      const { results } = await fetchGamesList({ ordering: "metacritic" });
      results && setDataset(results.slice(0, 5).map(({ metacritic, name }) => ({ x: name, y: metacritic })))
    }
    if(!results && !isFetching) handleDataset();
  }, [results, fetchGamesList, isFetching])

  return (
    <>
      <Typography variant="h2" component="h2" sx={{ flexGrow: 1 }}>Top 5 Worst games of all time</Typography>
      <Typography variant="h4" component="h2"   sx={{ flexGrow: 1 }}>(According to metacritic)</Typography>
      {dataset && (
        <VictoryChart domainPadding={(dataset?.length * 10)}>
          <VictoryBar
            theme={VictoryTheme.material}
            data={dataset || []}
            style={{ labels: { fill: "white" } }}
            labels={dataset.map((data) => data.y)}
            labelComponent={<VictoryLabel dy={20}/>}
          />
          <VictoryLabel angle={-55} textAnchor="start" style={{ fontSize: "8px" }}>Testsss</VictoryLabel>
          {dataset.map((d, i) => {
              return (
                <VictoryAxis 
                  dependentAxis
                  key={i}
                  label={d.x}
                  style={{ tickLabels: { fill: "none" } }}
                  axisValue={d.x}
                />
              );
          })}
          <VictoryAxis tickFormat={() => ''} />
        </VictoryChart>
      )}
    </>
  )
}

export default BiggestMetacriticList
