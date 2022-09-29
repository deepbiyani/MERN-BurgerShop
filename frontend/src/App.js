
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layout/Header';

import './styles/app.scss';
import "./styles/header.scss";

function App() {
  return (
      <Router>
        <Header isAuthenticated={true}/>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
