import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import ItemsPage from './pages/ItemsPage';


function App() {


  return (
    <Routes>
        <Route path="/" element={<ItemsPage/>}/>
        <Route path="/:category" element={<ItemsPage/>}/>
    </Routes>
  );
}

export default App;
