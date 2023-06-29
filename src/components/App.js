import './App.css';
import Navbar from './Navbar';
import ClothesList from './ClothesList';
import Search from './Search';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom";

function App() {
  const [itemList, setItemList] = useState("")
  useEffect(() => {
    fetch("https://clothes-server-6ad0.onrender.com/clothes")
      .then(resp => resp.json())
      .then(data => setItemList(data))
},[])
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />}/>
        <Route path="/clotheslist" element={<ClothesList itemList={itemList}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
