
import './App.css';
import Navigation from './Navigation';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
      <Navigation />
    </div>
    </ThemeProvider>
  );
}

export default App;
