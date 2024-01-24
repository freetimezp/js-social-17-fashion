import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import ItemDetails from './pages/ItemDetails';
import Bag from './pages/Bag';
import Collection from './pages/Collection';

export const AppContext = React.createContext();

function App() {
  const [items, setItems] = useState([]);
  const [bag, setBag] = useState([]);
  const [collection, setCollection] = useState([]);

  const fetchData = () => {
    fetch('https://christmas-04.onrender.com/items')
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
      <AppContext.Provider value={{ items, setItems, bag, setBag, collection, setCollection }}>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/items/:id" element={<ItemDetails />} />
          <Route exact path="/bag" element={<Bag />} />
          <Route exact path="/collection" element={<Collection />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
