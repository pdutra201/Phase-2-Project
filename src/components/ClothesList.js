import React from "react";
import Item from "./Item";

function ClothesList({itemList}){
    const item = itemList.map(i => {return(<Item i={i} key={i.id}/>)})
    if(itemList.length === 0)   
        return(
        <h1>No Results Found</h1>
    )
    else
        return <div>{item}</div> 
    }



export default ClothesList