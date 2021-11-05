import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Navigation from './Navigation';


function App() {
  return (
    <Router>
    <div className="App">
        <Navigation />
    </div>
    </Router>
  );
}

export default App;
