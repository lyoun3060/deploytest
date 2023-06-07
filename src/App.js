import { Route, Routes } from 'react-router-dom';
import './App.css';
import React,{useState, useCallback} from 'react';
import ItemsPage from './pages/ItemsPage';


function App() {

  const [category, setCategory] = useState('food')
  const onSelect = useCallback(category => setCategory(category),[])



  return (
    <Routes>
        <Route path="/" element={<ItemsPage/>}/>
        <Route path="/:category" element={<ItemsPage/>}/>
    </Routes>
  );
}

export default App;
