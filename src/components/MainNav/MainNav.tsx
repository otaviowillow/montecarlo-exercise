import { AppBar, Toolbar, Typography } from '@mui/material';

const MainNav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton> */}
        <Typography variant="h5" component="h2" sx={{ flexGrow: 1 }}>
          Monte Carlo Test
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
