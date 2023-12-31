import React from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/Home/Home'

import Navbar from "./components/Navbar/Navbar";

const App =()=>{
    
    // 1 callback function
    //as the 2nd parameter we put empty array
        <BrowserRouter>
            <Container maxWidth="lg">
            <Navbar />
            <Switch>
                <Route path="/" exact component ={Home}/>
                <Route path="/auth" exact component ={Auth}/>

            </Switch>
            <Home />
             </Container>
        </BrowserRouter>
   
        
   
}
export default App;
