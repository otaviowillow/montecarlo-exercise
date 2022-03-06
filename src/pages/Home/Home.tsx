/**
 * I made this component based on a question asked during the interview with Rick. The question was about how to deal
 * with contextAPI and performance bottlenecks. I made this component with a very unlikely scenario - multiple
 * copies of the same component accessing the same endpoint, and then saving them in different copies of the same state (of course, in real life
 * this is unlikely since we would probably have an endpoint that delivers the information for all components in one simple state)
 * This is the worst case scenario I can think of in terms of state inheritance - and as you can see, it can still perform very well
*/

import { Grid, Typography, Box } from '@mui/material'
import { GamesListProvider } from '../../context'
import { LeastPopularGame , WorstGamesList } from '../../components';
import { lightBlue } from '@mui/material/colors';

const Home = () => {
  return (
    <>
      <Box padding={2} bgcolor={lightBlue[200]}>
        <Typography gutterBottom variant="h2">Welcome to the worst games that have ever existed! (according to Metacritic)</Typography>
        <Typography variant="body1">Even though I didn't really had any good ideas on where to use some useful visualization data, I still wanted to show a code example for you so I've forced it a litte bit on the top 5 down there, hope you don't mind</Typography>
      </Box>
      <Box padding={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          </Grid>
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
                <Typography variant="h2">Top 5 Worst games of all time - Cross platforms</Typography>
                <WorstGamesList />
              </>
            </GamesListProvider>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home