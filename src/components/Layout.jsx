import React from 'react';
import { Outlet } from "react-router-dom";

/* 
* Outlet is a component to render nested child routes within parent route
* Layout component is used as a layout for a parent route, any content defined in child routes will be rendered inside the <Outlet />
*/

/*
* container-fluid, which is width: 100% at all breakpoints
* col-md-4 will create a 3-column layout on medium-sized screens
* lead: to highlight or emphasize a particular piece of text.
*/

const Layout = () => {
    return(
        <div className = "container-fluid">
            <div className = "row justify-content-center mt-3">
                <div className = "col-md-4 text-center">
                <p className = "lead">Welcome to Hoist Connectivity Platform!</p>
                </div>
               
                <Outlet />
             
            </div>
        </div>
    )
}

export default Layout