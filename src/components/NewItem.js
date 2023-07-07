import React from "react";

function NewItem(){
    function handleSumbit(e){
        e.preventDefault()
    }
    return(
        <form>
            <label>Name:</label>
            <input type="text" name="name"/>
            <br/>
            <label>Size:</label>
            <input type="text" name="size"/>
            <br/>
            <label>Image Url:</label>
            <input type="text" name="image"/>
            <br/>
            <button type="submit">Submit</button>  
            

        </form>
    )
}

export default NewItem