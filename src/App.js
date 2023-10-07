import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import GamePage from './component/GamePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home /> }></Route>
       <Route path='/gamepage' element={<GamePage/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
