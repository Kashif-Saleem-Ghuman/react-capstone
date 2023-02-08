import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './Components/Hero';

import Details from './Components/Details';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/details" element={<Details />} />

        </Routes>

      </Router>

    </>

  );
}

export default App;
