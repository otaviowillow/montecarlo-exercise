
import { Card, Grid } from '@mui/material'
import { GamesListProvider } from '../../context'
import BiggestMetacriticList from '../../components/BiggestMetacriticList/BiggestMetacriticList';

const Content = (): JSX.Element => {  
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card>
          <BiggestMetacriticList />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>xs=4</Card>
      </Grid>
      <Grid item xs={4}>
        <Card>xs=4</Card>
      </Grid>
      <Grid item xs={12}>
        <Card>xs=8</Card>
      </Grid>
    </Grid>
  )
}

const Home = () => {
  return (
    <GamesListProvider>
      <Content />
    </GamesListProvider>
  )
}

export default Home