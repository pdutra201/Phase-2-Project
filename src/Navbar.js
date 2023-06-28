import React from "react";
import {NavLink} from "react-router-dom"

function Navbar(){

    return(
        <div>
            <NavLink to="/" exact>
                home
            </NavLink>
        </div>
    )

}

export default Navbar