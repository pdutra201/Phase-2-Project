import React from "react";

function Item({i, handleDelete}){
    function handleClick(){
        handleDelete(i.id)
    }

    return (
        <div>
            <h2>{i.name}</h2>
            <img src={i.image} alt={i.name}/>
            <p>Size:{i.size}</p>
            <p>${i.price}</p>
            <button onClick={handleClick}>Delete</button>
            
        </div>
    )
}

export default Item