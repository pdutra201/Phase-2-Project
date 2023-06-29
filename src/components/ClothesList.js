import React from "react";
import Item from "./Item";

function ClothesList({itemList}){
    console.log(itemList)
    const item = itemList.map(i => {return(<Item i={i} key={i.id}/>)})
    console.log(item)
    return(
        <div>{item}</div>
       
    )
}


export default ClothesList