import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';

const MainNav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h5" component="h2" sx={{ flexGrow: 1 }}>
          Montecarlo test
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default MainNav