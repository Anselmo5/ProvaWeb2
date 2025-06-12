import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './page/Home';
import Galeria from './page/Galerias'
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
         <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galerias" element={<Galeria/>} />
          </Routes>
         </div>
      </div>
    </Router>
  );
}