import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Ping from './components/ping';
import About from './components/About';
import MainAttraction from './components/main-attraction';
import OtherAttractions from './components/other-attractions';
import Photos from './components/Photos';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Острог</h1>
        <hr/>
        <Menu />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/main-attraction" element={<MainAttraction />} />
        <Route path="/other-attractions" element={<OtherAttractions />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/ping" element={<Ping />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
