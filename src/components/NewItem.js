import React, {useState} from "react";

function NewItem({addNewItem}){

    const [newItem, setNewItem] = useState({
        name:"",
        size:"",
        url:""
    })

    function handleSumbit(e){
        e.preventDefault()
        addNewItem(newItem)
    }
    return(
        <form onSubmit={handleSumbit}>
            <label>Name:</label>
            <input type="text" name="name" onChange={e => setNewItem({...newItem, name:e.target.value})} value={newItem.name}/>
            <br/>
            <label>Size:</label>
            <input type="text" name="size" onChange={e => setNewItem({...newItem, size:e.target.value})} value={newItem.size}/>
            <br/>
            <label>Image Url:</label>
            <input type="text" name="image" onChange={e => setNewItem({...newItem, url:e.target.value})} value={newItem.url}/>
            <br/>
            <button type="submit">Submit</button>  
            

        </form>
    )
}

export default NewItem