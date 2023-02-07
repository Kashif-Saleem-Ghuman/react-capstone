import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';

import Details from './Components/Details';
import Input from './Components/Input';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Input />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/details" element={<Details />} />

        </Routes>

      </Router>

    </>

  );
}

export default App;
