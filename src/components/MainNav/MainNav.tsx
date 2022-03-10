import { AppBar, Toolbar, Typography } from '@mui/material';

const MainNav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="h2" sx={{ flexGrow: 1 }}>
          Monte Carlo Test
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
