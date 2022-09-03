import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShow from './pages/TvShow';
import Premium from './pages/Premium';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvshow' element={<TvShow />} />
        <Route path='/premium' element={<Premium />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
