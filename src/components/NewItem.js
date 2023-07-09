import React, {useState} from "react";

function NewItem({addNewItem}){

    const [newItem, setNewItem] = useState({
        name:"",
        size:"",
        price:"",
        image:""
    })

    function handleSumbit(e){
        e.preventDefault()
        addNewItem(newItem)
        setNewItem({
            name:"",
            size:"",
            price:"",
            image:""
        })
    }

   
    return(
        <form onSubmit={handleSumbit}>
            <label>Name:</label>
            <input type="text" name="name" onChange={e => setNewItem({...newItem, name:e.target.value})} value={newItem.name}/>
            <br/>
            <label>Size:</label>
            <input type="text" name="size" onChange={e => setNewItem({...newItem, size:e.target.value})} value={newItem.size}/>
            <br/>
            <label>Cost</label>
            <input type="text" name="cost" onChange={e => setNewItem({...newItem, price:e.target.value})} value={newItem.price}/>
            <br/> 
            <label>Image Url:</label>
            <input type="text" name="image" onChange={e => setNewItem({...newItem, image:e.target.value})} value={newItem.image}/>
            <br/>
            <button type="submit">Submit</button>            

        </form>
    )
}

export default NewItem