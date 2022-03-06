/**
 * I made this component based on a question asked during the interview with Rick, mainly, how to deal
 * with contextAPI and performance bottlenecks. I made this component with a very unlikely scenario - multiple
 * copies of the same component access the same endpoint, but save them in different copies of the same state (of course, in real life
 * this is unlikely since we would probably have an endpoint that delivers the information for all components in one simple state)
 * This is the worst case scenario I can think of in terms of state inheritance - and as you can see, it can still perform very well
*/

import { Grid, Typography, Box } from '@mui/material'
import { GamesListProvider } from '../../context'
import { LeastPopularGame , WorstGamesList } from '../../components';
import { lightBlue } from '@mui/material/colors';

const Home = () => {
  return (
    <Box padding={2} bgcolor={lightBlue[100]}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <GamesListProvider>
            <LeastPopularGame platform='pc' />
          </GamesListProvider>
        </Grid>
        <Grid item xs={4}>
          <GamesListProvider>
            <LeastPopularGame platform='nintendo' />
          </GamesListProvider>
        </Grid>
        <Grid item xs={4}>
          <GamesListProvider>
            <LeastPopularGame platform='playstation' />
          </GamesListProvider>
        </Grid>
        <Grid item xs={12}>
          <GamesListProvider>
            <>
              <Typography variant="h2">Top 5 Worst games of all time</Typography>
              <Typography variant="h4">(According to metacritic)</Typography>
              <WorstGamesList />
            </>
          </GamesListProvider>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home