import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import ItemDetails from './pages/ItemDetails';

export const AppContext = React.createContext();

function App() {
  const [items, setItems] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:4000/items')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.log(err.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  //console.log(items);

  return (
    <>
      <AppContext.Provider value={{ items, setItems }}>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/items/:id" element={<ItemDetails />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
