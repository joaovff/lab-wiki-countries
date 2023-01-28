import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    // Chamando a API
    async function getCountries() {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(response.data);
    }
    getCountries();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/countries"
          element={<CountriesList countries={countries} />}
        />
        <Route path="/countries/:alpha3Code" element={<CountryDetails countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
