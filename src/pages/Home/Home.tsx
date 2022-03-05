
import { Card, Grid } from '@mui/material'
import { GamesListProvider } from '../../context'
import BiggestMetacriticList from '../../components/BiggestMetacriticList/BiggestMetacriticList';
import { LeastPopularGame } from '../../components';

const Content = (): JSX.Element => {  
  return (
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
          <BiggestMetacriticList />
        </GamesListProvider>
      </Grid>
    </Grid>
  )
}

const Home = () => {
  return (
    <Content />
  )
}

export default Home