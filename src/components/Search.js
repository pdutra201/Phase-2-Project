import React from "react";

function Search(){
    return(
        <form>
            <label>Shirt Size:</label>
            <select name="shirtSize">
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
            </select> 
            <br/>
            <label>Pants Size:</label>
            <input type="text" name="pantsSize"/>
            <br/>

            <button type="submit">Submit</button>  
        </form>
    )
}

export default Search