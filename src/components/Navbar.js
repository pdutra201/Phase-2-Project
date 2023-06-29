import React from "react";
import {NavLink} from "react-router-dom"

function Navbar(){

    return(
        <nav>
            <NavLink to="/">
                Search
            </NavLink>
            <NavLink to="/clotheslist" >
                Clothes List
            </NavLink>
            <NavLink to="/addnewitem">
                Add New Item
            </NavLink>
        </nav>
    )

}

export default Navbar