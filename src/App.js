
import './App.css';
import Navigation from './components/Navigation';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { useSelector } from 'react-redux';





function App() {

  const mode = useSelector(store => store.theme.mode)
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navigation />
      </div>
    </ThemeProvider>
  );
}

export default App;
