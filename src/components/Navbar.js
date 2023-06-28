import React from "react";
import {NavLink} from "react-router-dom"

function Navbar(){

    return(
        <div>
            <NavLink to="/" exact>
                Search
            </NavLink>
            <NavLink to="/clotheslist" exact>
                Clothes List
            </NavLink>
            <NavLink to="/editlist" exact>
                Edit List
            </NavLink>
        </div>
    )

}

export default Navbar