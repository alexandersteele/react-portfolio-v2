/** @jsxImportSource theme-ui */
import { Box  } from 'theme-ui';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './layouts/Home/Home';
import About from './layouts/About/About';

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <Box p={3}>
            <a 
                href="https://reactjs.org" 
                sx={{fontWeight: 'bold', color: 'primary', textDecoration: 'none'}}
              >
                Link
              </a>
          </Box>
          <Box p={3}>
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
              </Routes>
          </Box>
        </div>
      </Router>
    </>
    
  );
}

export default App;
