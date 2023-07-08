import './App.css';
import Navbar from './Navbar';
import ClothesList from './ClothesList';
import Search from './Search';
import NewItem from './NewItem';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom";

function App() {
  const [itemList, setItemList] = useState([])
  const [searchSize, setSearchSize] = useState({shirt:"S", pants:""})

  useEffect(() => {
    fetch("https://clothes-server-6ad0.onrender.com/clothes")
      .then(resp => resp.json())
      .then(data => setItemList(data))
  },[])

 
    const newList = itemList.filter((item) => {
      if(item.size === searchSize.pants){
        return item
      }
      else if (item.size === searchSize.shirt)
        return item
      else
        return null
      })

  function addNewItem(newItem){
    console.log(newItem)
    fetch("https://clothes-server-6ad0.onrender.com/clothes", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newItem.name,
        size: newItem.size,
        url: newItem.url
      })
    })
      .then(resp => resp.json())
      .then(data => setItemList([...itemList, data]))
  }

  function handleDelete(id){
    fetch(`https://clothes-server-6ad0.onrender.com/clothes/${id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(function(){
        const newList = itemList.filter((item) => {
          if(item.id !== id)
            return item
          else  
            return null
        })
        setItemList(newList)
      })
  }
  console.log(itemList)
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Search searchSize={searchSize} setSearchSize={setSearchSize}/>}/>
        <Route path="/clotheslist" element={<ClothesList itemList={newList} handleDelete={handleDelete}/>}/>
        <Route path="/addnewitem" element={<NewItem addNewItem={addNewItem}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
