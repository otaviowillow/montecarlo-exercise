import { Grid, Box, Card } from "@mui/material";

import { BestSellingByPlatform, BestSellingGames } from '../../components';
import { BestsellerProvider } from "../../context";

const Home = (): JSX.Element => {
  return (
    <BestsellerProvider>
      <Box padding={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BestSellingByPlatform />
          </Grid>
          <Grid item xs={6}>
            <Card>
              <BestSellingGames />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <BestSellingGames />
          </Grid>
        </Grid>
      </Box>
    </BestsellerProvider>
  )
}

export default Home