import { Outlet } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { lightBlue, purple } from '@mui/material/colors';
import { MainNav } from '../../components'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: lightBlue[700],
    },
    secondary: {
      main: purple[300],
    },
  },
});

const Layout = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainNav />
      <Outlet />
    </ThemeProvider>
  );
}

export default Layout;
