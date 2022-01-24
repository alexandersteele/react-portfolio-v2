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
import Credentials from './layouts/Credentials/Credentials';
import Projects from './layouts/Projects/Projects';

function App() {

  return (
    <>
      <Router>
        <Box sx={{maxWidth: '1400px', margin: '0 auto'}}>
          <Header />
          <Navigation />
          <Box p={3}>
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/creds" element={<Credentials/>} />
                <Route exact path="/projects" element={<Projects/>} />
              </Routes>
          </Box>
        </Box>
      </Router>
    </>
    
  );
}

export default App;
