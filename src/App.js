import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import NotMatch from './component/NotMatch/NotMatch';
import CountryDetail from './component/CountryDetail/CountryDetail';

function App() {
  return (

          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/countryDetail/:id" element={<CountryDetail />} />
                <Route path="*" element={<NotMatch />} />
              </Routes>
          </BrowserRouter>
 

  );
}

export default App;
