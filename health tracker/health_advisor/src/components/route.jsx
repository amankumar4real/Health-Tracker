import React from "react";
import {Route} from "react-router-dom";
import Calculator from "./Calculator";
import Register from "./Register"
import Login from "./Login"
import Home from "./Home"
import Dashboard from "./Dashboard"

const Routers = () => {
    return(
        <div>
            <Route path="/" exact component={Home}/>
            {/* <Route path="/calculator" component = {Calculator}/> */}
            <Route path="/register" component = {Register}/>
            <Route path="/login" component = {Login}/>
            <Route path="/dashboard" component = {Dashboard}/>
        </div>
    )
}

export default Routers