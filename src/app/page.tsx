import '@styles/globals.css';
import dynamic from 'next/dynamic';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Signup from './auth/signup/page';
import AdminDashboard from './admin/page';
import { ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#171b36',
      light: '#45495e',
    },
    secondary: {
      main: '#316aa7',
    },
  },
};
const theme = createTheme(themeOptions);

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AdminDashboard/>
      </ThemeProvider>
    </>
  );
}
