import './App.css';
import Navbar from './Navbar';
import ClothesList from './ClothesList';
import React, {useEffect, useState} from 'react';
// import { Route, Switch } from "react-router-dom";

function App() {
  console.log('hi')
  const [itemList, setItemList] = useState("")
  useEffect(() => {
    fetch("https://clothes-server-6ad0.onrender.com/shirts")
      .then(resp => resp.json())
      .then(data => setItemList(data))
},[])
  console.log(itemList)

  return (
    <div >
      <Navbar />
      <ClothesList />
    </div>
  );
}

export default App;
