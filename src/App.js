import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
// import TvShowHome from './Pages/TvShowHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        {/* <Route path='/tvshow' element={<TvShowHome />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
