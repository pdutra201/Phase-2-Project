import React from "react";

function Search({searchSize, setSearchSize, filterList}){
function handleShirt(e){
    setSearchSize({...searchSize, shirt: e.target.value})
}
function handlePants(e){
    setSearchSize({...searchSize, pants: e.target.value})
}

function handleSubmit(e){
    e.preventDefault()
    filterList()
}
    return(
        <form onSubmit={handleSubmit}>
            <label>Shirt Size:</label>
            <select name="shirtSize" onChange={handleShirt} value={searchSize.shirt}>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
            </select> 
            <br/>
            <label>Pants Size:</label>
            <input type="text" name="pantsSize" onChange={handlePants} value={searchSize.pants}/>
            <br/>

            <button type="submit">Submit</button>  
        </form>
    )
}

export default Search