import React from "react";

function Item({i}){
    console.log(i)
    return (
        <a>
            <img src={i.image}/>
            <p>Size:{i.size}</p>
        </a>
    )
}

export default Item