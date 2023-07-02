import React from "react";

function Item({i}){
    return (
        <div>
            <h2>{i.name}</h2>
            <img src={i.image} alt={i.name}/>
            <p>Size:{i.size}</p>
        </div>
    )
}

export default Item