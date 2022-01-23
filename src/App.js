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

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <Box p={3}>
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/creds" element={<Credentials/>} />
              </Routes>
          </Box>
        </div>
      </Router>
    </>
    
  );
}

export default App;
